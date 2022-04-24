const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption:String,
    image:{
        public_id:String,
        url:String
    }
});

const PostSchema = new mongoose.Schema(
    {
      userId: {
        type: String,
        required: true,
      },
      caption: {
        type: String,
        max: 500,
      },
      img: {
        type: String,
      },
      likes: {
        type: Array,
        default: [],
      },
      comments: {
          type: Array,
          default: [],
      }
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Post", postSchema);