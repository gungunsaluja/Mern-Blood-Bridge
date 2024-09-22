import React from 'react'
import { getDonarrListController } from '../../../../Controllers/adminControllers';
import authMiddleware from '../../../../middlewares/authMiddleware';
const express = require('express')
const adminMiddleware = require("../middlewares/AdminMiddleware")
// router object
const router = express.Router();

// get || donar list
router.get('/donar-list',authMiddleware,getDonarrListController)

// export
module.exports = router;