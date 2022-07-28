import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
  },
  { timestamps: true, }
);

export const CategoryTypeModel = mongoose.model('CategoryType', schema);