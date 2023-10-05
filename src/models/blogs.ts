import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    summary: {
      type: String,
      required: [true, "Summary is required"],
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

const Blog = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);

export default Blog;
