/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;  // Pointer for the last valid element in nums1
    let j = n - 1;  // Pointer for the last element in nums2

    // Start filling nums1 from the last index
    for (let k = m + n - 1; k >= 0; k--) {
        if (j < 0) break;  // If nums2 is exhausted, stop

        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
    }
};
