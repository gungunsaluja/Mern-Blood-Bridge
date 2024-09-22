import React from 'react'
import { getDonarrListController } from '../../../../Controllers/adminControllers';
import authMiddleware from '../../../../middlewares/authMiddleware';
import { getOrgListController } from '../Controllers/adminControllers';
import { getHospitalListController } from '../Controllers/adminControllers';
const express = require('express')
const adminMiddleware = require("../middlewares/AdminMiddleware")
// router object
const router = express.Router();

// get || donar list
router.get(
    '/donar-list'
,authMiddleware
,getDonarrListController)

// get || hospital list
router.get(
    '/hospital-list'
,authMiddleware
,getHospitalListController)

// get || Org list
router.get(
    '/org-list'
,authMiddleware
,getOrgListController)




// DELETE DONAR || GET

router.delete('/delte-donar/:id',authMiddleware,adminMiddleware,deleteDonarController);
// export
module.exports = router;