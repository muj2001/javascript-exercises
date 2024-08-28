const palindromes = function (text) {
    text = text.toLowerCase();
    text = text.split("")
    text = text.filter((char) => {
        return char != "." && char != "," && char != "!" && char != " ";
    });
    let left = 0;
    let right = text.length - 1;
    while (left < right) {
        if (text[left] == text[right]) {
            right -= 1;
            left += 1;
        } else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
