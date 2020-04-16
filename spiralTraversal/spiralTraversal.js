/*
Spiral Traversal

Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the center.

spiralTraversal([ 
  [ 1, 2, 3, 4, 5 ], 
  [ 6, 7, 8, 9, 10 ], 
  [ 11, 12, 13, 14, 15 ], 
  [ 16, 17, 18, 19, 20 ], 
  [ 21, 22, 23, 24, 25 ] 
]) 

// output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]


spiralTraversal([ 
  [ 1, 2, 3, 4, 5 ], 
  [ 6, 7, 8, 9, 10 ], 
  [ 11, 12, 13, 14, 15 ], 
  [ 16, 17, 18, 19, 20 ], 
  [ 21, 22, 23, 24, 25 ] 
])	

// output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]

spiralTraversal([ 
  [ 1, 2, 3 ], 
  [ 4, 5, 6 ], 
  [ 7, 8, 9 ], 
  [ 10, 11, 12 ], 
  [ 13, 14, 15 ], 
  [ 16, 17, 18 ], 
  [ 19, 20, 21 ], 
  [ 22, 23, 24 ] 
])	

// output: [ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]

spiralTraversal([[ 1 ], [ 2 ], [ 3 ], [ 4 ]])	// [ 1, 2, 3, 4 ]

spiralTraversal([[ 1, 2, 3, 4, 5, 6, 7 ]]) // [ 1, 2, 3, 4, 5, 6, 7 ]
*/
function spiralTraversal (matrix) {
  var result = [];
  var i = 0;
  var j = 0;
  var direction = 'right';
  var traverseLength = matrix.length;
  
  while (traverseLength > 0) {
    console.log(matrix[i][j]);
    result.push(matrix[i][j]);
    switch (direction) {
      case 'right':
        j++;
        if (j === traverseLength - 1) {
          direction = 'down';
        }
        break;
      case 'down':
        i++;
        if (i === traverseLength - 1) {
          
          console.log('i ->', i);
          direction = 'left';
        }
        break;
      case 'left':
        j--;
        if (j === matrix.length - traverseLength) {
          direction = 'up';
        }
        break;
      case 'up':
        i--;
        if (i === matrix.length - (traverseLength -1)) {
          direction = 'right';
          traverseLength--;
        }
        break;
    }
  }
  return result;
}




























function spiralTraversal (matrix) {
  if(!matrix.length) return matrix;
  
  let result = [];
  
  let top = 0;
  let right = matrix[0].length-1;
  let bottom = matrix.length-1;
  let left = 0;
  
  while(left < right+1 && bottom > top-1){
    //if left and right are equal//run first 2 sequence or just 2nd
    //if bottom and top are equal //only run first
    
    for(let j=left; j<right + 1; j++){
      result.push(matrix[top][j]);
    }
    if(bottom === top) return result;
    top++;
    
    for(let i=top; i<bottom+1; i++){
      result.push(matrix[i][right]);
    }
    if(left === right) return result
    right--;
    
    for(let j=right; j>left-1; j--){
      result.push(matrix[bottom][j]);
    }
    bottom--;
    
    for(let j=bottom; j>top-1; j--){
      result.push(matrix[j][left]);
    }
    left++;
  }//while
  return result;
}
function spiralTraversal (matrix) {
  var result = [], 
    right = matrix[0].length, 
    bottom = matrix.length, 
    left = 0, 
    top = 0;
    
  function goRight() {
    if(right === left) return;
    for(var i = left; i < right; i++) { 
    	result.push(matrix[top][i]) 
    } 
    top++; goDown();
  }
    
  function goDown(){
    if(top === bottom) return;
    for(var i = top; i < bottom; i++) { 
    	result.push(matrix[i][right - 1]) 
    	
    }
    right--; goLeft();
  }
    
  function goLeft(){
    if(right === left) return;
    for(var i = right - 1; i >= left; i--) result.push(matrix[bottom - 1][i])
    bottom--; goUp();
  }
    
  function goUp(){
    if(top === bottom) return;
    for(var i = bottom - 1; i >= top; i--) result.push(matrix[i][left])
    left++; goRight();
  }
  
  goRight();
  return result;
}