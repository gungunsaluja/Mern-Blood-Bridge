const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {createInventoryController ,getInventoryController} = require('../Controllers/inventoryContoller')

const router = express.Router()

// routes 

// add inventory || post 

router.post('/create-inventory',authMiddleware,createInventoryController)
// get all blood records
router.get('/get-inventory', authMiddleware,getInventoryController)

router.get("/get-donars",authMiddleware,getDonarsControllers);

module.exports = router;

