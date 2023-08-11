

class Solution:
    def findPeakElement(self, nums):
        # left, right = 0, len(nums)-1
        # while left < right:
        #     mid = left + (right - left ) // 2
        #     if nums[mid]< nums[mid+1]:
        #         left = mid + 1
        #     else:
        #         right = mid          
        # return left

       
        def _search(left, right):
            if left >= right: return left
            left, right = 0, len(nums) - 1
            mid = left + (right - left) // 2
            if nums[mid]< nums[mid+1]:
                _search(mid+1,right)
            else:
                _search(left, mid)
        return _search(0, len(nums)-1)
       