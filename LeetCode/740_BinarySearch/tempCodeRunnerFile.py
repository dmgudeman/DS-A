class Solution:
    def search(self, nums, target ):
        temp = nums[:]
        print(nums)
      
      
        while len(temp) > 0:
            mid = len(temp) // 2
            if temp[mid] == target: return nums.index(temp[mid])
            
            if temp[mid] < target:
                temp = temp[ mid + 1:]
            else:
                temp = temp[:mid]
        
        return -1