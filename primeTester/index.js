/*
A prime number is an integer greater than 1 that has no divisors other than itself and 1. 
Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. 

The tests are looking at the efficiency of your solution (number of operations) as well as correctness!

*/

// Note: The test suite will just hang if your solution isn't effecient.
// If it doesn't pass after a few seconds, you probably need to refactor.

// function primeTester(num) {
//   // your code here...
// }

function primeTester(num) {
  // your code here...
  var devider = 0;
  switch(num){
    case 1 :
      return false;
      break;
    case 2 :
      return true;
      break;
      
  }
  for (let i = 2; i <= num; i++) {
    if(num % i === 0){
      devider++
    }
    if(devider>1){
      break;
    }
    
  }
  if(devider > 1){
    return false
  }else{
   return true
  }
}

// DO NOT EDIT BELOW THIS LINE

module.exports = primeTester;
