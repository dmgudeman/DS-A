

class Solution:
    def sortArray(self, arr):
        if len(arr) < 2: return arr
        mid = len(arr) // 2
        left = arr[0:mid]
        right = arr[mid::]

        merge(left, right)
    
    def merge(l, r):
        merged = []

        while len(l) or len(r):
            if l[0] < r[0]:
                merged.push(l.pop())
            else:
                merged.push(r.pop())

            return merged