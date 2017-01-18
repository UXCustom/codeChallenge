// Solution A
function titleCase(str) {
  var fubar = str.toLowerCase();
  fubar = fubar.split(" ");
  for (var i = 0; i < fubar.length; i++) {
    fubar[i] = fubar[i].charAt(0).toUpperCase() + fubar[i].slice(1);
  }
  return fubar.join(" ");
}

// Solution B
function titleCase(str) {
  var arr = str.toLowerCase().split(' ');

  return arr.map(function(val) {
    return val[0].toUpperCase() + val.substr(1);
  }).join(' ');

}

// Solution C
function titleCase(str) {
  // lowercase everything, and split it
  var strArray = str.toLowerCase().split(" ");
  /// loop through array
  for (x = 0; x < strArray.length; x++) {
    // uppercase every first char
    strArray[x] = strArray[x].charAt(0).toUpperCase() + strArray[x].slice(1)
  }
  // join the array back together
  str = strArray.join(" ");
  return str;
}

// Solution D
function titleCase(str) {
    return str.replace(/\S+/g, function (m) {
        return m.charAt(0).toUpperCase() + m.substring(1).toLowerCase();
    });
}

// Solution E
function titleCase(str) {
  var upperCase = function(word) {
    var firstLetter = word.charAt(0).toUpperCase();
    var remainingLetters = word.substring(1).toLowerCase();
    return firstLetter + remainingLetters;
  };
  return str.split(' ').map(upperCase).join(' ');
}
