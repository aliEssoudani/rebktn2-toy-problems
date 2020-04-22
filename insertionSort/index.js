/*
Insertion sort is a basic sorting algorithm.

Insertion sort iterates over an array, growing a sorted array behind the current location. 
It takes each element from the input and finds the spot, up to the current point, where that element belongs (in constant space). 
It does this until it gets to the end of the array.

Insertion sort should be implemented as a stable sort. 
This means that equal elements should retain their relative order. 
Numbers, as primitives, give us no way to check this, so we'll be sorting objects with a value field, on which they will be sorted, like so:

    [{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]
    
A stable sort must return:

    [{value: 5, order: 1}, {value: 5, order: 2}, {value: 10}]

in that order.

EXTRA CREDIT:

Refactor your sort to (optionally) take an explicit comparator function as its second argument, so that callers can define arbitrary ways to sort elements. 
See Array.prototype.sort for an example of how this works (excerpt below):

If comparator(a, b) is less than 0, sort a to a lower index than b, i.e. a comes first. 
If comparator(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. 
If comparator(a, b) is greater than 0, sort b to a lower index than a.
If no comparator is given, just sort the elements using < or >.
*/

Array.prototype.sort = function() {
  console.log("Please don't use the built in sort function.");
};

function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j].value > temp.value) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

/* function insertionSort(arr){
debugger;
    for(let i = 1; i < arr.length; i++){
        let j = i;
        while(arr[j-1] > arr[j] && j > 0){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
    }
    return arr;
}  
DO NOT EDIT BELOW THIS LINE
// function insertionSort (array) {
//   // define result array equal to copy of given arr
//   // define var temp
//   // iterate through given arr
//     // iterate through the given arr
//       // if the item's value is greater than the next item
//         // set temp equal item
//         // set item to next item
//         // set next item to temp
//   // return the resultarr
  
//   var resultArr = array.slice();
//   var temp;
//   for (var i = 0; i < resultArr.length; i++) {
//     for (var j = 0; j < resultArr.length - 1; j++ ) {
//       if (resultArr[j].value > resultArr[j + 1].value) {
//         temp = resultArr[j];
//         resultArr[j] = resultArr[j + 1];
//         resultArr[j + 1] = temp;
//       }
//     }
//   }
//   return resultArr;
// }*/

module.exports = insertionSort;
