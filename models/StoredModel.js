import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    payment_type:{
        type: String,
        require: true,
    },
    avatar:{
        type: String,
        require: false,
    },
  },
  { timestamps: true, }
);

export const StoredModel = mongoose.model('Stored', schema);