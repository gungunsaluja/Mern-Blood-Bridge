const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const { bloodGroupDetailsController } = require('../Controllers/analyticsController');
 



const router = express.Router()
// routes 
// add inventory || post 
router.get("/bloodGroup-data",authMiddleware,bloodGroupDetailsController);



module.exports = router;