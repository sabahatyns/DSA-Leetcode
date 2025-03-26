/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let numInfo = {};
    let maxDegree = 0;  

    // Step 1: Populate the hash table
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (!(num in numInfo)) {
            numInfo[num] = { count: 0, first: i, last: i };
        } else {
            numInfo[num].last = i;  //
        }
        
        numInfo[num].count++;  
        maxDegree = Math.max(maxDegree, numInfo[num].count); 
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
