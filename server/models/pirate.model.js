const mongoose = require('mongoose')

const PirateSchema = new mongoose.Schema({
        pirateName:{ type:String,
            required:[true,"Pirate Name is required"],
        },
        pirateImg:{
        type:String,
        required:[true,"Image is necessary"]
        },
        pirateCatch:{
        type:String,
        required:[true,"Description is required"]
        },
        crewPos:{
            type:String,
            enum:{
                values:['Captin','First Mate','Quarter Master','Powder Monkey','BoatSwain'],
            },
            required:[true,"Crew Position is required"]
        },
        treasureNum:{
            type:String,
            min:[true,"Treasure Number is required"]
        },
        pegLeg:{
            type:Boolean,
            default:true
        },
        hookHand:{
            type:Boolean,
            default:true
        },
        eyePatch:{
            type:Boolean,
            default:true
        }

}, {timestamps:true})
    



const Pirate = mongoose.model("Pirate",PirateSchema)

module.exports = Pirate