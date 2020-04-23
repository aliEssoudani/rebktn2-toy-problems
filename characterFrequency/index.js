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
    for(var key in obj){
      result.push([key,obj[key]])
    }
    return result
}

// DO NOT EDIT BELOW THIS LINE

module.exports = characterFrequency;
