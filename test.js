var fizz = require('./fizzfunction.js');

var keys = {
  Fizz: 3,
  Buzz: 5,
  Sivv: 7
}

var num = 21;

console.log('Expected output: FizzSivv');
console.log(fizz(num, keys));
