// ******* Set Up Express Server *******
var express = require("express");
var app = express();
//*************************************

var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Book = require("./Book.model");
var port = 8080;

var db = "mongodb://localhost/onlineLibrary";
mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.get("/", function(req, res){
  // console.log(req);
  res.send("Awesome Website!!!");
  // console.log(res);
});

app.get("/books", function(req, res){
  // console.log(req);
  console.log("This is the Books Index... Mongoose is retrieving the BOOKS...");
  Book.find({})
  .exec(function(err, books){
    if(err){
      res.send("An ERROR has occured --- When Finding ALL BOOKS");
    }else{
      console.log(books);
      res.json(books);
    }
  });
});

app.get("/books/:id", function(req, res){
  console.log("Getting ONE BOOK...");
  Book.findOne({
    _id:req.params.id
  }).exec(function(err, book){
    if(err){
      res.send("An ERROR has occured --- When Finding BOOK");
    }else{
      console.log(book);
      res.json(book);
    }
  });
});

app.post("/book", function(req, res){
    var newBook = new Book();

    newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.isbn_13 = req.body.isbn_13;
    newBook.isbn_10 = req.body.isbn_10;
    newBook.img_url = req.body.img_url;

    newBook.save(function(err,book){
      if(err){
        res.send("An ERROR has occured --- When Saving BOOK");
      }else{
        console.log(book);
        res.send(book);
      }
    });
});

app.post("/book2", function(req, res){
  Book.create(req.body, function(err, book){
    if(err){
      res.send("An ERROR has occured --- When Saving BOOK");
    }else{
      console.log(book);
      res.send(book);
    }
  })
})

app.listen(port, function(){
  console.log("app listening on port " + port);
})
