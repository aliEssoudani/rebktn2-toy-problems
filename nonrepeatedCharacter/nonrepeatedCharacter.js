/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  //  we will count the number of occurance of every charachter in the string and save the result in an object 
  var occurance = {};
for(var i  = 0; i < string.length; i++){
    if(occurance[string[i]]){
      occurance[string[i]]++;
    }else{
      occurance[string[i]]=1}
    
}
   // we will return the first key of value 1 
for (var key in occurance){
  if(occurance[key]===1){
    return key
  }
}

};
