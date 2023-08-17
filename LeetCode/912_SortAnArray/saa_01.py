

class Solution:
    def sortArray(self, nums):
        if len(nums) < 2: return nums
        mid = len(nums) // 2
        left =  self.sortArray(nums[0:mid])
        right = self.sortArray(nums[mid::])

        return self.merge(left, right)
    
    def merge(self, l, r):
        merged = []

        while len(l) or len(r):
            if l[0] < r[0]:
                merged.append(l.pop(0))
            else:
                merged.append(r.pop(0))

            return merged + l + r