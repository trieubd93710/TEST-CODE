var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//Connection mongoodb
mongoose.connect("mongodb+srv://DangBinhTrieu:trieubd93710@cluster0.g6aozin.mongodb.net/?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})

//Schema
let custommerSchema = mongoose.Schema({
  latlong: {
    type: String,
  },
  role: {
    type: String,
  },
  openhour: {
    type: String,
  },
  defaultacount: {
    type: String,
  },
  token: {
    type:String,
  },
  fcm: {
    type:String,
  }
})

let Custommer = mongoose.model('Custommer', custommerSchema)


/* GET home page. */
router.get('/', function(req, res, next) {
  Custommer.find({},(error,data)=>{
    console.log(data)
    res.render('index',{custommers: data})
  })
  // res.render('index', { title: 'Lê Hồng Phương' });
});
router.get('/form-add',function(req,res,next){
  res.render('form-add',{})
})
router.post('/add',function(req,res,next){
  Custommer.create(req.body);
  res.redirect('/')
})
router.get('/form-update/:id',function(req,res,next){
  Custommer.findById(req.params.id,(error,data)=>{
    res.render('form-update',{custommers1: data})
  })
})
router.post('/update',function(req,res,next){
  Custommer.findByIdAndUpdate(req.body.id,req.body,(error,data)=>{
    res.redirect('/')
  })
})
router.get('/form-delete/:id',function(req,res,next){
  Custommer.findByIdAndDelete(req.params.id,(error,data)=>{
    res.redirect('/')
  })
})
module.exports = router;
