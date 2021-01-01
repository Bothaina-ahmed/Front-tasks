/*
1-'white_rabbit'
2-error
3- y not defined
4-y not defined
6- true true false
7-Reference error

*/ 

function sum(n1,n2,n3)
{
    console.log(n1+n2+n3);
}
sum(2,3,5);



////////////////////////////////////// find max
let array = [-1, 10, 30, 45, 5, 6, 89, 17];
console.log(Math.max(...array))


//////////////////////////////////////// convert hours to min & sec
var h = Number(prompt('Enter hours'))
var m= h*60;
var s= h*60*60;
console.log(`convert hours to min ${m}`);
console.log(`convert hours to sec ${s}`);