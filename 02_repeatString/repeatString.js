const repeatString = function(strToRepeat, repeatTimes) {
    repeated = "";
    if (repeatTimes < 0) {
        return "ERROR";
    }
    for (let i = 0; i < repeatTimes; i++) {
        repeated = repeated + strToRepeat;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
