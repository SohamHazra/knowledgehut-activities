class User{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    display(){
        return(`................\nName: ${this.name}\nAge: ${this.age}\nGender: ${this.gender}`);
    }
}
module.exports=User;