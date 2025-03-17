/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let numMap = {}; // HashMap to store last index of each number

    for (let i = 0; i < nums.length; i++) {
        if (numMap.hasOwnProperty(nums[i]) && Math.abs(i - numMap[nums[i]]) <= k) {
            return true; // Found duplicate within k distance
        }
        numMap[nums[i]] = i; // Update last seen index
    }

    return false; // No duplicate found within k distance
};
