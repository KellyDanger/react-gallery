const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    let galleryId = req.params.id;
    const queryText = `UPDATE "gallery" SET "likes"="likes"+1 WHERE id = $1;`
    pool.query(queryText, [galleryId])
        .then((result) => {
            res.sendStatus(200);
        }).catch ((error) => {
            console.log(`Error making database query ${queryText}`);
            res.sendStatus(500);            
        })
})


// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);
    const queryText = `SELECT * FROM  "gallery" ORDER BY "id";`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(`error making databasequery ${queryText}`, error);
        res.sendStatus(500);
    })
}); // END GET Route

module.exports = router;