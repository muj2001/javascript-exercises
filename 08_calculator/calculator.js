const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  // console.log(arr.length);
  if (arr.length > 0) {
    let sum = arr.reduce((total, currentItem) => {
      return total + currentItem;
    });
    // console.log(sum);
    return sum;
  } else {
    return 0;
  }
};

const multiply = function(arr) {
  if (arr.length > 0) {
    return arr.reduce((total, currentItem) => {
      return total * currentItem;
    }, 1);
  } else {
    return;
  };
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
	if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
