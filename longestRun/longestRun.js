/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and 
returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

var longestRun = function(string) {

}


var longestRun = function (string) {
  let max = [0, 0];
  for (let i = 0; i < string.length; i++) {
    let first = i;
    while(string[i] && string[first] === string[i]) {
    i++
    }
    i--
    if (max[1] - max[0] < i - first) max = [first, i];
  }
  return max;
};

