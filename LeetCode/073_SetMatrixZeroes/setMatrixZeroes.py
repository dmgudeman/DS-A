
# Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

# You must do it in place.

# Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
# Output: [[1,0,1],[0,0,0],[1,0,1]]

# Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
# Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

class Solution:
    def setZeroes(self, nums):
        rows = set()
        cols = set()
        for i in range(len(nums)):
            for j in range(len(nums[0])):
                if nums[i][j] == 0:
                    rows.add(i)
                    cols.add(j)

        for i in range(len(nums)):
            for j in range(len(nums[0])):
                if i in rows or j in cols:
                        nums[i][j]=0
        print(nums)       
sol = Solution()

sol.setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])
sol.setZeroes([[1,1,1],[1,0,1],[1,1,1]])

    