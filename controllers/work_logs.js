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

export const Timekeeping = async (req, res) => {
    try {
        const {month, year, days_of_month} = req.body;

        const month_data=[];
        for (let i = 1; i <= days_of_month; i++){
            const total_work_logs = await WorkLogModel.aggregate([
                {$project: {name: 1, working_time: 1, 
                                create_month: {$month: '$createdAt'}, 
                                create_year: {$year: '$createdAt'},
                                create_day: {$dayOfMonth: '$createdAt'}
                            }
                    },
                    {$match: {create_month: month, create_year: year,
                             create_day: i, account_id: req.accountId}},
                    {$group: {_id : null,sum : { $sum: "$working_time" }}}
            ]);
            let day = {day: i};
            const day_data = Object.assign(month, total_work_logs);
            month_data.push(day_data)
        }
        res.status(200).json({month_data}); 
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const showWorkLogPerAccount = async (req, res) => {
    try {
        const work_logs = await WorkLogModel.find({account_id: req.body.account})
              
        res.status(200).json({work_logs}); 
    } catch (error) {
        res.status(500).json({ error: error });
    }
};