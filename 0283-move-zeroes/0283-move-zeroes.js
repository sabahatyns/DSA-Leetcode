function moveZeroes(nums) {
  let nonZero = 0;

  // Move all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZero] = nums[i];
      nonZero++;
    }
  }

  // Fill the rest of the array with zeros
  for (let i = nonZero; i < nums.length; i++) {
    nums[i] = 0;
  }
}
