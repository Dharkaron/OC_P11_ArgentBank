# OpenClassroom - Projet 11 _ Argent Bank API

## Implémentez le front-end d'une application bancaire avec React

<hr>

### Prérequis

L'application à besoin des technologies suivantes pour fonctionner

- [Node.js](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Vous pouvez vérifier si les paquets sont installés, et leurs versions, en utilisant les commandes suivantes dans votre terminal:

```bash
# Node.js version
node --version

# Mongo version
mongod --version
## commande alternative
mongo --version
```
<hr>

### Instructions pour lancer l'application:

1. Ouvrir 3 instances de terminal, pour le dossier "Frontend", pour le dossier "Backend", et pour lancer le service Mongodb
2. Activer le service Mongodb (diffère selon les systèmes => sous linux, commande <i><b>`sudo systemctl start mongod.service`</b></i> )
3. Lancer le serveur depuis le Backend
```bash
npm run dev:server
```
4. Lancer l'application depuis le Frontend
```bash
npm run dev
```
<hr>

### Identifiant de connection (Email & Password):
```bash
### Tony Stark
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers
- Email: `steve@rogers.com`,
- Password: `password456`
```