#Given the head of a singly linked list, reverse the list, and return the reversed list.

class Solution:
    def reverseList(self, head):
        prev = None
        def _helper(head, prev):
            if head is None: return prev
            next = head.next
            head.next = prev

            return _helper(next, head)

        return _helper(head, prev)    
       

       