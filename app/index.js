require('dotenv').config();
const express = require('express');

// Databases
require('./db/sequelize');

const app = express();

app.use(express.json())

const { user: UserModel } = require('./db/sequelize');

app.route('/').get(async (req, res) => {
	try {
		const users = await UserModel.findAll({ logging: console.log });
		res.send(users);
	} catch (e) {
		throw e;
	}
});

app.route('/add-user').post(async (req, res, next) => {
	try {
		const { fullname } = req.body;
		const user_id = Date.now(); // simple hack for quick ID generation
		const user = await UserModel.create({ fullname, id: user_id });
		res.send(user);
	} catch (e) {
		next(e);
	}
});

const port = process.env.NODEJS_LOCAL_PORT || 3000;
app.listen(port, () => {
	console.log(`Worker: process ${process.pid} is up on port ${port}`);
});
