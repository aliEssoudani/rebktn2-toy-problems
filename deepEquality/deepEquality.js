/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3 }}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  // we will change our objects to strings than we will just compare the two strings 
  var a = JSON.stringify(apple);
  var b = JSON.stringify(orange);
  // we dont have to worry about the spaces : JSON.stringify({a:1, b:3       }) = JSON.stringify({a:1, b:3}) = "{"a":1,"b":3}"
 if(a === b){
   return true
 }else{
   return false;
 }
  
};
