// const express = require("express")
// const app = express()
// const cors = require("cors")
// const port = 5000
// const pool = require("./db")

// app.use(cors())
// app.use(express.json())


// app.post("/create", async (req, res) => {
//     const { userData } = req.body
//     const email = userData.email
//     const password = userData.password
    
//     try {
    
//         const newAccount = await pool.query(
//             `INSERT INTO accounts (password, email) VALUES($1, $2) RETURNING *`,
//             [password, email]
//         );
//         res.json(newAccount.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ error: "Failed to create user" });
        
//     }
// })

// app.post("/login", async (req, res) => {
//     const { email, password } = req.body
    
//     const account = await pool.query(
//         `SELECT * FROM accounts WHERE email = '${email}' AND password = '${password}'`
//     )
    
//     res.json(account)
// })

// app.get("/movies", async (req, res) => {
//     const allAccounts = await pool.query("SELECT * FROM movies")
//     res.json(allAccounts)
// })

// app.post("/usermovies", async (req, res) => {
//     const { user_id, movie_title } = req.body;
//     try {
//       const selectedMovie = await pool.query(
//         `INSERT INTO UserMovies (user_id, movie_title) VALUES ($1, $2) RETURNING *`, 
//         [user_id, movie_title]
//       );
//       res.json(selectedMovie.rows[0]);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).json({ error: "Failed to add selected movie" });
//     }
//   });

// app.post("/selectedmovies", async (req, res) => {
//     const { movie_title } = req.body;
//     try {
//       const selectedMovie = await pool.query(
//         `SELECT * FROM movies WHERE title = $1`,
//         [movie_title]
//       );
  
//       if (selectedMovie.rows.length > 0) {
//         res.json(selectedMovie.rows[0]);
//       } else {
//         res.status(404).json({ error: "Movie not found" });
//       }
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).json({ error: "Failed to fetch selected movie data" });
//     }
//   });

// app.listen(port, () => {
//     console.log("server started on port:", port)
// })

