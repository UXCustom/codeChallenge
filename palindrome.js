// Solution A
function palindrome(str) {
    str = str.replace(/[\W_]/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

// Solution B
function palindrome(str) {
  var stringed = str.replace(/[\W_]/g, '').toLowerCase();
  return stringed == stringed.split('').reverse().join('');
}

// Solution C
function palindrome(str) {
  var myString = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  return myString == myString.split('').reverse().join('');
}

// Solution D
function palindrome(str) {
  var lowerCaseStr = str.toLowerCase().replace(/[\W_]/g, '');
  reverseStr = lowerCaseStr.split('').reverse().join('');

  return reverseStr === lowerCaseStr;
}

// Solution E
function palindrome(str) {
  str = str.replace(/_/g,"").replace(/\W/g, '').toLowerCase();
  var reversedStr = str.split('').reverse().join('').replace(/_/g,"").replace(/\W/g, '');
  if (str === reversedStr) {
    return true;
  }
  else {
    return false;
  }
}

// Solution F
function reverseString(str) {
  return str = str.split("").reverse().join("");
}

function palindrome(str) {
  // lCase and remove all non-alphanumeric characters
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, "");
  //check if palindrome
  if (str == reverseString(str)) return true;
}
