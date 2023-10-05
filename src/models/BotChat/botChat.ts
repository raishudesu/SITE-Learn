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

const BotChats =
  mongoose.models.BotChats || mongoose.model("BotChats", botChatSchema);

export default BotChats;
