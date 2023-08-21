# Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

# Each row must contain the digits 1-9 without repetition.
# Each column must contain the digits 1-9 without repetition.
# Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
# Note:

# A Sudoku board (partially filled) could be valid but is not necessarily solvable.
# Only the filled cells need to be validated according to the mentioned rules.
from collections import defaultdict

class Solution:
    def isValidSudoku(self, board):
            
        def validRow(row):
            temp = defaultdict(int)
            for digit in row:
                if digit != ".":
                    temp[digit] += 1     
                    if temp[digit]> 1: return False
            return True
        
        for row in board:
            if validRow(row) == False: return False
        
        for i in range (len(board)):
            col = [board[j][i] for j in range(len(board[0]))]
            if not validRow(col): return False

        blocks = defaultdict(list)
        for i in range (len(board)):
            for j in range (len(board[0])):
                myKey = (i//3, j//3)
                blocks[myKey].append(board[i][j])


        for block in blocks.values():
            if validRow(block) == False: return False
               

        return True


