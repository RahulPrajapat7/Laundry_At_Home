const mongoose = require('mongoose');
const {Schema} = mongoose;
const BillSchema = new Schema({
    user:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'User'
    },
    ItemName:{
        type:String,
        required:true
    },
    ItemPrice:{
        type:Number,
        required:true,
    },
    ItemQuantity:{
        type:Number,
    }
});
const Bill =  mongoose.model('Bill',BillSchema);
module.exports = Bill