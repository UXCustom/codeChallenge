// Solution A - Using Recursion
function factorialize(num) {
  if (num == 0) {
    return 1;
  }

  if (num < 0) {
    return -1;
  }

  while (num > 0) {
    return (num * factorialize(num-1));
  }
}

// Solution B
function factorialize(num) {
  var arr = [];

  if (num === 0) {
    num = 1;
  } else {
    for (var i = 1; i <= num; i++) {
      arr.push(i);
    }

    for (var j = 1; j < arr.length; j++) {
      num *= j;
    }
  }

  return num;
}

// Solution C
function factorializeA(num) {
  if (num == 0) {
    return 1
  }
  return num * factorializeA(num - 1);
}
factorializeA(5);


function factorializeB(num) {
  var result = num;
  for(var i = 1; i < num; i++){
    result = i * result;
  }
  return result;
}
factorializeB(5);

// Solution D
function factorialize(num) {
  if (num >= 0) {

    var solution = 1;
    for (x = 1; x <= num; x++) {
      solution = solution * x;
    }
    return solution;

  }
}
