

class Solution:
    def sortColors(self, nums):

        if len(nums) < 2 : return nums

        mid = len(nums) //2

        left = self.sortColors(nums[0:mid])
        right = self.sortColors(nums[mid:0])

        self.merge(left, right)

    def merge(left, right):

        merged = []

        while len(left) or len(right):

            if left[0] <= right[0]:
               merged.push(left[0]) 
            else:
               right.push(right[0])

        return merged
