// Given the head of a sorted linked list, delete all duplicates 
// such that each element appears only once. Return the linked list sorted as well.


function deleteDuplicates(head: ListNode | null): ListNode | null {

    let current = head;

    while ( current && current.next) {

        if (current.value == current.next.value){;
            current.next = current.next.next;
        }
    }
    return head;

};