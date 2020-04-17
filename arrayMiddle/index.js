/*
Array Middle

Given an array of negative/positive integers, return the element in the center position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

function middle(numbers) {
  // your code here...
  if((numbers.length % 2) !==0 ){
    var mid = Math.floor(numbers.length / 2);
    return numbers[mid]
  }else{
    var mid = Math.floor(numbers.length / 2);
    return ((numbers[mid]+numbers[mid-1])/2) 
  }
  
}

// DO NOT EDIT BELOW THIS LINE

module.exports = middle;
