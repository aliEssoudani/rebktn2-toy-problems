/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
var result = 1;
var result1 = 1;
if(array.length === 3){
    for(var i  = 0; i < array.length; i++){
        result = result * array[i]
    }
   return result;
}else if(array.length > 3){
    var arr1 = array.sort();
    // if all the numbers are positive
    result = result * arr1[arr1.length - 1] * arr1[arr1.length - 2] * arr1[arr1.length - 3]
    console.log(result)
    //if we have negative numbers they will be at the start of our array 
      // we need just two of them(to cover the case tht the two min are negative and their product is positive) multiplied by the max of the array wich is sorted 
    result1 = result1 * arr1[0] * arr1[1] * arr1[arr1.length - 1]
    console.log(result1)
        // we will have result1 new variable and compare it to result , then we will take the max and return it 
        if(result > result1){
            return result;
        }else{
            return result1
        }
    
    
}

}

