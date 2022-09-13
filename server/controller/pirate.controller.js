const Pirate = require('../models/pirate.model')

const PirateController ={

//Create
create:(req,res)=>{
    Pirate.create(req.body)
    .then((pirate) =>{
        res.status(201).json({pirate:pirate})
    })
    .catch((err)=> {
        res.status(400).json({message:"Somthing Went Wrong!",error:err})

    })
},
//Read
getAll:(req,res)=>{
    Pirate.find({}).sort({pirateName: 1})
    .then((pirates)=>{
        res.status(200).json({pirates:pirates})
    })
    .catch((err)=> {
        res.status(500).json({message:"Somthing Went Wrong!",error:err})
    })
},
getOne:(req,res)=>{
    Pirate.find({_id:req.params.id})
    .then((pirate)=>{
        res.status(200).json({pirate:pirate})
        })
        .catch((err)=>{
            res.status(500).json({message:"Somthing Went Wrong!",error:err})
        })
},
//Update
update:(req,res)=>{
    Pirate.find({_id:req.params.id})
    .findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then((pirate)=>{
        res.status(200).json({pirate:pirate})
    })
    .catch((err) =>{
        res.status(400).json({message:"Somthing Went Wrong!",error:err})
    })

},
//Delete
delete:(req, res) =>{
    Pirate.findOneAndDelete(req.params.id)
    .then((pirate)=>{
        res.status(200).json({pirate:pirate})
    })
    .catch((err) =>{
        res.status(500).json({message:"Somthing Went Wrong!",error:err})
    })
}

}
module.exports = PirateController