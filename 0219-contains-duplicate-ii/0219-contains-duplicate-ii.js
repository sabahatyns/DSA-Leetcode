/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let numMap = {}; 

    for (let i = 0; i < nums.length; i++) {
        if (numMap.hasOwnProperty(nums[i]) && Math.abs(i - numMap[nums[i]]) <= k) {
            return true;
        }
        numMap[nums[i]] = i; 
    }

    return false; 
};
