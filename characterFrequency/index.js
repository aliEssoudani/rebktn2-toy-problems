/*
Character Frequency

Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.
*/

function characterFrequency(string) {
  // your code here...
  var result =[];
    var array = string.split("");
    var obj = {};
    for (let i = 0; i < array.length; i++) {
      if(obj[array[i]]){
        obj[array[i]]++
      }else{
        obj[array[i]]=1;
      }
      
    }
   console.log(Object.values(obj).sort((a, b) => b-a)) 
   console.log(obj)
    for(var key in obj){
      result.push([key,obj[key]])
    }

    /* let sortFunc = function(a, b) {
    // if a's value === b's and a's key < b's key return -1
    // if a's value === b's and a's key > b's key return 1
    if (b[1] === a[1]) {
      debugger;
      if (a[0] < b[0]) {
        return -1;
      } else {
        return 1;
      }
    } 
    
    // if b's value < a's return -1
    // if b's value > b's return 1
    return b[1] - a[1];
  };*/
    return  result.sort(function(a, b) {
      //order of frequency descending
      if (a[1] > b[1]) {
        return -1;
      } else if (a[1] < b[1]) {
        return 1;
      } 
      //order of char ascending
      if (a[0] > b[0]) {
        return 1;
      } else if (a[0] < b[0]) {
        return - 1;
      }
      
      return 0;
    });
  
}


// DO NOT EDIT BELOW THIS LINE

module.exports = characterFrequency;
