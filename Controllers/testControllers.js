 const testController = (req,res)=>{
        res.status(200).send({
            messages:"test route",
            success:true,
        })


}
module.exports = {testController};
