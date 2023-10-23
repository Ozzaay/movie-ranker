const express = require("express")
const app = express()
const cors = require("cors")
const port = 5000
const pool = require("./db")
// const fs = require("fs")
const crypto = require("crypto")

app.use(cors())
app.use(express.json())


function decrypt(string) {
  const key = process.env.REACT_APP_SECURITY
  let result = '';
    for (let i = 0; i < string.length; i++) {
        const charCode = string.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        result += String.fromCharCode(charCode);
    }
    return result.split(", ")
}
app.post("/create", async (req, res) => {
    const { userData } = req.body
    const newUser = decrypt(userData)
    const username = newUser[0]
    const email = newUser[1]
    const password = newUser[2]
    const role = newUser[3]
    
    try {
    
        const newAccount = await pool.query(
            `INSERT INTO accounts (username, password, email, role) VALUES('${username}', '${password}', '${email}', '${role}') RETURNING *`
        )
        res.json(newAccount)
    } catch (err) {
        console.error(err.message)
        
    }
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    
    const account = await pool.query(
        `SELECT * FROM accounts WHERE email = '${email}' AND password = '${password}'`
    )
    
    res.json(account)
})

app.listen(port, () => {
    console.log("server started on port:", port)
})

console.log(process.env.REACT_APP_SECURITY)