class Person{
    protected name:string;
    protected address:string;
    constructor(name:string, address:string){
        this.name=name;
        this.address=address;
    }
    get Name():string{
        return this.name;
    }
    get Address():string{
        return this.address;
    }
    set Address(address:string){
     this.address=address;
    }
    allInfo():string{
        return `this is name${this.name}\n this is address ${this.address}`;
    }
}
class Student extends Person{
    protected program:string;
    protected year:number;
    protected fee:number;
    constructor(name:string, address:string, program:string, year:number, fee:number){
          super(name,address);
          this.program=program;
          this.year=year;
          this.fee=fee;
    }
    get Program():string{
        return this.program;
    }
    set Program(program:string){
        this.program=program;
    }
    get Year():number{
        return this.year;
    }
    set Year(year:number){
        this.year=year;
    }
    get Fee():number{
        return this.fee;
    }
    set Fee(fee:number){
        this.fee=fee;
    }
    allInfo():string{
        return `this is name${this.name}\n this is address ${this.address} \n this is program ${this.program}
        this is year ${this.year}
        \n this is fee ${this.fee} `;
    }

}
class Staff extends Person{
    protected school:string;
    protected pay:number;
    constructor(name:string,address:string,school:string,pay:number){
        super(name,address);
        this.school=school;
        this.pay=pay;
    }
    get School(){
        return this.school;
    }
    set School(school:string){
        this.school=school;
    }
    get Pay(){
        return this.pay;
    }
    set Pay(pay:number){
        this.pay=pay;
    }
    allInfo():string{
        return `this is name${this.name}\n this is address ${this.address}\n this is schol ${this.school}
        \n this is pay ${this.pay}`;
    }
}
let per = new Person('bosy','cairo');
console.log(per.allInfo);
let stu= new Student('ahmed','cairo','js',2020,5000);
console.log(stu.allInfo);
let sta= new Staff('ahmed','cairo','future',3000);
console.log(sta.allInfo);
