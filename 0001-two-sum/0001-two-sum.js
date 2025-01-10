/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        // For each number, look for its complement
        for (let j = i + 1; j < nums.length; j++) {
            // Check if the sum of two numbers equals the target
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // If no solution is found, return an empty array (shouldn't happen as per the problem statement)
    return [];
}