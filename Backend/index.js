// 1. Import
const express = require ("express");
const libModel = require("./model/bookDB");
const cors = require ('cors')

// 2. initialize
const app = new express();

// 3. Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// Api Creation
// To post data
app.post('/addbooks',async (req,res)=>{
    console.log(req.body)
    var data = await libModel(req.body)
    data.save();
    res.send({status:"Data Saved"})
})

// to view all books
app.get('/viewbooks',async(req,res)=>{
    var data = await libModel.find();
    res.json(data);
})
//to view on ebook
app.get('/viewbook/:id', async(req,res)=>{
    let id =req.params.id
    var dta= await libModel.findById(id)
    res.json(data)
})

// to dellete book
app.delete('/deletebooks/:id', async(req,res)=>{
    console.log(req.params)
    let id = req.params.id;
    await libModel.findByIdAndDelete(id);
    res.json({status:"deleted"})
})

// to update

app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    try{
        await libModel.findByIdAndUpdate(id,req.body)
        res.json({status:"updated"})
    }
    catch(err){
        res.status(500).send(err)
    }
})

// port 
app.listen(3007,()=>{
    console.log("App is working on port 3007")
})

