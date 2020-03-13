/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/
/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/
Array.prototype.isSubsetOf = function (arr) {
    // your code here
};

//   i will just start with a function isSub  for simple array  
// function isSub(array1, array2){
     
//      for (var j = 0; j < array1.length; j++){
//          var test = false;
//           for (var i = 0; i < array2.length; i++){
//          if(array2[i]===array1[j]){
//              test = true
//          }
//       }
//      }
      
//       return test;
    
        
//     }
    