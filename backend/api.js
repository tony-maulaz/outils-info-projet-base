const express = require('express');
const router = express.Router();
const db = require('./pg');

router.get('/', (req, res) => {
    res.send('Bienvenue dans le module API !');
});


// http://127.0.0.1:3000/api/user?id=12
router
    .get('/user', (req, res) => {
        console.log(req.query.id)
        const data = { val: 12 }
        res.json(data)
    })

// http://127.0.0.1:3000/api/test/2
router
    .get('/test/:id', async (req, res) => {
        try {
            console.log(`Récupération du test avec id : {req.params.id}`);
            const result = await db.query('select * from tests where id =$1', [req.params.id]);
            console.log(result.rows);
            res.json(result.rows);
        }
        catch (err) {
            console.log
            res.status(500).send('Erreur lors de la récupération des données');
        }
    })

// Traitement d'une requête POST avec comme url : http://127.0.0.1:3000/user
router
    .post('/user', express.json(), (req, res) => {
        console.log(req.body)
        console.log("Id : " + req.body.id)
        res.json(req.body)
    })

// exports, est un objet commun qui permet d'exporter des données ou fonctions
module.exports = router;
// or exports.router = router;