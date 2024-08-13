const express = require("express");
const { testController } = require("../Controllers/testControllers");
// routerr object
const router = express.Router();

// routes
router.get('/',testController)

module.exports = router;
