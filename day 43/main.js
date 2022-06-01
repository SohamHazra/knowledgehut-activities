let fs=require('fs');
let obj=require('./modules');
let data=fs.readFileSync('employee.txt').toString().split('|');

let user=new obj(...data);
console.log(user.display());