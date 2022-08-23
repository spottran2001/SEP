import { WorkTimeModel } from "../models/WorkTimeModel.js";

export const getWorkTimes = async (req, res) => {
    try {
        const workTimes = await WorkTimeModel.find();

        res.status(200).json(workTimes);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createWorkTime = async (req, res) => {
    try {
        const data = req.body;
        const account_id = {account_id: req.accountId};
        const newWorkTime = Object.assign(account_id, data);

        const workTime = new WorkTimeModel(newWorkTime);
        await workTime.save();
    
        console.log(workTime)
        res.status(200).json(workTime);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateWorkTime = async (req, res) => {
    try {
        const updateWorkTime = req.body;

        WorkTimeModel.findByIdAndUpdate(req.params.id, updateWorkTime, {new: true})
        .then((workTime) => res.json({status: "ok" ,workTime}));
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const deleteWorkTime = async (req, res) => {
    try {
        WorkTimeModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("workTime deleted"))
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const showWorkTime = async (req, res) => {
    try {

        WorkTimeModel.findById(req.params.id)
        .then((workTime) => res.json(workTime))        
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

