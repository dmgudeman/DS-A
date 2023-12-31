


class Solution:
    def searchBST(self, root, val):

        if not root: return None

        if root.val > val:
            return self.searchBST(root.right, val)
        elif root.val < val:
            return self.searchBST(root.left, val)
        else:
            return root