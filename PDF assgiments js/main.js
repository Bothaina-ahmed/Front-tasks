function palindrome(str) {
    let letters = str.split('').filter(function (str) {
        return /\S/.test(str);
    });
    let reversedLetters = str.split('').reverse().filter(function (str) {
        return /\S/.test(str);
    });

    for (let i = 0; i < letters.length; i++) {
        if (letters[i].toLowerCase() !== reversedLetters[i].toLowerCase()) {
            return false;
        }
    }
    return true;
}
console.log(palindrome("eye")); //true
console.log(palindrome('Race car')); //true

/////////////////////////////////////////////////////////////////////////////////////////////////////////
var str ='hello';
var newStr= str.split('').reverse().join('');
console.log(newStr);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
let number =5;
function sum(a){
    return function(b){
        return function(c){
            return function(d){
                return a + b + c + d + number;
            }
        }
    }
}
console.log(sum(5)(5)(5)(5));
////////////////////////////////////////////////////////////////////////////////////////////////////////
function reverseString(str) {
    return (str ? reverseString(str.substring(1)) + str.charAt(0) : str);
  }
  console.log(reverseString('hello'));
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  var info = {
      infoName : "Bothaina",
      infomessage : "welcome in js",
      getInfo : function(){
          return `Name is ${this.Name}\n message is ${this.message}`;
      }
  }
  console.log(info.infoName);
  console.log(info.getInfo());
  ////////////////////////////////////////////////////////////////////////////
  
  function test_prime(n)
  {
  
    if (n===1)
    {
      return false;
    }
    else if(n === 2)
    {
      return true;
    }else
    {
      for(var x = 2; x < n; x++)
      {
        if(n % x === 0)
        {
          return false;
        }
      }
      return true;  
    }
  }
  
  console.log(test_prime(37));
  /////////////////////////////////////////////////////////////////////////////
  var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
///////////////////////////////////////////////////////////////////////////////
function power(base, exp) {
    if(exp === 0){
        return 1;
    }
    return base * power(base, exp - 1);

}
power(2,2);
///////////////////////////////////////////////////////////////////////////////
console.log(Math.pow(2,3));

