/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

function isBalanced (string) {
    var square = 0;
    var curly = 0;
    var parenth = 0;
    var array = [];
    
    for (var i = 0; i < string.length; i++) {
      if (string[i] === '{') {
        curly++;
        array.push('curly');
      } else if (string[i] === '[') {
        square++;
        array.push('square');
      } else if (string[i] === '(') {
        parenth++;
        array.push('parenth');
      } else if (string[i] === '}') {
        curly--;
        array.push('curly');
      } else if (string[i] === ']') {
        square--;
        array.push('square');
      } else if (string[i] === ')') {
        parenth--;
        array.push('parenth');
      }
    }
    console.log(array)
    var tempo = array.slice()
    var reversed = tempo.reverse()
    console.log(reversed)
  if((array.toString() === reversed.toString()) && (curly === 0) && (square ===0) && (parenth === 0)) {
    
  return true
}
  else{return false}
}
