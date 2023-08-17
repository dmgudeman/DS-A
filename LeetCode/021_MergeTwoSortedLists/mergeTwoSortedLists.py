

# You are given the heads of two sorted linked lists list1 and list2.

# Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

# Return the head of the merged linked list.

class Solution:
    def mergeTwoLists(self, list1, list2):

        
        if list1 is None: return list2
        if list2 is None: return list1

       

        if list1.val < list2.val:
            next1 = list1.next
            list1.next = self.mergeTwoLists(next1, list2)
            return list1
        else:
            next2 = list2.next
            list2.next = self.mergeTwoLists(list1, next2)
            return list2

        

sol = Solution()
print(sol.mergeTwoLists([1,2,4],[1,3,4]))
