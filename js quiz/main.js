/*
1-i=5;
2-undefined;
3-key="white_rabbit";
*/ 

const number = parseInt(prompt('Enter a positive integer: '));

var x=1 ;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    x *= i;
}
console.log('The sum of natural numbers:', x);

    const number2 = parseInt(prompt('Enter a positive integer: '));
    if(number2%1==0 && number2%number2==0)
    {
        console.log("this is the prime number")
    }
    else{
        console.log("this is not a prime number")
    }


