

class Solution:
    def containsNearbyDuplicate(self, nums, k):

        window = set()
        left = 0
        for right in range(len(nums)):
            if right - left > k: 
                window.discard(nums[left])
                left += 1
            if nums[right] in window: return True
            window.add(nums[right])
            

        return False
    
sol = Solution();
print(sol.containsNearbyDuplicate([1,2,3,1], 3))
print(sol.containsNearbyDuplicate([1,2,3,1,2,3], 2))
print(sol.containsNearbyDuplicate([0,1,2,3,4,5,0], 5))