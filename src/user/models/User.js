const mongoose=require('mongoose');
const UserModel=mongoose.Schema({
    username:{type:String,required:false},
    email:{type:String,required:false},
    mobile:{type:String,required:false},
    
})


module.exports=mongoose.model('Users',UserModel)