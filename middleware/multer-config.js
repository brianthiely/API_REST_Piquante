// Configuration du package Multer pour gérer les fichiers entrant dans les req 
const multer = require('multer');

const MIME_TYPES = {
	'image/jpg': 'jpg',
	'image/jpeg': 'jpg',
	'image/png': 'png',
};
// Indique à Multer la logique de stockage des fichiers entrants
const storage = multer.diskStorage({
    // Func dest indique d'enregistrer les photos dans le dossier images
	destination: (req, file, callback) => {
		callback(null, 'images');
	},
    // Func filename indique indique d'utiliser le noms d'origine, remplacer les espace par underscore et ajouter extension appropriers
	filename: (req, file, callback) => {
		const name = file.originalname.split(' ').join('_');
		const extension = MIME_TYPES[file.mimetype];
		callback(null, name + Date.now() + '.' + extension);
	},
});

module.exports = multer({ storage: storage }).single('image');
