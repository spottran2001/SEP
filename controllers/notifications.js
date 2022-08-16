import { NotificationModel } from "../models/NotificationModel.js";

export const getNotifications = async (req, res) => {
    try {
        const notifications = await NotificationModel.find();

        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createNotification = async (req, res) => {
    try {
        const newNotification = req.body;

        const notification = new NotificationModel(newNotification);
        await notification.save();
    
        console.log(notification)
        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateNotification = async (req, res) => {
    try {
        const updateNotification = req.body;

        NotificationModel.findByIdAndUpdate(req.params.id, updateNotification, {new: true})
        .then((notification) => res.json({status: "ok" ,notification}));
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const deleteNotification = async (req, res) => {
    try {
        NotificationModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("Notification deleted"))
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const showNotification = async (req, res) => {
    try {

        NotificationModel.findById(req.params.id)
        .then((notification) => res.json(notification))        
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
