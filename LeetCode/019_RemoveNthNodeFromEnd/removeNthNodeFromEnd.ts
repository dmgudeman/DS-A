

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

//  Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
 

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy:ListNode = new ListNode(0);
    dummy.next = head;
    let count:number = 0;
    let current: ListNode | null = head;

    while (current !== null){
        count++;
        current = current.next;
    }

    count -= n;
    current = dummy;

    while (count > 0){
        count--;
        current = current.next!;
    }

    current.next = current.next!.next;

    return head;
};