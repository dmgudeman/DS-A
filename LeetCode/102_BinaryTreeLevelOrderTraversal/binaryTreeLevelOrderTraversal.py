
# Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:

        queue = deque()
        queue.append(root)
        output = []

        while queue:
            queueLen = len(queue)
            level = []

            for _ in range(queueLen):
                # shift out of queue
                node = queue.popleft()
                if node:
                    level.append(node.val)
                    # add children to queue
                    queue.append(node.left)
                    queue.append(node.right)
            
            if level: output.append(level)
        return output

    
