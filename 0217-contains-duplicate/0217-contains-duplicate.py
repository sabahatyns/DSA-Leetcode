class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        dup = set()
        for i in range(len(nums)):
            if nums[i] in dup:
               return True
            dup.add(nums[i]) 
        return False



