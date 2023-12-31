# Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

# We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

# You must solve this problem without using the library's sort function.

class Solution:
    def sortColors(self, nums):

        counts = [0,0,0]
        for n in nums:
            counts[n] += 1

        i = 0

        for freq in range(len(counts)):
            for c in range(counts[freq]):
                nums[i] = c
                i+=1