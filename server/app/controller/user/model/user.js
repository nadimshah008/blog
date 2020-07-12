'use strict';

const mongoose =  require("mongoose");

var userSchema =  mongoose.Schema({
name:{
    type:String,
    default:null
},
email:{
    type:String,
    default:null,
    unique:true
},
phone:{
    type:String,
    default:null
}




},
{
    timestamps: true
})


module.exports = mongoose.model('users',userSchema)