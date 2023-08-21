

from collections import Counter

class Solution:

    def frequencySort(self, s):
        ans = ''
        c = Counter(s)
        sorted_items = sorted(c.items(), key = lambda x: x[1], reverse=True)
        print(sorted_items)

        for item in sorted_items:
            for _ in range(item[1]):
                ans += item[0]

        return ans

        


sol = Solution()

print(sol.frequencySort("mississippi"))