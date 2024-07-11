import mongoose from "mongoose";

const allocateSchema = new mongoose.Schema({
   fromBank:{
    type:String,
    required:true,
    unique:true,
   },
   units:{
    type:Number,
    required:true,
    
   },
   toBank:{
    type:String,
    required:true,
    unique:true
   },
   transferCity:{
    type:String,
    required:true,

   },
   status:{
    type:String,
    required:true,
    enum:["success", "processing","failure"]
   }

},
  
{ timestamps: true }
 
);

const allocate = mongoose.model("allocate", allocateSchema);

export default allocate
