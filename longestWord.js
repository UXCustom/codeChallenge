// Solution A
function findLongestWord(str) {
  fubar = str.split(" ");
  longestWord = 0;
  for (var i = fubar.length - 1; i >= 0; i--) {
    if (fubar[i].length > longestWord) {
      longestWord = fubar[i].length;
    }
  }
  return longestWord;
}

// Solution B
function findLongestWord(str) {
  var myString = str.split(' ');
  var arr = [];
  for (var i = 0; i < myString.length; i++) {
    arr.push(myString[i].length);
  }
  return Math.max.apply(null, arr);
}

// Solution C
function findLongestWord(str) {
  var strArray = str.split(" ");
  var longestWord = 0;
  for (x = 0; x < strArray.length; x++) {
    if (strArray[x].length > longestWord) {
      longestWord = strArray[x].length;
    }
  }
  return longestWord;
}
