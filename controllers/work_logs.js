import { WorkLogModel } from "../models/WokrLogModel.js";

export const getWorkLog = async (req, res) => {
    try {
        const worklogs = await WorkLogModel.find();

        res.status(200).json(worklogs);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};


export const updateWorkLog = async (req, res) => {
    try {
        const logout_time = req.body;
        const updateWorkLog = {logout_time: logout_time}

        WorkLogModel.findByIdAndUpdate(req.params.id, updateWorkLog, {new: true})
        .then((worklog) => res.json({status: "ok" ,worklog}));
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const showWorkLog = async (req, res) => {
    try {
        WorkLogModel.findById(req.params.id)
        .then((worklog) => res.json(worklog))        
    } catch (error) {
        res.status(500).json({ error: error });
    }
};


