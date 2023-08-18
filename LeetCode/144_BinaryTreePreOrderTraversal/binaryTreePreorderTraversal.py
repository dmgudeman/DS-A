

class Solution:
    def preorderTraversal(self, root):

        if not root: return []

        left = self.inorderTraversal(root.left)
        right = self.inorderTraversal(root.right)
        return [root.val] +left + right