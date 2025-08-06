// server.js
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// Connecting to MongoDB
const mongoURI = "mongodb://localhost:27017/myprojectDB"; // My DB name
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB: myprojectDB");
});

// Define Schema and Model to store form data
// My schema name is Project
const projectSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  password: String,
  email: String
});

const Project = mongoose.model("Project", projectSchema); // My schema name

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// API Route to save form data
app.post("/api/formdata", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(200).json({ message: "Form data saved successfully!" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Failed to save" });
  }
});


//Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
