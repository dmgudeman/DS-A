def findIntervals(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for current in intervals:
        if not merged or merged[-1][1] < current[0]:
            merged.append(current)
        else:
            merged[-1][1] = max(merged[-1][1], current[1])
    return merged

print(findIntervals([[1,3],[2,6],[8,10],[15,18]]))
print(findIntervals([[1,4],[4,5]]))
print(findIntervals([[1,4],[2,3]]))
print(findIntervals([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]))