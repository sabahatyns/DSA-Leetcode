/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let numInfo = {};  // Hash table to store frequency, first, and last occurrence
    let maxDegree = 0;  // Maximum frequency in the array

    // Step 1: Populate the hash table
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (!(num in numInfo)) {
            numInfo[num] = { count: 0, first: i, last: i };
        } else {
            numInfo[num].last = i;  // Update last occurrence
        }
        
        numInfo[num].count++;  // Increase frequency
        maxDegree = Math.max(maxDegree, numInfo[num].count);  // Update max degree
    }

    // Step 2: Find the shortest subarray with max degree
    let minLength = Infinity;

    for (let num in numInfo) {
        if (numInfo[num].count === maxDegree) {
            minLength = Math.min(minLength, numInfo[num].last - numInfo[num].first + 1);
        }
    }

    return minLength;
};
