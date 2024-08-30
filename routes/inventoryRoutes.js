const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {createInventoryController ,getInventoryController, getDonarsControllers} = require('../Controllers/inventoryContoller')


const router = express.Router()

// routes 

// add inventory || post 

router.post('/create-inventory',authMiddleware,createInventoryController)
// get all blood records
router.get('/get-inventory', authMiddleware,getInventoryController)
// get donar records
router.get("/get-donars",authMiddleware,getDonarsControllers);
// get hospital records
router.get("/get-hospital",authMiddleware,);

module.exports = {
    createInventoryController,
    getInventoryController,
    getDonarsControllers,
    getHosp
};

