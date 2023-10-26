const express = require("express")
const app = express()
const cors = require("cors")
const port = 5000
const pool = require("./db")

app.use(cors())
app.use(express.json())


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

app.get("/movies", async (req, res) => {
    const allAccounts = await pool.query("SELECT * FROM movies")
    res.json(allAccounts)
})

app.get("/user_movies/:user_id", async (req, res) => {
    const userId = req.params.user_id;
    try {
        const userMovies = await pool.query(
            `SELECT movies.* FROM movies
            JOIN user_movies ON movies.id = user_movies.movie_id
            WHERE user_movies.user_id = $1`,
            [userId]
        );
        res.json(userMovies.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Failed to retrieve user's selected movies" });
    }
});

app.post("/user_movies/:user_id", async (req, res) => {
    const userId = req.params.user_id;
    const { movieId } = req.body;
    
    try {
        // lägg till filmer till användaren
        await pool.query(
            `INSERT INTO user_movies (user_id, movie_id) VALUES($1, $2)`,
            [userId, movieId]
        );
        res.status(201).json({ message: "Movie added to user's list" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Failed to add movie to user's list" });
    }
});

app.delete("/user_movies/:user_id", async (req, res) => {
    const userId = req.params.user_id;
    
    try {
        // radera filmer från anändaren
        await pool.query(
            `DELETE FROM user_movies WHERE user_id = $1`,
            [userId]
        );
        res.json({ message: "User's selected movies cleared" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Failed to clear user's selected movies" });
    }
});
app.get("/user_list", async (req, res) => {
    try {
      const userList = await pool.query("SELECT id, username FROM users");
      res.json(userList.rows);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Failed to retrieve user list" });
    }
  });

app.listen(port, () => {
    console.log("server started on port:", port)
})

