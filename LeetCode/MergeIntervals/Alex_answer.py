 

# Example 1:

# Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
# Output: [[1,6],[8,10],[15,18]]
# Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
# Example 2:

# Input: intervals = [[1,4],[4,5]]
# Output: [[1,5]]
# Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

# Constraints:

# 1 <= intervals.length <= 104
# intervals[i].length == 2
# 0 <= starti <= endi <= 104
class Solution: 
    def merge(self, intervals):
        intervals.sort()
        stack = [intervals[0]]

        for i in range(1, len(intervals)):
            curr_int = {
                'start': intervals[i][0],
                'end': intervals[i][1]
            }

            last_int = {
                'start': stack[-1][0],
                'end': stack[-1][1]
            }

            if curr_int['start'] <= last_int['end'] and curr_int['end'] > last_int['end']:
                stack[-1][1] = curr_int['end']
            elif curr_int['start'] > last_int['end']:
                stack.append(intervals[i])

        return stack

    
sol = Solution()
print(sol.merge([[1,3],[2,6],[8,10],[15,18]]))
print(sol.merge([[1,4],[4,5]]))
print(sol.merge([[1,4],[2,3]]))
print(sol.merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]))