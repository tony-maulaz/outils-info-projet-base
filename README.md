# Installation
## VSCode
- Installer l'extension Volar

# Configuration
- Contrôler les noms des containers et répertoires

# Développement
## Démarrer le serveur (A faire à chaque fois)
- Démarrer le conteneur Docker : `docker-compose up -d`
- Stopper le conteneur Docker : `docker-compose down -v`
- Pour les logs : `docker-compose logs -f -n20`

> Il faut utiliser l'option `-v` pour supprimer les volumes

## Pour développer le graphique avec Vue
- Ouvrir un terminal
- Se connecter au conteneur web : `docker exec -it <container name> bash`
- Une fois dans le conteneur web
- Aller dans le dossier du projet : `cd <nom_du_projet>`
- Initialiser le projet : `npm install`
- Démarrer le serveur avec le mode de watch : `npm run dev` ou `npm run start`
- Accéder au site : `http://localhost:8000/`


# Python (backend)
## Connexion au conteneur
```bash
docker exec -it back bash
```

## Installation des dépendances
```bash
poetry install --no-root
```

## Création de la base de données (tables)
```bash
poetry run python init_db.py
```

## Lancement du serveur
```bash
poetry run uvicorn main:app --host 0.0.0.0 --port 3000 --reload
```

### Swagger et documentation
```bash
http://127.0.0.1:3000/docs
http://127.0.0.1:3000/redoc
```

### Test route
```bash
http://127.0.0.1:3000/api/persons
```


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

