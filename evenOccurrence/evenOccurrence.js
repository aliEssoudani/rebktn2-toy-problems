/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/
var evenOccurrence = function(array) {
    // TODO: your solution here
    //  we will count the number of occurance of every element in the array and save the result in an object 
    var occurance = {};
  for(var i  = 0; i < array.length; i++){
      if(typeof(array[i]) ==="number" || typeof(array[i]) ==="string" || Array.isArray(array[i])){
        if(occurance[array[i]]){
            occurance[array[i]]++;
          }else{
            occurance[array[i]]=1}
      }else if(!Array.isArray(array[i])){
        //   we should use JSON.stringify so we can compare two object and cover the nested object part
         var x= JSON.stringify(array[i]);
          if(occurance[x]){
            occurance[x]++;
          }else{
            occurance[x]=1}
      }
      
      
  }
  // console.log(occurance)
//   not finished we should use the same process using while we create the occurance object , we should discuss about the 
// current if it's an object or no ,
//   for (var i = 0; i < array.length; i++) {
//     var current = array[i];

//     if (occurance[current] % 2 === 0) {
//       return current;
//     }
//   }
for (var key in occurance){
    if(occurance[key] %2 ===0){
      return key
    }
  }
 
   return "doesn't exist"
  
  };