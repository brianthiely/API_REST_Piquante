const mongoose = require('mongoose');
// Ce plugin ajoute une validation de pré-enregistrement pour les champs uniques 
const uniqueValidator = require('mongoose-unique-validator');

// Schéma user, une inscription par adresse mail
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);