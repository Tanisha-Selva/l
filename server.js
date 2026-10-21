const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/quizdb")
.then(function() {
    console.log("MongoDB Connected");
})
.catch(function(error) {
    console.log("MongoDB Connection Error:", error);
});

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    }
});

const Question = mongoose.model("Question", questionSchema);

// CREATE
app.post("/api/questions", async function(req, res) {
    try {
        const question = new Question(req.body);
        await question.save();
        res.json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ
app.get("/api/questions", async function(req, res) {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE
app.put("/api/questions/:id", async function(req, res) {
    try {
        const question = await Question.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE
app.delete("/api/questions/:id", async function(req, res) {
    try {
        await Question.findByIdAndDelete(req.params.id);
        res.json({ message: "Question deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(5000, function() {
    console.log("Server running at http://localhost:5000");
});
