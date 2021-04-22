var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var userSchema= new Schema({
    email:{type: String, lowercase:true},
    age:{type:Number, default:0},
    favourites:["Reading","Sleeping","Reading"],
    marks:[1,2,3,4,45],
    village:{type:String},
    city:{type:String},
    state:{type:String},
    pin:{type:Number},
    user:Schema.Types.ObjectId,
    password:{type:String,minlength:5,maxlength15},
    createdAt:{type:Date,default:new Date()}
})