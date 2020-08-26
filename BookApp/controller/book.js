var Details=require('../model/schema');

exports.create=function(req,res)
{
    var NewBook=new Details({

        Book_Name:req.body.book_name,
        Book_Author:req.body.book_author,
        Book_Price:req.body.book_price,
        Book_Edition:req.body.book_edition

    });

    NewBook.save(function(err,data){
        res.send(data);
    })
}

exports.getbookdetails=function(req,res)
{
    Details.find(function(err,data){
        res.send(data);
    })
}

