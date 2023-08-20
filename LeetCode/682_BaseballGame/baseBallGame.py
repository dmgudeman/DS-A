

# You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

# You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

# An integer x.
# Record a new score of x.
# '+'.
# Record a new score that is the sum of the previous two scores.
# 'D'.
# Record a new score that is the double of the previous score.
# 'C'.
# Invalidate the previous score, removing it from the record.
# Return the sum of all the scores on the record after applying all the operations.

# The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.


class Solution:
    def calPoints(self, operations):
        ans = []
        total = 0

        for op in operations:
            if op.isdigit() or (op[0] == '-' and op[1:].isdigit()):  # Account for negative numbers
                ans.append(int(op))
            elif op == "D" and ans:
                ans.append(2 * ans[-1])
            elif op == "C" and ans:
                ans.pop()
            elif op == "+" and len(ans) > 1:
                ans.append(ans[-2] + ans[-1])

        return sum(ans)




sol = Solution()

print(sol.calPoints(["5","2","C","D","+"]))
print(sol.calPoints(["5","-2","4","C","D","9","+","+"]))