const  mongoose  = require("mongoose");
const { timeStamp } = require("node:console");
const { type } = require("node:os");

const roomSchema = mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    maxcount : {
        type : Number,
        required : true
    },
    phonenumber : {
        type : Number ,
        required : true
    },
    rentperday : {
        type : Number ,
        required : true
        
    },
    imageUrl : [],
    currentbookings : [],
    type : {
        type : String ,
        required : true
    },
    description : {
        type : String ,
        required : true
    }


} , {
    timeStamp : true ,
})


const roomModel = mongoose.model('rooms' , roomSchema)
module.exports = roomModel

