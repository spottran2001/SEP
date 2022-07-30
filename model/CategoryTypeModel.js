import mongoose from "mongoose";

const schema = new mongoose.Schema({
    type: {
        type: Boolean,
        required: true,
    },
  },
  { timestamps: true, }
);

export const CategoryTypeModel = mongoose.model('CategoryType', schema);