const reverseString = function(strToReverse) {
    let splitStr = strToReverse.split("");
    splitStr = splitStr.reverse();
    console.log(splitStr);
    let reverseStr = splitStr.join("");
    console.log(reverseStr);
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
