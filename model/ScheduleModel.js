import mongoose from "mongoose";

const schema = new mongoose.Schema({
    monday: {
        type: Object,
        required: true,
    },
    tuesday: {
        type: Object,
        required: true,
    },
    wednesday: {
        type: Object,
        required: true,
    },
    thursday: {
        type: Object,
        required: true,
    },
    friday: {
        type: Object,
        required: true,
    },
    saturday: {
        type: Object,
        required: true,
    },

    sunday: {
        type: Object,
        require: true,
    },
    begin_at: {
        type: Date,
        require: true,
    },
    end_at: {
        type: Date,
        require: true,
    },
  },
  { timestamps: true, }
);

export const ScheduleModel = mongoose.model('Schedule', schema);