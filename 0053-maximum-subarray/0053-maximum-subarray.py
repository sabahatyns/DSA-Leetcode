class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        maxi = float("-inf")
        total = 0
        for i in range(n):
            total = total + nums[i]
            if total > maxi:
                maxi = total
            if total < 0:
                total = 0
        return maxi

