var express = require("express");

var app = express();

var logger =require("morgan")

var User = require("./models/user")

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sample",(err)=>{
    console.log(err?err:"connected to database")
})


app.use(express.json());

app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('Welcome');
});


app.post("/users",(req,res)=>{
    console.log(req.body)
    User.create(req.body,(err,user)=>{
        res.json(user)
    })
})

app.get('/users', (req, res) => {
    User.find({}, (err, user) => {
      res.json({ users: user });
    });
  });


  app.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, user) => {
        res.json(user);
      }
    );
  });
  
  app.delete('/users/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, user) => {
      res.send(`${user.name} was deleted`);
    });
  });


app.listen(4000,()=>{
    console.log("server is listening at port 4k")
})