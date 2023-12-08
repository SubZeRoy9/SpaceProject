import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Mypass123!",
    database:"space"
})

app.use(express.json());
app.use(cors())

app.get("/", (req,res) => {
    res.json("hello this is the backend")
})

app.get("/planets", (req,res) => {

    const q = "Select * from planets";

    db.query(q, (err, data) => {
        if (err) {
            // Handle the error appropriately (e.g., log it, send an error response)
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        // Send the JSON response directly using res.json()
        res.json(data);
    });
})

app.post("/planets", (req, res) => {
    const q = "INSERT INTO planets (`name`, `num_moons`, `fact`) VALUES (?, ?, ?)";

    const values = [
        req.body.name,
        req.body.num_moons,
        req.body.fact
    ];

    db.query(q, values, (err, data) => {
        if (err) {
            // Handle the error appropriately (e.g., log it, send an error response)
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        // Send the JSON response directly using res.json()
        res.json("Planet has been created successfully");
    });
});


app.delete("/planets/:id", (req, res) => {
  const idplanet = req.params.id;

  const q = "DELETE FROM planets WHERE idplanet = ?";

  db.query(q, [idplanet], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json("Planet has been deleted successfully");
  });
});

app.put("/planets/:id", (req, res) => {
    const idplanet = req.params.id;
    const { name, num_moons, fact } = req.body;
  
    const q = "UPDATE planets SET name = ?, num_moons = ?, fact = ? WHERE idplanet = ?";
  
    const values = [name, num_moons, fact, idplanet];
  
    db.query(q, values, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      res.json("Planet has been updated successfully");
    });
  });
  
app.listen(8800, ()=> {
    console.log("Connected to backend");
})