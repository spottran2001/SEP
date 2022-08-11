import { BillModel } from "../models/BillModel.js";

export const statistics = async (req, res) => {
    try {
        const {month, year} = req.body;

        // var datetime = new Date(year, month, 1);
        // datetime.setUTCHours(0,0,0,0);

        // var lastDayOfMonth = datetime.toISOString();

        // var datetime1 = new Date(2022, 6, 2);
        // datetime1.setUTCHours(0,0,0,0);
        // //datetime.setDate(datetime.getDate() -60)
        // var firstDayOfMonth =datetime1.toISOString();

        // const days_data = {
        //     firstDayOfMonth,
        //     lastDayOfMonth
        // }

        // console.log(days_data);
        // const sum_data = await BankModel.find({
        //                                     createdAt: {
        //                                         $gte: firstDayOfMonth,
        //                                         $lte: lastDayOfMonth
        //                                     }
        // }     
        // );
        //const sum_data = await DishModel.find({ recipe:  /1/});
        const sum_data = await BillModel.aggregate([
            {$project: {name: 1, price_total: 1, create_month: {$month: '$createdAt'}}},
            {$match: {create_month: month}},
            {$group: {_id : null,sum : { $sum: "$price_total" }}}
        ])
        const year_data=[];
        for (let i = 1; i <= 12; i++){
            const sum_data = await BillModel.aggregate([
                {$project: {name: 1, price_total: 1, 
                            create_month: {$month: '$createdAt'}, 
                            create_year: {$year: '$createdAt'}
                        }
                },
                {$match: {create_month: i, create_year: year}},
                {$group: {_id : null,sum : { $sum: "$price_total" }}}
            ])
            let month = {month: i};
            const month_data = Object.assign(month, sum_data);
            year_data.push(month_data)
        }
        res.status(200).json({sum_data: year_data});
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
