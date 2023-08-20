# Given an integer array nums of unique elements, return all possible 
# subsets
#  (the power set).

# The solution set must not contain duplicate subsets. Return the solution in any order.


class Solution:
    def subsets(self, nums):
        ans = []
        subset = []

        def _backtrack(i):
            if i >= len(nums):
                ans.append(subset.copy())
                return 

            # decision to INCLUDE nums[i]
            subset.append(nums[i])
            _backtrack(i + 1)
            subset.pop()

            # descition NOT INCLUDE nums[i]
            _backtrack(i + 1)
        _backtrack(0)
        return ans