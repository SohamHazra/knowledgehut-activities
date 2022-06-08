let storeData=require('./model').storeData;
let fetchAll=require('./model').fetchAll;
let fetchById=require('./model').fetchById;
let updateData=require('./model').updateData;

let express=require('express');
let app=express();
let parser=require('body-parser');
const port=8001;

app.use(parser.json());
app.listen(port,()=>console.log(`Server running at port ${port}`));

app.post('/store',(req,res)=>{
    let body=req.body;
    let data=storeData(body.firstName,body.lastName,body.password);
    res.json(data);
});

app.get('/fetch',(req,res)=>{
    let data=fetchAll();
    data.length===0?res.json({msg:'No data to display !!'}):res.json(data);
});

app.get('/fetch/:id',(req,res)=>{
    let id=parseInt(req.params.id);
    let data=fetchById(id);
    typeof(data)==='object'?res.json(data):res.json({msg:`Id ${id} Not found !!`});
});

app.put('/update/:id/:password/:newPassword',(req,res)=>{
    let id=parseInt(req.params.id);
    let password=req.params.password;
    let newPassword=req.params.newPassword;
    let data=updateData(id,password,newPassword);
    if(data===0){
        res.json({msg:'Password is incorrect !!'});
    }else if(data===1){
        res.json({msg:`Id ${id} is not found !!`});
    }else if(typeof(data)==='object'){
        res.json(data);
    }
});