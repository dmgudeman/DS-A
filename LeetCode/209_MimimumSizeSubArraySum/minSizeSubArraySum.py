# Given an array of positive integers nums and a positive integer target, return the minimal length of a 
# subarray
#  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

# Example 1:

# Input: target = 7, nums = [2,3,1,2,4,3]
# Output: 2
# Explanation: The subarray [4,3] has the minimal length under the problem constraint.
# Example 2:

# Input: target = 4, nums = [1,4,4]
# Output: 1
# Example 3:

# Input: target = 11, nums = [1,1,1,1,1,1,1,1]
# Output: 0
 

# Constraints:

# 1 <= target <= 109
# 1 <= nums.length <= 105
# 1 <= nums[i] <= 104

class Solution:
    def minSubArrayLen(self, target, nums):
        min_sub = float('inf')
        left = 0
        total = 0

        for right in range(len(nums)):
            total += nums[right]

            while total >= target:
                min_sub = min(min_sub, right-left+1)
                total -= nums[left]
                left += 1

        return 0 if min_sub == float('inf') else min_sub

    
sol = Solution()

print(sol.minSubArrayLen(7, [2,3,1,2,4,3]))
print(sol.minSubArrayLen(4, [1,4,4]))
print(sol.minSubArrayLen(11, [1,1,1,1,1,1,1,1]))

            


