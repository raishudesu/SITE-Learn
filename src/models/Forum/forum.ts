import mongoose, { Schema } from "mongoose";

const forumSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    likes: {
      type: Number,
    },
    content: { type: String, required: [true, "Content is required"] },
    authorName: { type: String, required: [true, "Author name is required"] },
    authorId: { type: String, required: [true, "Author ID is required"] },
    tags: { type: Array },
  },
  { timestamps: true }
);

const Forums = mongoose.models.Forums || mongoose.model("Forums", forumSchema);

export default Forums;
