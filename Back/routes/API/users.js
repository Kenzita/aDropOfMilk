const router = require("express").Router();
const  bcrypt = require("bcrypt");
const connection = require("../../database")


router.post("/login", (req, res) => {
    try {
    // console.log(req.body);
    const { email, password } = req.body;
    const sql = `SELECT idUser, username , password FROM users WHERE email=?`;
    connection.query(sql,[email], async (err, result) => {
        if (err) throw err;
        console.log(result);
        if (!result.length) {
            console.log("USER INCORRECT");
        } else {
            const dbPassword = result[0].password; 
            const passwordMatch  = await bcrypt.compare(password, dbPassword)
            if(!passwordMatch) {
                console.log("USER INCORRECT");
                let doesExist = { message: "User incorrect" };
                res.send(doesExist);
            } else {
                let resultBack = req.body;
                resultBack.idUser = result[0].idUser;
                resultBack.username = result[0].username;
                resultBack.password = dbPassword;
                res.json(resultBack);
            }
        }
    });
} catch (error) {
    console.error(error)
}
});

router.post("/addUser", async (req, res) => {
    // console.log(req.body);
    try{
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); 
    const sql = `SELECT * FROM users WHERE email=?`;
    connection.query(sql,[email], (err, result) => {
        if (err) throw err;
        // console.log(result);
        if (result.length) {
            console.log("EMAIL EXISTANT");
            let isEmail = { message: "Email existant" };
            res.send(isEmail);
        } else {
            const sqlInsert =
                "INSERT INTO users (username, email, password)VALUES (?,?,?)";
            const values = [username, email, hashedPassword];
            connection.query(sqlInsert, values, (err, result) => {
                if (err) throw err;
                let resultBack = req.body;
                resultBack.id = result.insertId;
                res.json(resultBack);
            });
        }
    });
} catch (error) {
    console.error(error)
}
});


module.exports = router;