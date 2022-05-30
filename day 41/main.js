// ------------- DEFAULT EXPORT -------------

let obj1=require('./defaultExport');

let cal=new obj1(7,5);
console.log('------------- DEFAULT EXPORT -------------');
console.log('Sum of 2 numbers = ',cal.add());
console.log('Difference of 2 numbers = ',cal.sub());

// ------------- NAMED EXPORT -------------

let {user,hi}=require('./namedExport');
console.log('------------- NAMED EXPORT -------------');

// let Users= new user();
// console.log(Users.name('raj'));
// console.log(Users.age(25));

let Users= new user('Raj',25);
console.log(Users.name1());
console.log(Users.age1());


let Hi=new hi();
console.log(Hi.hello());
console.log(Hi.ty());