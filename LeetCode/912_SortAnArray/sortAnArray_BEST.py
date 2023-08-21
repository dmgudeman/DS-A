# Given an array of integers nums, sort the array in ascending order and return it.

# You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

# Example 1:

# Input: nums = [5,2,3,1]
# Output: [1,2,3,5]
# Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
# Example 2:

# Input: nums = [5,1,1,2,0,0]
# Output: [0,0,1,1,2,5]
# Explanation: Note that the values of nums are not necessairly unique.
 

# Constraints:

# 1 <= nums.length <= 5 * 104
# -5 * 104 <= nums[i] <= 5 * 104

class Solution:

    def merge(self, l, r):

        merged = []
        i, j = 0, 0

        while i < len(l) and j < len(r):
            if l[i] < r[j]:
                merged.append(l[i])
                i += 1
            else:
                merged.append(r[j])
                j += 1

        while i < len(l):
            merged.append(l[i])
            i += 1

        while j < len(r):
            merged.append(r[j])
            j += 1

        return merged

    def sortArray(self, nums):
        
        if len(nums) < 2: return nums
        mid = len(nums) // 2
        left = self.sortArray(nums[:mid])
        right = self.sortArray(nums[mid:])
        
        return self.merge(left, right)
