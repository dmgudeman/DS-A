

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeNthFromEnd(self, head, n):
        slow = fast = head

        for _ in range(n):
            fast = fast.next

        if not fast: return head.next


        while fast.next:
            fast = fast.next
            slow = slow.next

        slow.next = slow.next.next


        return head
    

node5 = ListNode(5)
node4 = ListNode(4, node5)
node3 = ListNode(3, node4)
node2 = ListNode(2, node3)
head = ListNode(1, node2)

            
sol = Solution()

new_head = sol.removeNthFromEnd(head, n = 2)

current = new_head
while current:
    print(current.val, end=" -> ")
    current = current.next