/**
 * @param {number[]} nums
 * @return {number[]}
 */
function getConcatenation(nums) {
    let ans = nums.concat(nums); 
    return ans;
}

// Example usage:
const nums = [1, 2, 3];
console.log(getConcatenation(nums)); 
