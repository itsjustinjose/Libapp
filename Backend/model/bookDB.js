const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://itsjustinjose:justinjose@cluster0.hvykuwn.mongodb.net/libapp?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err))

let Schema = mongoose.Schema;

const libSchema = new Schema({
    BookName:String,
    Author:String,
    Language:String,
    Genre:String,
    Bookno:Number
});
var libModel = mongoose.model("book",libSchema);
module.exports = libModel;
