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
    const q = "INSERT INTO planets (idplanet, name, num_moons) VALUES (?)";

    const values = [
        req.body.idplanet,
        req.body.name,
        req.body.num_moons] 
    
    db.query(q,[values], (err,data) => {
        if (err) {
            // Handle the error appropriately (e.g., log it, send an error response)
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        // Send the JSON response directly using res.json()
        res.json("Book has been created successfully");
    })
})

app.listen(8800, ()=> {
    console.log("Connected to backend");
})