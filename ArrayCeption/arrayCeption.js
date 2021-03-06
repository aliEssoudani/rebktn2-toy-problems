// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0


function arrayception (array, depth = 0) {
    let found = 0;
    array.forEach(item => {
      if (!Array.isArray(item)) {
        found = Math.max(found, depth + 1)
      } else {
        found = Math.max(found, arrayception(item, depth + 1))
      }
    })
      
    return found;
}