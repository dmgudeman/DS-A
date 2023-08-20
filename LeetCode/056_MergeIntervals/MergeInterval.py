# Given an array of intervals where intervals[i] = [starti, endi], 
# merge all overlapping intervals, and return an array of the 
# non-overlapping intervals that cover all the intervals in the input.

 

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

def findIntervals(intervals):
    intervals.sort(key=lambda x: x[0])

    ans = intervals
    print(intervals)
    flag = True
    i = 0
    while  flag:
        flag = False
        if i < len(ans) - 1:
            if (ans[i][1] >= ans[i+1][0]): 
                if ans[i][1] < ans[i+1][1]:
                    ans[i]= [ans[i][0], ans[i+1][1]]
                    del ans[i+1]
                    print(ans)
                    flag = True
                else:
                    del ans[i+1]
                    flag = True
            else:
                i += 1
        else:
            flag = False
    return ans
print(findIntervals([[1,3],[2,6],[8,10],[15,18]]))
print(findIntervals([[1,4],[4,5]]))
print(findIntervals([[1,4],[2,3]]))
print(findIntervals([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]))