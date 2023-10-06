import mongoose, { Schema } from "mongoose";

const forumCommentSchema = new Schema(
  {
    forumId: {
      type: String,
      required: [true, "Forum ID is required"],
    },
    content: {
      type: String,
      required: [true, "Forum comment content is required"],
      maxLength: [
        2500,
        "Forum comment content should not exceed 2500 characters long",
      ],
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

const ForumComments =
  mongoose.models.ForumComments ||
  mongoose.model("ForumComments", forumCommentSchema);

export default ForumComments;
