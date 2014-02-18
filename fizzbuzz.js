var nums = {
  Fizz: 3,
  Buzz: 5,
  Sivv: 7
};

for (var i=1; i<=100; i++) {
  var ln = '';
  for (var key in nums) {
    if (i % nums[key] === 0) {
      ln += key;
    }
  }
  console.log(ln);
}
