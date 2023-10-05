import mongoose, { Schema } from "mongoose";

const blogCommentSchema = new Schema(
  {
    blogId: {
      type: String,
      required: [true, "Blog ID is required"],
    },

    content: { type: String, required: [true, "Content is required"] },
    authorName: { type: String, required: [true, "Author name is required"] },
    authorId: { type: String, required: [true, "Author ID is required"] },
  },
  { timestamps: true }
);

const BlogComments =
  mongoose.models.BlogComment ||
  mongoose.model("BlogComments", blogCommentSchema);

export default BlogComments;
