# Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

# You must write an algorithm that runs in O(n) time.

# unsorted integer array in
# ans is an integer of the length
# 0(n) means touch each input once

class Solution:
    def longestConsecutive(self, nums):
        
        left, right, biggest = 0, 1, 0
        nums = sorted(nums)

        for i in range(len(nums) -1):
            if nums[i] - nums[i+1] == 1:
                biggest = max(biggest, right - left)
                right = i+1
            else:
                left = right
                right += 1
        return biggest

