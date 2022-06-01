class ShowData{
    constructor(id,name,gender,salary){
        this.id=id;
        this.name=name;
        this.gender=gender;
        this.salary=salary;
    }
    display(){
        return(`................\nID: ${this.id}\nName: ${this.name}\nGender: ${this.gender}\nASalary:${this.salary}`);
    }
}
module.exports=ShowData;