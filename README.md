# API_REST_Piquante

Ce répository contient la réponse au Projet 6 du cursus Développeur Web d'Openclassrooms.

Il s'agit de Hot Takes : une applications de notations de critique de sauces piquantes !

Pour faire fonctionner ce projet, il faut tout tout d'abord installer le frontend de l'application situé à l'adresse suivante et suivre les instructions :

https://github.com/brianthiely/API_REST_Piquante_Frontend

Une fois le projet installé, cloner ce repository en dehors du dossier API_REST_Piquante_Frontend :

https://github.com/brianthiely/API_REST_Piquante

Faites ensuite un npm install et npm i nodemon pour installer les packages nécessaires à l'utilisation du backend.

Il faudra également créer dans le dossier backend un dossier nommé : images. Celui-ci contiendra toutes les images que vous utiliserez à la création d'une sauce.

Ce projet utilise .dotenv pour protéger les mots de passes et le token appelé dans le code. Il faut donc créer un fichier .env à la racine du dossier backend et renseigner les donnés, référez-vous au fichier ".env-exemple"

J'utilise une base de donnée gratuite sur mongoDB. Vous pouvez en créer une rapidement en suivant ce cours :

https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466348-configurez-votre-base-de-donnees

Une fois l'installation terminée, il faut lancer deux terminaux :

depuis le dossier backend et lancer la commande nodemon server
depuis le dossier API_REST_Piquante_Frontend et lancer la commande npm start
