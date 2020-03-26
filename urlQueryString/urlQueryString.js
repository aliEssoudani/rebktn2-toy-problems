/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/
//  it's not working properly for the final result wich contain %
function parseQueryString(url){
    //we need just the string after ? mark 
    var str = url.slice(url.indexOf("?")+1)
    // console.log(str)
    var array = str.split("&")
//     return array;
    var result = []
    for(var i  = 0; i < array.length; i++){
       result.push(array[i].split("=")) 
    }
    return result
} 