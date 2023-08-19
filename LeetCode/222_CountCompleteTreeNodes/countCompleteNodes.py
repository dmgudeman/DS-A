# Given the root of a complete binary tree, return the number of the nodes in the tree.

# According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

# Design an algorithm that runs in less than O(n) time complexity.
from collections import deque

class Solution:
    def countNodes(self, root):
        # 1. create a queue
        # 2. initialize with root
        # 3. run a while loop
        # 4. pop the left node
        # 5. process node
        # 6. append children nodes
        

        queue = deque()
        queue.append(root)
        count = 0

        while queue:

                # shift out of queue
            node = queue.popleft()
            if node:
                count += 1
                # add children to queue
                queue.append(node.left)
                queue.append(node.right)
            
          
        return count