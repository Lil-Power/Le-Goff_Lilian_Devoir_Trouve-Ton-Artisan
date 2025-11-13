TROUVE TON ARTISAN

Application web pour rechercher et contacter des artisans de la région Auvergne-Rhône-Alpes. Le backend est développé en Node.js avec Sequelize/MySQL et inclut un système d’authentification pour l’administrateur.

PRÉREQUIS:
Avant de commencer, assurez-vous d’avoir installé :
Node.js
npm
MySQL

INSTALLATION:
Cloner le projet :
git clone
cd trouve-ton-artisan

Installer les dépendances :
npm install

LANCEMENT DU SERVEUR :
Pour démarrer le backend :
npm start
Le serveur écoute sur : http://localhost:8000

CONNEXION À L'API :

Pour tester les routes nécessitant une authentification (exemple /api/signin) :

Route : POST /api/signin

Body JSON :
{
"email": "test@test.com",
"password": "test1234"
}

Réponse attendue :
"message": "Connexion réussie",
"user": {
"id": 1,
"email": "test@test.com",
"role": "admin"
}

LES ROUTES :
Contact : Méthode / route / description
GET /api/contacts Récupérer tous les contacts
GET /api/contacts/:id Récupérer un contact par ID
POST /api/contacts Créer un contact
PATCH /api/contacts/:id Modifier un contact
DELETE /api/contacts/:id Supprimer un contact

Artisans : Méthode / Route / Description
GET /api/artisans Récupérer tous les artisans
GET /api/artisans/:id Récupérer un artisan par ID
PATCH /api/artisans/:id Modifier un artisan
DELETE /api/artisans/:id Supprimer un artisan

Specialite : Méthode / Route / Description
GET /api/specialites Récupérer toutes les spécialités
GET /api/specialites/:id Récupérer une spécialité par ID
PATCH /api/specialites/:id Modifier une spécialité
DELETE /api/specialites/:id Supprimer une spécialité

Categorie : Méthode / Route / Description
GET /api/categories Récupérer toutes les catégories
GET /api/categories/:id Récupérer une catégorie par ID
PATCH /api/categories/:id Modifier une catégorie
DELETE /api/categories/:id Supprimer une catégorie

NOTES IMPORTANTES :
Les visiteurs du site ne peuvent que soumettre des contacts via le formulaire.
L’authentification est réservée aux administrateurs pour gérer les contacts, les artisans, leur spécialité et la catégorie à laquelle ils appartiennent.
Le mot de passe est haché avec bcrypt pour plus de sécurité.
Les tables utilisent timestamps: false pour éviter les colonnes createdAt et updatedAt.
