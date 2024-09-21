const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {createInventoryController ,getInventoryController, getDonarsControllers} = require('../Controllers/inventoryContoller')


const router = express.Router()

// routes 

// add inventory || post 

router.post('/create-inventory',authMiddleware,createInventoryController)
// get all blood records
router.get('/get-inventory', authMiddleware,getInventoryController)

// get hospital blood records
router.post("/get-inventory-hospital"
    ,authMiddleware,
    getInventoryHospitalController)
// get donar records
router.get("/get-donars",authMiddleware,getDonarsControllers);
// get hospital records
router.get("/get-hospital",authMiddleware,);
// get orgnaisation  records
router.get("/get-organisation",authMiddleware,getOrganisationController)

// get orgnaisation records
router.get("/get-orgnaisation-for-hospital",authMiddleware,getOrganisationForHospitalController)


module.exports = router;