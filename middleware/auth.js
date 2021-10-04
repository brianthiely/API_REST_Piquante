// Permet de génerer des tokens d'authentifcation
const jwt = require('jsonwebtoken');


// Logique exporter dans les routes pour sécuriser l'acces aux routes par l'authentification
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'kgIGIYTG87669GGJF');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};