
from collections import defaultdict

class Solution: 
    def twoSum(self, nums, target):

        comps = defaultdict()

        for i, num in enumerate(nums):
            complement = target - num
            if complement in comps.keys():
                return [i, comps[complement]]
            comps[num] = i


        