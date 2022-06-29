const express = require('express');
const aws = require('aws-sdk');
const helmet = require('helmet');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const userRoutes = require('./routes/user');
const saucesRoutes = require('./routes/sauce');
const path = require('path');
var fs = require('fs')
require('dotenv').config();
aws.config.region = 'eu-west-3';

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })



// Helmet est un ensemble de middleware qui permet de sécuriser nos en tête http
app.use(helmet());

// Connection de la bibliotheque mongoose à la base de donnée mongoDB
mongoose
	.connect(process.env.SECRET_DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
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
app.use(morgan('combined', { stream: accessLogStream }))

// La fonction static de express va nous permettre de charger les fichiers qui sont stocker dans le dossier images
app.use('/images',  express.static(path.join(__dirname, 'images')));
app.use('/api/auth',userRoutes);
app.use('/api/sauces',saucesRoutes);

module.exports = app;
