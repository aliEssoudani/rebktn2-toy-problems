/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
  if(string.length < 2){
    return [string];
  }else{
    var result = [];
    for(var i = 0; i < string.length; i++){
      var stringArr = string.split("");
      var tempo =  stringArr[i];
      delete stringArr[i];
      var restStr = allAnagrams(stringArr.join(""));
          // console.log(restStr)
      for(var j = 0; j < restStr.length; j++){
        result.push(tempo + restStr[j]);
        //console.log(result)
      }
    }
    return result;
  }
};
