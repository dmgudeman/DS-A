# You are given an m x n integer matrix matrix with the following two properties:

# Each row is sorted in non-decreasing order.
# The first integer of each row is greater than the last integer of the previous row.
# Given an integer target, return true if target is in matrix or false otherwise.

# You must write a solution in O(log(m * n)) time complexity.

class Solution:
    def searchMatrix(self, matrix, target):
        rows = len(matrix)
        cols = len(matrix[0])

        top, bottom = 0, rows -1

        row = -1

        while top <= bottom:
            mid = top + ( bottom - top) //2
            if target < matrix[mid][0]:
                bottom = mid - 1
            elif target > matrix[mid][cols-1]:
                top = mid + 1
            else:
                row = mid
                break
        if row == -1: return False

        left, right = 0, cols -1

        while left <= right:
            mid = right + (left - right)//2
            if target < matrix[row][mid]:
                right = mid -1
            elif target > matrix[row][mid]:
                left = mid + 1
            else:
                return True
        return False

