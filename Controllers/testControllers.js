 const testController = (req,res)=>{
        res.status(200).send({
            messages:"Welcome user",
            success:true,
        })


}
module.exports = {testController};
