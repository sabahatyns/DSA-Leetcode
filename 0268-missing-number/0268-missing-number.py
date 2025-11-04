class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        dict = {}
        for i in range(0, n+1):
            dict[i] = 0
        for num in nums:
            dict[num] = 1
        for k,v in dict.items():
            if v == 0:
                return k       