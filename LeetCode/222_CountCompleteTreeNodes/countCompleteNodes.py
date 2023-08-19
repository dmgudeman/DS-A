# Given the root of a complete binary tree, return the number of the nodes in the tree.

# According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

# Design an algorithm that runs in less than O(n) time complexity.
from collections import deque

class Solution:
    def countNodes(self, root):

        queue = deque()
        queue.append(root)
        output = []

        while queue:

                # shift out of queue
            node = queue.popleft()
            if node:
                output.append(node.val)
                # add children to queue
                queue.append(node.left)
                queue.append(node.right)
            
          
        return len(output)