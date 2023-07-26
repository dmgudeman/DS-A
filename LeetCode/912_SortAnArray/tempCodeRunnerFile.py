class Solution:
   

    def sortArray(self, nums):
        if len(nums) < 2: return nums
        mid = len(nums)//2
        left = self.sortArray(nums[0:mid])
        right = self.sortArray(nums[mid::])

        return merge(left, right)
    
    def merge(left, right):
        merged = []

        while len(left) and len(right):
            if left[0] < right[0]:
                merged.push(left.pop(0))
            else:
                merged.push(right.pop(0))
        
        return merged
