const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

// POST /api/formdata
router.post("/", projectController.saveFormData);

module.exports = router;
