
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let records;

async function start() {
    await client.connect();

    const db = client.db("WebLabDB");
    records = db.collection("records");

    console.log("MongoDB connected");

    app.listen(3000, () => {
        console.log("Server running at http://localhost:3000");
    });
}

// READ: Get all records
app.get("/api/records", async (req, res) => {
    const data = await records.find().toArray();
    res.json(data);
});

// CREATE: Add a record
app.post("/api/records", async (req, res) => {
    const result = await records.insertOne(req.body);
    res.json({ _id: result.insertedId, ...req.body });
});

// UPDATE: Edit a record
app.put("/api/records/:id", async (req, res) => {
    const id = new ObjectId(req.params.id);

    await records.updateOne(
        { _id: id },
        { $set: req.body }
    );

    res.json({ message: "Record updated" });
});

// DELETE: Remove a record
app.delete("/api/records/:id", async (req, res) => {
    await records.deleteOne({
        _id: new ObjectId(req.params.id)
    });

    res.json({ message: "Record deleted" });
});

start().catch(console.error);
