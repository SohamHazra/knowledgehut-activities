class user{
    name(name){
        this.name=name;
        return(`Hello ${this.name} !`);
    }
    age(age){
        this.age=age;
        return(`You are ${this.age} years old !!`);
    }
}

// class user{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     name(){
//         return(`Hello ${this.name} !`);
//     }
//     age(){
//         return(`You are ${this.age} years old !!`);
//     }
// }


class hi{
    hello(){
        return('hello function is called');
    }
    ty(){
        return('ty function is called');
    }
}

module.exports={user,hi};
