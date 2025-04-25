# Mini Projet : Gestion d'une layette de matériel

## Impératifs
- Le projet doit être réalisé en groupe de **2 personnes**.
- La date limite de rendu du projet est fixée au **mardi 10 juin 2025 à 23h59**.
- Une présentation devra être réalisée et inclura :
  - **Démonstration de l'application et présentation de la base de données**
  - **Réponses aux questions techniques**

> la mise en route du projet ne doit pas être réalisée durant la présentation.

- La présentation orale et l’évaluation auront lieu le vendredi 13 juin 2025.

## Contraintes
- Le projet doit être réalisé en utilisant **Docker**.
- Le projet doit être réalisé en utilisant **FastAPI** et **SQLAlchemy** pour le backend.
- Le projet doit être réalisé en utilisant **Vue.js** pour le frontend.
- Le projet doit être réalisé en utilisant **PostgreSQL** pour la base de données.
- La base de données doit être manipulée via une **API** exposant des routes spécifiques.
- Le projet doit être réalisé en utilisant **Git** pour la gestion de version.
- Le projet doit être hébergé sur **GitHub**.
- La base de données doit être remplie avec des données de test pour permettre le bon fonctionnement de l'application.
- Le projet doit être accompagné d'un fichier `README.md` expliquant comment démarrer l'application.
- La base de données doit être stockée dans un volume Docker.

## Description du projet

Le but de ce projet est de créer un site web permettant de gérer une layette qui permet de stocker des composants. C'est une layette
Lista où les tiroirs peuvent être pilotés. En fonction des droits d'accès, les utilisateurs pourront prendre des composants.

Grâce à ce site, il sera possible de suivre la consommation des composants, de connaître le stock disponible et de permettre aux utilisateurs ayant accès de prendre des composants.

Un composant aura les caractéristiques suivantes :
- **Nom** : Nom du composant.
- **Description** : Description détaillée.
- **Référence** : Numéro de référence du composant.
- **Prix** : Prix d'achat.

Les utilisateurs du système posséderont les informations suivantes :
- **Nom**
- **Prénom**
- **Email**
- **Adresse**
- **Rôle** : Rôle de l'utilisateur (administrateur, utilisateur, etc.).

> ⚠️ **Note importante** : La gestion des utilisateurs ne sera pas incluse dans ce projet. Nous utiliserons un seul utilisateur pour la gestion des emprunts et réservations. Cependant, dans la base de données, plusieurs utilisateurs seront enregistrés.

## Fonctionnalités

Le site web devra fournir les fonctionnalités suivantes :

- Affecter un rôle à un utilisateur (étudiant, assistant, professeur, administrateur) (hors projet)
- Créer un nouveau composant
- Gérer une liste de composants
- Afficher la liste des composants disponibles et à qui s’adresser pour les obtenir
- Afficher le stock pour faciliter les commandes de matériel
- Gérer la liste des casiers disponibles dans la layette  (hors projet)
- Ajouter un composant en stock
- Affecter un casier à un composant
- Commander l’ouverture d’un casier et retirer un composant  (hors projet)
- Affecter des droits pour déterminer qui peut retirer un composant d’un casier  (hors projet)
- Identifier un utilisateur grâce à un badge RFID (badge de l’école)  (hors projet)
- Utiliser le protocole pour commander l’ouverture d’un casier depuis l’application  (hors projet)

## Structure de la base de données

Chaque table devra être remplie avec des données de test pour permettre le bon fonctionnement de l'application (au minimum 8).
La base devra être manipulée via une **API** exposant des routes spécifiques.

## Contraintes de la base de données
- Des contraintes devront être mises en place pour assurer l'intégrité des données :
- Un matériel ne peut être emprunté que s'il est disponible.
- Un matériel ne peut être réservé que s'il n'est pas déjà emprunté ou réservé sur la période donnée.
- L'ajout de matériel doit inclure tous les champs obligatoires (nom, description, année, etc.).
- ...

## Démarrage du projet

Dans le fichier `README.md` du projet, vous devrez expliquer comment démarrer l'application. Voici une ébauche des étapes à inclure :

Le fichier `README.md` devra contenir uniquement les informations relatives au projet et à son démarrage. Les commandes d’aide
ne doivent pas apparaître dans ce fichier.

### Prérequis

- **Docker** : Le projet sera exécuté via des conteneurs Docker pour faciliter le déploiement.
- **Node.js** et **Vue.js** : Pour le développement de l’interface frontend.
- **Base de données** : PostgreSQL.

### Étapes pour démarrer le projet

1. **Cloner le projet** : Récupérer les fichiers du projet.
   ```bash
   git clone https://github.com/votre-repository/mini-projet.git
   cd mini-projet
   ```

2. **Démarrer Docker** : Lancer Docker pour le projet.
   ```bash
   docker-compose up -d
   ```

3. **Initialiser la base de données** : Exécuter les migrations pour créer les tables dans la base de données.
   ```bash
   docker exec ...
   ```

4. **Démarrer le serveur** : Lancer le backend (API) et le frontend (Vue.js).
   ```bash
   docker exec ...
   ```

5. **Accéder à l'application** : Ouvrir le navigateur et accéder à l'adresse suivante :
   ```
   http://localhost:8080
   ```

6. **Autres commandes utiles** :
   - **Arrêter Docker** :
     ```bash
     docker-compose down -v
     ```