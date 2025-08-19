const Project = require("../models/Project");

exports.saveFormData = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(200).json({ message: "Form data saved successfully!" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Failed to save" });
  }
};
