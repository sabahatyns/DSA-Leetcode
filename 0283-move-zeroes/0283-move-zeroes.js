/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let insertPos = 0;

  // Move all non-zero elements to the front
  for (let num of nums) {
    if (num !== 0) {
      nums[insertPos++] = num;
    }
  }

  // Fill the rest with zeros
  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }

  return nums; // Optional: useful if you want to return the modified array
}