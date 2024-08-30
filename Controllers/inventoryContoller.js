// create inventory
const mongoose =require("mongoose");

const { sortUserPlugins } = require('vite');
const inventoryModel = require('../models/inventoryModel');
const userModel = require('../models/userModel');

const createInventoryController = async (req,res)=>{
    try {
        const { email, inventoryType} = req.body;
        // validation
        const user = await userModel.findOne({email})
      
        if(!user)
        {
             throw new Error('User Not Found')
        }
        // if(inventoryType === 'in' && user.role !=='donar'){
        //      throw new Error('Not a donar account')
        // }
        if(inventoryType === 'out')
        {
             throw new Error('Not a hospital')
        }
        if(req.body.inventoryType == 'out')
        {
            const requestedBloodGroup = req.body.bloodGroup
            const requestedQuantityOfBlood = req.body.quantity
            const organisation = new mongoose.Types.ObjectId(req.body.userId) ;
            // calculate blood
            const totalInOfRequestedBlood = await inventoryModel.aggregate([
                {
                    $match:{
                    organisation,
                    inventoryType:'in',
                    bloodGroup:requestedBloodGroup
                }},{
                    $group:{
                        _id:'$bloodGroup',
                        total:{$sum:'$quantity'}
                    }

                }
            ]);
          
            const totalInOfRequestedBlood = await inventoryModel.aggregate([
                console.log('Total In',totalInOfRequestedBlood)

            ])

            const totalIn = totalInRequestBlood[0]?.total || 0;
            const totalOutOfRequestedBloodGroup = await inventoryModel.aggregate([
                {
                    $match:{
                        organisation,
                        inventoryType:'out',
                        bloodGroup:requestedBloodGroup

                    }
                },
                {
                    $group:{
                        
                    _id:'$bloodGroup',
                    total:{$sum:'$quantity'}
                }
            }
            ]);
            const totalOut = totalOutOfRequestedBloodGroup[0]?.total || 0;

            // in and out calc
            const availableQuantityOfBloodGroup = totalIn-totalOut;

            // qauntity validation
            if(availableQuantityOfBloodGroup<requestedQuantityOfBlood)
            {
                return res.status(500).send({
                    success:false,
                    message:`Only ${availableQuantityOfBloodGroup}ML of ${totalInOfRequestedBlood.toUpperCase()} is available`
                });
            }
            req.body.hospital = user?._id;

        }
        else{
                req.body.donar = user?._id;
    
            
    
        }
        // save record
        const inventory = new inventoryModel(req.body)
        await inventory.save()
        return res.status(201).send({
            success:true,
            message:'New Blood Record Added'
        })
    }
    catch(error)
    {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error in create inventory API',
            error,
        })
    }

};


// get all blood records
const getInventoryController = async(req,res) =>{
    try{

        const inventory = await inventoryModel.find({organisation:req.body.userId})
        .populate('donar').populate('hospital').sort({createdAt: -1});

        return res.status(200).send({
            success:true,
            message:'get all records successfully',
            inventory,

        })
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Error In Get All Inventory',
            error
        })
    }
}
// get donar records
const getDonarsControllers = async(req,res)=>
{

    try{

        const organisation = req.body.userId ;
        // find donars
        const donarId = await inventoryModel.distinct("donar",{
            organisation,
        });
        // console.log(donarId);
        const donars = await userModel.find({_id:{$in:donarId}})
        return res.status(200).send({
            success:true,
            message:"Donar Record Fetched Successfully";
            donars,

        });


    }
    catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Error in Donar records',
            error

        })

    }
}
const getHospitalController = async (req,res)=>{
    try{
        const organisation = reqbody.userId
        // get hospital id
        const hospitalId = await inventoryModel.distinct('hospital',{organisation})
        // find hospital 
        const hospital = await userModel.find({
            _id:{$in :hospitalId}
        })

        return res.status(200).send({
            success:true,
            message:'Hospital Data Fetched Successfully',
            hospital
        })

    }
    catch(error)
    {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Error In get Hospital APi'

        });

    }

}

module.exports = {createInventoryController ,getInventoryController,
getDonarsControllers,
getHospitalController} ;