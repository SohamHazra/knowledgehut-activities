let a=require('./modules');
let read=require('readline-sync');

let name=read.question('Enter your name: ');
let age=read.question('Enter your age: ');
let gender=read.question('Enter your gender: ');

let users=new a(name,age,gender);
console.log(users.display());