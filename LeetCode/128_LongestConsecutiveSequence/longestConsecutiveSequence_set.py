# Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

# You must write an algorithm that runs in O(n) time.

# unsorted integer array in
# ans is an integer of the length
# 0(n) means touch each input once

class Solution:
    def longestConsecutive(self, nums):
        numsSet = set(nums)
        big = 0
        
        for n in nums:
            if n-1 not in numsSet:
                count = 0
                while n+ 1 in numsSet:
                    count +=1
                    big = max(big, count)

        return big



sol = Solution()

print(sol.longestConsecutive([2,100,1]))