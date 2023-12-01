const router = require("express").Router();

const connection = require("../../database");

router.get("getRecettes", (req, res) => {
    const sql = "SELECT * FROM recettes";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("recettes recupérées");
        res.send(JSON.stringify(result));
    });
})

moduke.exports = router;