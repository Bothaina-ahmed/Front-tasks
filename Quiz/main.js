/*
1- 1;
2-string;
3-[fiat,kia,volvo,mercedes]
fiat
kia
volvo
ercedes
0
1
2
3
*/

var x =Number(prompt('Enter Number'));
if(x%3==0)
{
    console.log("fizz");
}
else if(x%5==0)
{
    console.log("buzz");
}
else if(x%5==0 && x%3==0)
{
    console.log("fizz buzz");
}
else{
    console.log(x);
}
///////////////////////////////////////////////////////////////////


const number1 = parseInt(prompt('Enter a positive integer: '));
const number2 = parseInt(prompt('Enter a positive integer: '));
var x= number1-number2;

let sum = 1;
let sum2=1


// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number1; i++) {
    sum *= i;
   
}
for (let i = 1; i <= number2; i++) {
   
    sum2 *=i;
}
var c=(sum/sum2 )(c)

console.log( sum, sum2, c);






