const express = require('express')
const app = express()
const cors = require('cors');

const moduleApi = require('./api')

const port = 3000

// Middleware pour servir les fichiers statiques (HTML, CSS)
app.use(express.static(__dirname))
app.use(cors());

// Middleware pour les routes du module API, 
// les routes commencent par /api
app.use('/api', moduleApi)
app.use(express.json())

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendStatus(404)
})

app.listen(port, () => {
  console.log(`Le serveur Express écoute sur le port ${port}`)
})
