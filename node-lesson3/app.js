const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));
const Mydata = require("./modles/mydataSchema");
app.set('view engine', 'ejs')


app.get("/", (req, res) => {

  Mydata.find().then((result) => {
     res.render("home", { mytitle: "home page", arr : result })
  }).catch((err) => {
    console.log(err);
  });
 
})
app.get("/index.html", (req, res) => {
  res.send("<h1>تم الارسال بنجاح</h1>")
})



// استبدل كود الاتصال القديم بهذا الكود
mongoose.connect("mongodb://127.0.0.1:27017/all-data")
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`)
    })
  })
  .catch((err) => {
    console.log(err)
  });

app.post('/', (req, res) => {
  console.log(req.body);

  const mydata = new Mydata(req.body);
  mydata.save().then(() => {
    res.redirect("./index.html");
  }).catch((err) => {
    console.log(err);
  });


})
