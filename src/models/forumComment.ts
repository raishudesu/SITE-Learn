import mongoose, { Schema } from "mongoose";

const forumCommentSchema = new Schema(
  {
    forumId: {
      type: String,
      required: [true, "Forum ID is required"],
    },
    content: {
      type: String,
      required: [true, "Forum content is required"],
    },
    likes: {
      type: Number,
    },
    authorName: {
      type: String,
      required: [true, "Author name is required"],
    },
    authorId: {
      type: String,
      required: [true, "Author ID is required"],
    },
  },
  { timestamps: true }
);

const ForumComment =
  mongoose.models.ForumComment ||
  mongoose.model("ForumComment", forumCommentSchema);

export default ForumComment;
