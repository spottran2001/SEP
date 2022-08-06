import { ScheduleModel } from "../model/ScheduleModel.js";

export const getSchedules = async (req, res) => {
    try {
        const schedules = await ScheduleModel.find();

        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createSchedule = async (req, res) => {
    try {
        const begin_end_date = req.body;
        const data = {
            morning: {
                _id: "0",
                shift: "Ca sáng",
                days: []
            },
            afternoon: {
                _id: "1",
                shift: "Ca chiều",
                days: []
            },
            night : {
                _id: "2",
                shift: "Ca tối",
                days: []
            }
        };
        const newSchedule = Object.assign(begin_end_date, data);

        const schedule = new ScheduleModel(newSchedule);
        await schedule.save();
    
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
export const confirm = async (req, res) => {
    try {
        let current_schedule = await ScheduleModel.findById(req.params.id);
        ScheduleModel.findByIdAndUpdate(req.params.id, {status: !current_schedule.status}, {new: true})
        .then((schedule) => res.json({status: "ok" ,schedule}));
    } catch (error) {
        res.status(500).json({ error: error });
    }
};


