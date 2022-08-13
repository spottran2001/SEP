import { WorkLogModel } from "../models/WokrLogModel.js";

export const createWorkLog = async (req, res, next) => {
    try {
        console.log('create worklog')
        const current_time = new Date();
        const work_log_days = current_time.getFullYear().toString()
                        + current_time.getMonth().toString()
                        + current_time.getDate().toString();
        const account_id = {account_id: req.user_id};

        const work_log_days_data = {work_log_days: work_log_days}

        const newWorkLog = Object.assign(account_id, work_log_days_data);

        const worklog = new WorkLogModel(newWorkLog);
        await worklog.save();
    
        next();
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const logoutUpdate = async (req, res, next) => {
    try {
        const current_time = new Date();
        const work_log_days = current_time.getFullYear().toString()
                        + current_time.getMonth().toString()
                        + current_time.getDate().toString();

        let current_work_log = await WorkLogModel.findOne({
                                        account_id: req.accountId, 
                                        work_log_days: work_log_days
                                    })
        
        let begin_time = current_work_log.createdAt.getUTCHours()*60 
                        + current_work_log.createdAt.getUTCMinutes();  
        
        let end_time = current_time.getUTCHours()*60 
                       + current_time.getUTCMinutes();
        
        const working_time = parseFloat(((end_time - begin_time)/60).toFixed(2))

        const updateWorkLog = {logout_time: current_time, working_time: working_time}
        await WorkLogModel.findOneAndUpdate({account_id: req.accountId, work_log_days: work_log_days },
                                        updateWorkLog, {new: true})
        next();
    } catch (error) {
        res.status(500).json({ error: error });
    }
};