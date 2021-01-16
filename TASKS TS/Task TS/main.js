"use strict";
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    get Name() {
        return this.name;
    }
    get Address() {
        return this.address;
    }
    set Address(address) {
        this.address = address;
    }
    allInfo() {
        return `this is name${this.name}\n this is address ${this.address}`;
    }
}
class Student extends Person {
    constructor(name, address, program, year, fee) {
        super(name, address);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }
    get Program() {
        return this.program;
    }
    set Program(program) {
        this.program = program;
    }
    get Year() {
        return this.year;
    }
    set Year(year) {
        this.year = year;
    }
    get Fee() {
        return this.fee;
    }
    set Fee(fee) {
        this.fee = fee;
    }
    allInfo() {
        return `this is name${this.name}\n this is address ${this.address} \n this is program ${this.program}
        this is year ${this.year}
        \n this is fee ${this.fee} `;
    }
}
class Staff extends Person {
    constructor(name, address, school, pay) {
        super(name, address);
        this.school = school;
        this.pay = pay;
    }
    get School() {
        return this.school;
    }
    set School(school) {
        this.school = school;
    }
    get Pay() {
        return this.pay;
    }
    set Pay(pay) {
        this.pay = pay;
    }
    allInfo() {
        return `this is name${this.name}\n this is address ${this.address}\n this is schol ${this.school}
        \n this is pay ${this.pay}`;
    }
}
let per = new Person('bosy', 'cairo');
console.log(per.allInfo);
let stu = new Student('ahmed', 'cairo', 'js', 2020, 5000);
console.log(stu.allInfo);
let sta = new Staff('ahmed', 'cairo', 'future', 3000);
console.log(sta.allInfo);
