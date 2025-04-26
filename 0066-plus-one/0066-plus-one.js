/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let i = digits.length - 1;
    while (digits[i] >= 0) {
        if (digits[i] != 9) {
            digits[i]++
            return digits
        }
        digits[i] = 0;
        i--;
    }

    // If loop finished, it means all digits were 9
    digits.unshift(1);
    return digits;
}