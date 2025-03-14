/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    let k = 0; // Pointer to track non-val elements

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Move non-val elements to the front
            k++; // Increment the count
        }
    }

    return k; // Number of elements that are not equal to val
}
