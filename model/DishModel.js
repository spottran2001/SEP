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
        default: 0,
    },
    recipe: {
        type: String,
        require: true,
    },
    dish_type: {
        type: Array,
        require: true,
    },
    status:{
        type: Boolean,
        default: true,
    },
    avatar:{
        type: String,
        require: true,
    },
    category_type:{
        type: Boolean,
        require: true,
    }

  },
  { timestamps: true, }
);

export const DishModel = mongoose.model('Dish', schema);