const express = require("express")
const app = express()
const cors = require("cors")
const port = 5000
const pool = require("./db")
// const fs = require("fs")
// const crypto = require("crypto")

app.use(cors())
app.use(express.json())


// function decrypt(string) {
//   const key = process.env.REACT_APP_SECURITY
//   let result = '';
//     for (let i = 0; i < string.length; i++) {
//         const charCode = string.charCodeAt(i) ^ key.charCodeAt(i % key.length);
//         result += String.fromCharCode(charCode);
//     }
//     return result.split(", ")
// }
app.post("/create", async (req, res) => {
    const { userData } = req.body
    const email = userData.email
    const password = userData.password
    
    try {
    
        const newAccount = await pool.query(
            `INSERT INTO accounts (password, email) VALUES($1, $2) RETURNING *`,
            [password, email]
        );
        res.json(newAccount.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to create user" });
        
    }
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    
    const account = await pool.query(
        `SELECT * FROM accounts WHERE email = '${email}' AND password = '${password}'`
    )
    
    res.json(account)
})

app.get("/movie", async (req, res) => {
    const allmovies = await pool.query("SELECT * FROM movies ORDER BY id DESC")
    res.json(allmovies.rows)
})

app.listen(port, () => {
    console.log("server started on port:", port)
})

