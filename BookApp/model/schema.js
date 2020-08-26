var mongoose=require('mongoose'),Schema=mongoose.Schema;

var BookSchema=new Schema({
    Book_Name:String,
    Book_Author:String,
    Book_Price:Number,
    Book_Edition:Number
})

module.exports=mongoose.model('BookRegistration',BookSchema);