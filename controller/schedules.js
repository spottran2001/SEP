import { ScheduleModel } from "../model/ScheduleModel.js";

export const getSchedules = async (req, res) => {
    try {
        const schedules = await ScheduleModel.find();

        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ error: err });
    }
};

export const createSchedule = async (req, res) => {
    try {
        const begin_end_date = req.body;
        const data = {
            monday: {
                ca1:[],
                ca2:[],
                ca3:[]
            },
            tuesday: {
                ca1:[],
                ca2:[],
                ca3:[]
            },
            wednesday: {
                ca1:[],
                ca2:[],
                ca3:[]
            },
            thursday: {
                ca1:[],
                ca2:[],
                ca3:[]
            },
            friday: {
                ca1:[],
                ca2:[],
                ca3:[]
            },
            saturday: {
                ca1:[],
                ca2:[],
                ca3:[]
            },
            sunday: {
                ca1:[],
                ca2:[],
                ca3:[]
            }
        };
        const newSchedule = Object.assign(begin_end_date, data);

        const schedule = new ScheduleModel(newSchedule);
        await schedule.save();
    
        console.log(schedule)
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateSchedule = async (req, res) => {
    try {
        const updateSchedule = req.body;

        ScheduleModel.findByIdAndUpdate(req.params.id, updateSchedule, {new: true})
        .then((schedule) => res.json({status: "ok" ,schedule}));
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const deleteSchedule = async (req, res) => {
    try {
        ScheduleModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("Schedule deleted"))
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const showSchedule = async (req, res) => {
    try {
        ScheduleModel.findById(req.params.id)
        .then((schedule) => res.json(schedule))        
    } catch (error) {
        res.status(500).json({ error: error });
    }
};


