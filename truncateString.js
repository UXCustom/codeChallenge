// Solution A
function truncateString(str, num) {
  if(str.length > num){
    if (num <= 3) {
      str = str.slice(0, num) + "...";
    }
    else{
        str = str.slice(0, num - 3) + "...";
    }
  }
  return str;
}

// Solution B
function truncateString(str, num) {
  if (str.length > num && num > 3) {
    var str2 = str.slice(0, num - 3) + "...";
    return str2;
  } else if (num <= 3) {
    var str3 = str.slice(0, num) + "...";
    return str3;
  } else if (str.length == num) {
    return str;
  } else if (num > str.length) {
    return str;
  }
}

// Solution C
function truncateString(str, num) {
  // string must be longer than cutting length
  if (str.length >= parseInt(num)) {
    // if cutting length is < 3, we won't have any letters
    if (num <= 3) {
      // add elipsis to end (increases total length)
      str = str.slice(0, num) + "...";
    } else {
      // cut, and replace last 3 with elipsis
      str = str.slice(0, num - 3) + "...";
    }
  } else {
    str = "Don't be silly, you can't make the string longer.";
  }
  return str;
}
