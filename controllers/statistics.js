import { BankModel } from "../models/Banks.js";
import { DishModel } from "../models/DishModel.js";

export const statistics = async (req, res) => {
    try {
        const {month, year} = req.body;

        var datetime = new Date(year, month, 1);
        datetime.setUTCHours(0,0,0,0);

        var lastDayOfMonth = datetime.toISOString();

        datetime.setDate(datetime.getDate() -60)
        var firstDayOfMonth =datetime.toISOString();

        const days_data = {
            firstDayOfMonth,
            lastDayOfMonth
        }

        console.log(days_data);

        // const sum_data = await DishModel.aggregate([
        //                     { $match: {
        //                         createdAt: {
        //                             $gte: ISODate(firstDayOfMonth),
        //                             $lte: ISODate(lastDayOfMonth)
        //                             }
        //                         }
        //                     },
        //                     {
        //                         $group: {
        //                         _id: null,
        //                         totalQty: { $sum: '$price' },
        //                         },
        //                     },
                            
        //                 ]);
        
        // const sum_data = await DishModel.find({$expr:{$eq: [{$month:"$createdAt", month }]}}     
        // );

        // const query = [
        //     {
        //         '$match': {
        //             'createdAt': {
        //                 $gte: firstDayOfMonth,
        //                 $lte: lastDayOfMonth
        //             }
        //         }
        //     },
        //     {
        //         '$group': {
        //             '_id' : null,
        //             'sum' : { '$sum': "price" }
        //         }
        //     }
        // ];
        const sum_data = await DishModel.find({
                                            createdAt: {
                                                $gte: firstDayOfMonth,
                                                $lte: lastDayOfMonth
                                            }
        }     
        );
        const total = await DishModel.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: firstDayOfMonth,
                        $lte: lastDayOfMonth
                    }
                }
            },
            {
                $group: {
                    _id : null,
                    sum : { $sum: "$price" }
                }
            }
        ]).then(function(data){
            console.log(data)
        });

        console.log(days_data, total);
        res.status(200).json(days_data);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};