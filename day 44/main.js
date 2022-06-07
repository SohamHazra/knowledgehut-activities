let read=require('readline-sync');
let writeData=require('./modules').writeData;
let readData=require('./modules').readData;
let showData=require('./modules').showData;
let getDataFromUser=require('./modules').getDataFromUser;
let flag=true;

do{
    console.log("1. Store\n2. Retrieve All\n3. Retrieve By ID\n4. Delete By Id\n5. Quit");
    let choise=read.questionInt('Enter your choise: ');
    switch(choise){
        case 1:
            let data=getDataFromUser();
            writeData(data);
            break;
        case 2:
            let fetchData=readData();
            showData(fetchData);
            break;
        case 3:
            let user='';
            let getDataById=readData();
            let getId=read.questionInt('Enter the Id to search: ');
            getDataById.map((ele)=>ele.id===getId?user=`\nId: ${ele.id}\nName: ${ele.name}\nSalary: ${ele.salary}\n`:null);
            user.length>0?console.log(user):console.log('\nNo data Found !!\n');
            break;
        case 4:
            let userIndex;
            let deletetDataById=readData();
            let deleteId=read.questionInt('\nEnter the Id to search: ');
            deletetDataById.map((ele)=>ele.id==deleteId?userIndex=deletetDataById.indexOf(ele):null);
            deletetDataById.splice(userIndex,1);
            writeData(deletetDataById,true);
            break;
        case 5:
            flag=false;
            break;
        default:
            console.log('\nWrong Input\n');
    }
}while(flag)