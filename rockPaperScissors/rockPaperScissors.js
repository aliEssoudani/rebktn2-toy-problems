/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function () {

  // TODO: your solution here
  var result = [];
  var throwP = ["R","P","S"];
  // we need 3 loops to cover all the possible cases , because we already know they are 3 rounds 
  for(var i = 0; i < throwP.length; i++){
    for(var j = 0;j < throwP.length;j++){
      for(var k = 0;k < throwP.length;k++){
        var str ="";
        str = throwP[i]+throwP[j]+throwP[k];
        result.push(str);
      }
    }
  }
  return result;
};
// to make this function work for n rounds we should make the for loop n times 
  // we will need to use recursion.
    // we will decrease the round number for each invokation of the recursive function  = == to increase the number of played round.