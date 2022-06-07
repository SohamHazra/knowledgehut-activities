let fs=require('fs');

function writeData(data){
    if(checkFileExists()){
        let arr=readData();
        arr.push(data);
        let arrJSON=JSON.stringify(arr);
        fs.writeFileSync('emp.json',arrJSON);
        return "\nNumber of data written: "+arr.length;
    }
    
}

function checkFileExists(){
    if(!fs.existsSync("emp.json")){
        let arr=[];
        let newArr=JSON.stringify(arr);
        fs.writeFileSync('emp.json',newArr);
        // return true;
    }
    return true;
 }

function readData(flag=false){ 
    if(checkFileExists()){
        let dataFromFile=JSON.parse(fs.readFileSync('emp.json').toString());
        
        if(flag==true){
            if(dataFromFile.length>0){
                return dataFromFile;
            }else{
                return '\nThere is no data !!\n';
            }
        }else{
            return dataFromFile;
        }
    }
}

function retrieveByID(getId){
    let user='';
    let getDataById=readData();
    getDataById.map((ele)=>ele.id===getId?user={id:ele.id,name:ele.name,salary:ele.salary}:null);
    // console.log(typeof(user));
    if(typeof(user)=='object'){
        return user;
    }else{
        return '\nNo data Found !!\n';
    }
}


function deleteByID(deleteId){
    let flag=true;
    let deletetDataById=readData();
    // console.log(deletetDataById[0].id);
    if(deletetDataById.length==0){
        return '\nFile is empty !!\n'
    }else{
        for(let i=0;i<deletetDataById.length;i++){
            if(deletetDataById[i].id===deleteId){
                deletetDataById.splice(i,1);
                flag=false;
            }
        }
        if(!flag){
            fs.writeFileSync('emp.json',JSON.stringify(deletetDataById));
            return '\nData deleted !!\n';
        }else{
            return `\nId: ${deleteId} not exists !!`;
        }
    }
}

function showData(data){
    let arr=[];
    data.map((ele)=>{
        let allData={id:ele.id,name:ele.name,salary:ele.salary};
        arr.push(allData);
        // return (allData);
    })
    return arr;
}

module.exports={readData,writeData,showData,retrieveByID,deleteByID};