const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {createInventoryController ,getInventoryController} = require('../Controllers/inventoryContoller')

const router = express.Router()

// routes 

// add inventory || post 

router.post('/create-inventory',authMiddleware,createInventoryController)
router.get('/get-inventory', authMiddleware,getInventoryController)
module.exports = router

