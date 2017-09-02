const express = require('express')
const mongoose   = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')


var url = "mongodb://localhost:27017/application";

server = express()
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true}));


mongoose.Promise = global.Promise
mongoose.connect(url)
let db = mongoose.connection

db.once('open',()=>console.log('connectod to DB'))

const Model = mongoose.model('api',{username:String,text:String,img:String,date:Date,commenst:Array,likes:Number})
const User  = mongoose.model('user',{username:String,password:String,keeploogedin:Boolean,ip:String})

let nmodel = new Model

    server.get('/api',(req,res)=>{
    	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    Model.find({},(err,data)=>res.json(data))
    /*	MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.collection('api').find({}).toArray((err,result)=>{
	    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
		res.json(result)
})
})*/
    })

    server.post('/api',(req,res)=>{
    	nmodel = new Model
    	console.log(req.body)
    	console.log("receiving post request")
    	nmodel.username = req.body.username
        nmodel.text = req.body.text
        nmodel.img  = req.body.img
        nmodel.date = new Date()
        nmodel.likes = 0
        nmodel.comments = []
        nmodel.save()
        res.send("you did good")
    	/*
    	MongoClient.connect(url,(err,db)=>{
        let myobj = {}
        myobj.username = req.body.username
        myobj.text = req.body.text
        myobj.img  = req.body.img
        myobj.date = new Date()
        myobj.likes = 0
        myobj.comments = []
	    db.collection("api").insertOne(myobj, function(err, res) {
	    if (err) throw err;
	    console.log("1 document inserted");
	    db.close()
  });
	    })*/
	    
})
		    server.post('/heart',(req,res)=>{
		    	Model.findById(req.body.id,(err,name)=>{
		    		name.likes += 1
		    		name.save()
		    	})
		    	res.send("i am so excited")
		  /*	console.log(req.body.id+ " s " + req.body.likes)

		  	const newValues = {$set:{likes: 2}}
	    	MongoClient.connect(url,(err,db)=>{
	    	if(err) throw err
		    db.collection("api").updateOne({username:"petar02"},{text:'let"s  our mome hope it wokrks'},function(err2, res2) {
		    if (err2) throw err2;
		    console.log("1 document updated");

		    console.log(res2)
		    db.close()
		    
	  })
		    res.send("It worked") */
	   // })
	  })
		    server.get('/newaccount',(req,res)=>{
		    	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    User.find("users",{},(err,data)=>res.json(data))
		    })

		    server.post('/newaccount',(req,res)=>{
		    	user = new User
		    	user.username = req.body.username
		    	user.password = req.body.password
		    	user.keeploogedin = req.body.keeploogedin
		    	user.ip = req.body.keeploogedin
		    	user.save()
		    	res.send("good job")
		    })

server.listen(8888,()=>console.log("it works"))
