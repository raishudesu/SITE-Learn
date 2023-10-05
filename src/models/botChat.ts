import mongoose, { Schema } from "mongoose";

const botChatSchema = new Schema(
  {
    authorId: {
      type: String,
      required: [true, "Author ID is required"],
    },
    contents: {
      type: Array,
      required: [true, "Contents are required"],
    },
  },
  { timestamps: true }
);

const BotChat =
  mongoose.models.BotChat || mongoose.model("BotChat", botChatSchema);

export default BotChat;
