import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      maxLength: [150, "Title should not exceed 150 characters long"],
    },
    summary: {
      type: String,
      required: [true, "Summary is required"],
      maxLength: [250, "Summary should not exceed 250 characters long"],
    },
    likes: {
      type: Number,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    authorName: { type: String, required: [true, "Author name is required"] },
    authorId: { type: String, required: [true, "Author ID is required"] },
    tags: { type: Array },
  },
  { timestamps: true }
);

const Blogs = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);

export default Blogs;
