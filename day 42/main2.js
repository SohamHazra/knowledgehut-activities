let a=require('./modules');
let read=require('readline-sync');
let data=[];

do{
    let usr=[];
    usr.push(read.question('Enter your name: '));
    usr.push(read.question('Enter your age: '));
    usr.push(read.question('Enter your gender: '));
    data.push(usr);
    var ans=read.question('Want to continue? : ');
}while(ans!='quit')

data.forEach((ele)=>{
    user=new a(...ele);
    console.log(user.display());
})