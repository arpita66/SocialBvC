const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
      },
    
      avatar: {
        public_id: String,
        url: String,
      },
    
      smart_id: {
        type: String,
        required: [true, "Please enter your smart-card id"],
        length: 10,
        unique: [true, "Id already exists"],
      },
      
      email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: [true, "Email already exists"],
      },

      password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Password must be at least 6 characters"],
        select: false, //jab bbi ham user ka data access karenge to usme isko chodhke baaki saare fields aane chahiye
      },
    
      posts: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Post",
        },
      ],

      followers: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    
      following: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    
      resetPasswordToken: String,
      resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {        //taaki hashed password dobara hash na ho
    this.password = await bcrypt.hash(this.password, 10);       //10 recommended h isse zyada par slow hp jaayega
  }

  next();
});

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
};

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex"); //a token is generated

  this.resetPasswordToken = crypto
    .createHash("sha256")        //shad256 is a hashing algo that we're using
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;     //10 min k liye token valid hoga

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);