// Solution A
function largestOfFour(arr) {
  var newArray = arr.map(function(val){
    return Math.max.apply(null, val);
  });

  return newArray;
}

// Solution B
function largestOfFour(arr) {
  var maxArr = []
  for (var i = 0; i < arr.length; i++) {
    var max =   Math.max.apply(null, arr[i]);
    maxArr.push(max);
  }
  return maxArr;
}

// Solution C
function largestNumber(str) {
  //convert input to array
  var arr = JSON.parse(str);
  // set variables
  var arrResult = [];
  var biggestNum = 0;
  // loop through array, first dimension
  for (x = 0; x < arr.length; x++) {

    // loop through array, second dimension
    for (y = 0; y < arr[x].length; y++) {
      // if number is bigger save it
      if (arr[x][y] >= biggestNum) {
        biggestNum = arr[x][y];
      }
    }
    // after loop of second array, add biggest num, and reset
    arrResult.push(biggestNum);
    biggestNum = 0;
  }
  return arrResult;
}
