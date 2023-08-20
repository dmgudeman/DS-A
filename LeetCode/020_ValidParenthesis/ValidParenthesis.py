

# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

# Example 1:

# Input: s = "()"
# Output: true
# Example 2:

# Input: s = "()[]{}"
# Output: true
# Example 3:

# Input: s = "(]"
# Output: false

# Constraints:

# 1 <= s.length <= 104
# s consists of parentheses only '()[]{}'.

class Solution:
    def validParens(self, str):
        stack = []
        if len(str) < 2 or len(str) % 2 == 1:
            return False
        for char in str:
            if char in "([{":
                stack.append(char)
            elif char == ")" and (not stack or stack.pop() != "("):
                return False
            elif char == "}" and (not stack or stack.pop() != "{"):
                return False
            elif char == "]" and (not stack or stack.pop() != "["):
                return False
        return len(stack) == 0


sol = Solution()
print(sol.validParens("()["))