let read=require('readline-sync');
let writeData=require('./services').writeData;
let readData=require('./services').readData;
let showData=require('./services').showData;
let retrieveByID=require('./services').retrieveByID;
let deleteByID=require('./services').deleteByID;
let flag=true;

do{
    console.log("1. Store\n2. Retrieve All\n3. Retrieve By ID\n4. Delete By Id\n5. Quit");
    let choise=read.questionInt('Enter your choise: ');
    switch(choise){
        case 1:
            let id=read.questionInt("Enter Id: ");
            let name=read.question("Enter Name: ");
            let salary=read.questionInt("Enter Salary: ");
            let inputData={id:id,name:name,salary:salary};
            console.log(writeData(inputData));
            break;
        case 2:
            let fetchData=readData(true);
            typeof(fetchData)=='string'?console.log(fetchData):showData(fetchData);
            break;
        case 3:
            let getId=read.questionInt('Enter the Id to search: ');
            console.log(retrieveByID(getId));
            break;
        case 4:
            let deleteId=read.questionInt('\nEnter the Id to delete: ');
            console.log(deleteByID(deleteId));
            break;
        case 5:
            flag=false;
            break;
        default:
            console.log('\nWrong Input\n');
    }
}while(flag)