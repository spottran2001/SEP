import { BillModel } from "../models/BillModel.js";
import { StoredModel } from '../models/StoredModel.js'

export const statistics = async (req, res) => {
    try {
        const {month, year} = req.body;

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

export const totalStatistics = async (req, res) => {
    try {

        const statistics = [];

        const sum_bills = await BillModel.aggregate([
            {$project: {name: 1, price_total: 1, }},
            {$group: {_id : null,sum : { $sum: "$price_total" }}}
        ]);
        const bills_total = {bills_total: sum_data};

        const sum_momo = await BillModel.aggregate([
            {$project: {name: 1, price_total: 1, }},
            {$match: {payment_type: "momo"}},
            {$group: {_id : null,sum : { $sum: "$price_total" }}}
        ]);
        const momo_total = {momo_total: sum_momo};

        const sum_stored = await StoredModel.aggregate([
            {$project: {name: 1, price: 1, }},
            {$group: {_id : null,sum : { $sum: "$price" }}}
        ]);
        const stored_total = {stored_total: sum_stored};

        statistics.push(bills_total, momo_total, stored_total);

        res.status(200).json({statistics});
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
