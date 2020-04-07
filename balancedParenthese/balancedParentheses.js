/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
    var right = 0;
    var left = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === "("){
            left++
        }
        if(str[i] === ")"){
            right++
        }
        
    }
    if(right !==left){
        return false
    }else{
        return true
    }

};