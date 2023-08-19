

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def countNodes(self, root):
        if not root: return 0

        depth = 0
        node = root

        while node.left:
            depth += 1
            node = node.left

        