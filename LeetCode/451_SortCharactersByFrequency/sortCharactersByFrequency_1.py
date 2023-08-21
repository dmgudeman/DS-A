# Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

# Return the sorted string. If there are multiple answers, return any of them.

from collections import defaultdict

class Solution:

    def frequencySort(self, s):
        ans = []
        dict = defaultdict(int)

        for char in s:
            dict[char] += 1

        items = dict.items()

        items = sorted(items, key = lambda i: i[1])

        for tuple in items:
            ans.append(tuple[0] * tuple[1])

        return ans

