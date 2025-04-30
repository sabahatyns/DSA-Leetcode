/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;

    reverse(nums, 0, n - 1);    
    reverse(nums, 0, k - 1); 
    reverse(nums, k, n - 1);    
};

function reverse(arr, left, right) {
    while (left < right) {
        // Manual swap (no destructuring)
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
}
