


class Solution:
    def _helper(self, root):
        if not root:return []
        left = self._helper(root.left)
        right = self._helper(root.right)
        return left + [root.val] + right
    

    def isSameTree(self, p, q):
        pVals = self._helper(p)
        qVals = self._helper(q)
        if pVals == qVals and len(pVals) == len(qVals): return True
        return False
    
sol = Solution()

print(len([1,None,1]))

    
        
