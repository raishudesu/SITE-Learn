import { Schema, models, model } from "mongoose";

const materialSchema = new Schema(
  {
    authorId: {
      type: String,
      required: [true, "Author ID is required"],
    },
    authorName: {
      type: String,
      required: [true, "Author name is required"],
    },
    tags: {
      type: String,
      required: [true, "At least one tag is required"],
    },
    link: {
      type: String,
      required: [true, "Material link is required"],
    },
  },
  { timestamps: true }
);

const Material = models.Material || model("Material", materialSchema);

export default Material;
