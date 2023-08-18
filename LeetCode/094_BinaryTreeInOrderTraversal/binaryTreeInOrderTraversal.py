

# Given the root of a binary tree, return the inorder traversal of its nodes' values.

class Solution:
    def inorderTraversal(self, root):

        if root is None: return root

        left = self.inorderTraversal(root.left)
        right = self.inorderTraversal(root.right)
        return left + [root.val] + right