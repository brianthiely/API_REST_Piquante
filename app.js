const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

mongoose
	.connect(
		'mongodb+srv://Brian:7K9EqhkQLqJ3J@cluster0.s7fx9.mongodb.net/Cluster0?retryWrites=true&w=majority',
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => console.log('Connexion à MongoDB réussie !'))
	.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	next();
});

app.use(express.json());

app.use('/api/auth', userRoutes);

module.exports = app;
