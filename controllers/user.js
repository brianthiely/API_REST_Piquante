// Permet de sécurisé un mdp
const bcrypt = require('bcrypt');
const User = require('../models/User');
// Permet de génerer des tokens d'authentifcation
const jwt = require('jsonwebtoken');

// Logique exporter dans les routes pour l'inscription d'utilisateurs
exports.signup = (req, res, next) => {
	bcrypt.hash(req.body.password, 10)
		.then((hash) => {
			const user = new User({
				email: req.body.email,
				password: hash,
			});
			user.save()
				.then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
				.catch((error) => res.status(400).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};

// Logique exporter dans les routes pour la connexion d'un utilisateurs
exports.login = (req, res, next) => {
	User.findOne({ email: req.body.email })
		.then((user) => {
			if (!user) {
				return res.status(401).json({ error: 'Utilisateur non trouvé !' });
			}
			bcrypt
				.compare(req.body.password, user.password)
				.then((valid) => {
					if (!valid) {
						return res.status(401).json({ error: 'Mot de passe incorrect !' });
					}
					res.status(200).json({
						userId: user._id,
						token: jwt.sign({ userId: user._id }, 'kgIGIYTG87669GGJF', {
							expiresIn: '24h',
						}),
					});
				})
				.catch((error) => res.status(500).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};
