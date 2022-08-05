import { AccountModel } from "../model/AccountModel.js";

export const decentralization = async (req, res, next) => {

    
    console.log(req.accountId)
    try {
        const account = await AccountModel.findById(req.accountId)

        if (account.role != 0)
            return res
                .status(200)
                .json({ success: false, message: 'Your permission is not enough to do this' })

        try {
            req.account = account
            
            next()
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: error })
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }

	
}