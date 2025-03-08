/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let countMap = {}; 

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        countMap[num] = (countMap[num] || 0) + 1;

        if (countMap[num] > nums.length / 2) {
            return num; 
        }
    }
};
