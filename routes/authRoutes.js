const express = require('express');
const { registerController } = require('../Controllers/authControllers');
const router = express.Router();
// routes

router.post('/register',registerController)
module.exports = router