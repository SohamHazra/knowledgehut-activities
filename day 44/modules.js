let fs=require('fs');
let read=require('readline-sync');

function writeData(data,flag=false){
    if(!flag){
        // make entry in the database
        if(checkFileExists()){
            let arr=readData();
            arr.push(data);
            let arrJSON=JSON.stringify(arr);
            fs.writeFileSync('emp.json',arrJSON);
            console.log("\nNumber of data written: "+arr.length);
        }
    }
    else{
        // delete data from database
        if(!fs.existsSync("emp.json")){
            console.log('\nFile does not exists !!\n');
        }else{
            fs.writeFileSync('emp.json',JSON.stringify(data));
            console.log('\nData updated.\n');
        }
    }
}

function checkFileExists(){
    if(!fs.existsSync("emp.json")){
        let arr=[];
        let newArr=JSON.stringify(arr);
        fs.writeFileSync('emp.json',newArr);
        return true;
    }
    return true;
 }

function readData(){
    if(checkFileExists()){
        let dataFromFile=JSON.parse(fs.readFileSync('emp.json').toString());
        return dataFromFile;
    }
}


function getDataFromUser(){
    let id=read.questionInt("Enter Id: ");
    let name=read.question("Enter Name: ");
    let salary=read.questionInt("Enter Salary: ");
    let inputData={id:id,name:name,salary:salary};
    return inputData;
}

function showData(data){
    data.map((ele)=>{
        console.log(`\n---------------------\nId: ${ele.id}\nName: ${ele.name}\nSalary: ${ele.salary}\n`);
    })
}

module.exports={readData,writeData,getDataFromUser,showData};