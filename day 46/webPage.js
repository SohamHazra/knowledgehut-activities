let url=require('url');
const port=8001;
let http=require('http');
let tHead=`<table border=1px width=900px>
<thead>
    <tr>
        <th width=300px>ID</th><th width=300px>NAME</th><th width=300px>SALARY</th>
    </tr>
</thead>
<tbody>`;
let tTail=`</tbody>
</table>`;


let writeData=require('./services').writeData;
let readData=require('./services').readData;
let showData=require('./services').showData;
let retrieveByID=require('./services').retrieveByID;
let deleteByID=require('./services').deleteByID;

let text='<h1>1. Store\n2. Retrieve All\n3. Retrieve By ID\n4. Delete By Id\n</h1>';
let choice='<h2>Enter your choice in url: (?choice=(option))</h2>';
let option1='<h3>Enter like: (?id=id&name=name&salary=salary)';

http.createServer((req,res)=>{
    let urlText=req.url;
    let urlObj=url.parse(urlText,true);
    let arr=urlObj.query;
    if(urlText!='/favicon.ico'){
        console.log(urlText);
        res.write(text);
        res.write(choice);
        if(arr.choice==1){
            let data={id:arr.id,name:arr.name,salary:arr.salary};
            let msg=writeData(data);
            res.write(msg);
        }
        else if(arr.choice==2){
            let fetchData=readData(true);
            let c2Text;
            if(typeof(fetchData)=='string'){
                c2Text=fetchData;
                res.write(c2Text);
            }else{
                c2Text=showData(fetchData);
                res.write(tHead);
                c2Text.map((ele)=>{
                    res.write(`<tr style=text-align:center>
                        <td>${ele.id}</td><td>${ele.name}</td><td>${ele.salary}</td>
                    </tr>`)
                });
                res.write(tTail);
            }
        }
        else if(arr.choice==3){
            let getId=arr.id;
            let retrivedData=retrieveByID(getId);
            if(typeof(retrivedData)!='string'){
                let tBody=`<tr style=text-align:center>
                <td>${retrivedData.id}</td><td>${retrivedData.name}</td><td>${retrivedData.salary}</td>
            </tr>`;
                res.write(tHead+tBody+tTail);
            }else{
                let tBody=`<tr style=text-align:center>
                <td colspan=3>${retrivedData}</td>
            </tr>`;
                res.write(tHead+tBody+tTail);
            }
        }
        else if(arr.choice==4){
            let deleteId=arr.id;
            res.write(deleteByID(deleteId));
        }
        res.end();
    }
}).listen(port,()=>console.log(`Server running at port ${port}`));