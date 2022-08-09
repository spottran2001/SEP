import mongoose from "mongoose";

const schema = new mongoose.Schema({
    morning: {
        type: Object,
        required: true,
    },
    afternoon: {
        type: Object,
        required: true,
    },

    night : {
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
    status: {
        type: Boolean,
        require: true,
        default: false,
    }    
  },
  { timestamps: true, }
);

export const ScheduleModel = mongoose.model('Schedule', schema);