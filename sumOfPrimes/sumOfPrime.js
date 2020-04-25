/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
*/

function sumOfPrimes(n) {
    // your code here...
   
    var result = 0;
   var  primeTester = function (num) {
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
    for (let i = 0; i <=n; i++) {
        if(primeTester(i)){
            result=result + i
        }
        
    }
    return result;
}
