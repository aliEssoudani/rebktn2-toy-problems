/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
    var start = 0;
    var end = array.length - 1 ;
    while(start <= end){
        var midInd = Math.floor((start + end)/2);
        if(array[midInd] === target){
            return midInd;
        }
        else if(array[midInd] < target){
            start = midInd +1
        }
         else{
            end = midInd -1
        }
    }
    return "target not fount"
    
};


