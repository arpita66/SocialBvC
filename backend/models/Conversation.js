const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    members: {                     //also contain useids 
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);