const express = require("express");
const { testControllers } = require("../controllers/testControllers");

//router object
const router = express.Router();

//routes
router.get("/test", testControllers);

//export
module.exports = router;