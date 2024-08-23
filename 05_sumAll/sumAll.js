const sumAll = function(num1, num2) {
    if (!(typeof num1 == "number") || !(typeof num2 == "number")) {
        return "ERROR";
    };
    if (num1 < 1 || num2 < 1) {
        return "ERROR";
    };
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    };
    firstnum = Math.min(num1, num2);
    secondnum = Math.max(num1, num2);
    sum = 0;
    for (let i = firstnum; i < secondnum + 1; i++) {
        sum += i;
    };
    return sum;
};

// console.log(sumAll(4, 10));

// Do not edit below this line
module.exports = sumAll;
