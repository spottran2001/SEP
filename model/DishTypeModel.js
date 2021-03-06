import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category_type_id: {
      type: String,
      required: true,
  },
  },
  { timestamps: true, }
);

export const DishTypeModel = mongoose.model('DishType', schema);