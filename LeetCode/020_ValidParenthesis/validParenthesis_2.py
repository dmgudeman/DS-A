# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
from collections import deque


class Solution:
    def isValid(self, str):
        stack = []

        for char in str:
            if char in "{[(":
                stack.append(char)
            elif char == "}" and (not stack or stack.pop() != "{"):
                return False
            elif char == "}" and (not stack or stack.pop() != "{"):
                return False
            elif char == "}" and (not stack or stack.pop() != "{"):
                return False
        return len(str) == 0
            
       

        
