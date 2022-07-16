import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        require: true,
    },
    amount: {
        type: Number,
        require: true,
        
    },
    amount_sell: {
        type: Number,
        require: true,
    },
    recipe: {
        type: Array,
        require: true,
    },
    status:{
        type: Boolean,
        require: true,
        default: true,
    },
  },
  { timestamps: true, }
);

export const DishModel = mongoose.model('Dish', schema);