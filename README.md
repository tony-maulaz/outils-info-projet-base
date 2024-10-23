# Installation
## VSCode
- Installer l'extension Volar

# Configuration
- Contrôler les noms des containers et répertoires
- Dans `pg.js` sélectionner le schéma par défaut dans la base de données.

# Développement

## Démarrer le serveur (A faire à chaque fois)
- Démarrer le conteneur Docker : `docker-compose up -d`

## Pour développer le graphique avec Vue
- Ouvrir un terminal
- Se connecter au conteneur web : `docker exec -it <container name> bash`
- Une fois dans le conteneur web
- Aller dans le dossier du projet : `cd <nom_du_projet>`
- Initialiser le projet : `npm install`
- Démarrer le serveur avec le mode de watch : `npm run dev` ou `npm run start`
- Accéder au site : `http://localhost:8000/`


# API (serveur experess)
## Pour utiliser l'api
- Ouvrir un terminal
- Se connecter au conteneur web : `docker exec -it <container name> bash`
- Aller dans le dossier du serveur express : `cd <nom du projet>`
- Démarrer le serveur : `npm run start`
- Démarrer le serveur : `npm run dev` pour le mode de développement

# Base de données
## Commande initialisation
- `docker exec <container> psql -U postgres -q -d mydb -f /init.sql`

## Commande pour se connecter à la base de données en ligne de commande
- `docker exec -it <container> psql -U postgres -d mydb`
- `set SCHEMA 'test';` pour changer de schéma
- `\l` pour lister les bases de données
- `\dn` pour lister les schémas
- `\dt` pour lister les tables
- `\q` pour quitter
- `\c mydb` pour se connecter à la base de données

### Pour configurer le schéma par défaut en ligne de commande
- `SHOW search_path;` pour afficher le schéma par défaut
- `SET search_path TO test;` pour changer le schéma par défaut