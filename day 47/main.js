let express=require('express');
let app=express();
const port=8001;

app.listen(port,()=>console.log(`Server started at ${port}`));

app.post('/store/:id/:name/:salary',(req,res)=>{
    let emp={id:parseInt(req.params.id),name:req.params.name,salary:parseInt(req.params.salary)};
    res.json(emp);
});

app.get('/fetch/:id',(req,res)=>{
    let msg={msg:`Id no ${parseInt(req.params.id)} is Fetched.`};
    res.json(msg);
});

app.put('/update/:id/:salary',(req,res)=>{
    let emp={id:parseInt(req.params.id),salary:parseInt(req.params.salary)};
    res.json(emp);
});

app.delete('/remove/:id',(req,res)=>{
    let msg={msg:`Id: ${parseInt(req.params.id)} is Deleted !!`};
    res.json(msg);
});