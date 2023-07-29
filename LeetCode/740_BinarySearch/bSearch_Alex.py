

class Solution:
    def search(self, nums, target):
        left, right = 0, len(nums)-1
        

        while left <= right:
            mid = right - left // 2
            if nums[mid] == target:
                return mid
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return -1