db.books.insert({
  title:"CSS3 For Web Designers",
  author:"Dan Cederholm",
  isbn_13:"9780984442522",
  isbn_10:"",
  img_url:"css3-for-web-designers"
});

books.findOne({ img_url:"css3-for-web-designers" }, function (err, doc){
  doc.img_url = "css3-for-web-designers.jpg";
  doc.save();
});

db.books.update(
   { title: "CSS3 For Web Designers" },
   {
     title: "CSS3 For Web Designers",
     author:"Dan Cederholm",
     isbn_13:"9780984442522",
     isbn_10:"",
     img_url:"css3-for-web-designers.jpg"
   },
   { upsert: true }
)
