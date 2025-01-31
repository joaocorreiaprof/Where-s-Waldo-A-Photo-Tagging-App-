const express = require("express");
const { validateSelection } = require("../controllers/waldoController");
const router = express.Router();

router.post("/validate-selection", validateSelection);

module.exports = router;
