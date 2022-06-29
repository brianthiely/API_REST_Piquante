// Configuration du package Multer pour gérer les fichiers entrant dans les req 
import multer, { diskStorage } from 'multer';

const MIME_TYPES = {
	'image/jpg': 'jpg',
	'image/jpeg': 'jpg',
	'image/png': 'png',
};
// Indique à Multer la logique de stockage des fichiers entrants
const storage = diskStorage({
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

export default multer({ storage: storage }).single('image');
