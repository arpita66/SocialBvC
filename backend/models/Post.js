const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  caption: String,

  image: {
    public_id: String,                 //cloudinary m public id aur url deta h
    url: String,
  },

  // caption: {
  //   type: String,
  //   max: 500,
  // },

  owner: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",                            //user vale model k reference ki id hogi
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  comments: [        // comments k andar ek obj jo ki do cheeein include krega
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      comment: {
        type: String,
        required: true,       //kyunki koi user khaali comment nahi kr skta
      },
    },
  ],
},
// { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);