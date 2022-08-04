import { AccountModel } from "../model/AccountModel.js";
import jwt from 'jsonwebtoken';

// @route POST api/auth/login
// @desc Login account
// @access Public
export const login = async (req, res) => {
	const { email, password } = req.body

	// Simple validation
	if (!email || !password)
		return res
			.status(400)
			.json({ success: false, message: 'Missing email and/or password' })

	try {
		// Check for existing account
		const account = await AccountModel.findOne({ email })
		if (!account)
			return res
				.status(400)
				.json({ success: false, message: 'Incorrect email or password' })

		// account found
		const passwordValid = account.password == password
		if (!passwordValid)
			return res
				.status(400)
				.json({ success: false, message: 'Incorrect email or password' })

		// All good
		// Return token
		const accessToken = jwt.sign(
			{ accountId: account._id },
			process.env.ACCESS_TOKEN_SECRET
		)

		res.json({
			success: true,
			message: 'account logged in successfully',
			accessToken
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
};
export const logout = async (req, res) => {

	res.status(200).json("Logged out successfully")
}

