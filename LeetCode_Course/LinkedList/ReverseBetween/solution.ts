/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {

  

    let curr:ListNode | null = head;

    let prevNode:ListNode | null = null;
    let nextNode:ListNode | null = null;
    let i:number = 0;

    if ( head!.next!.next === null) {
        nextNode!.next = curr;
        nextNode = curr!.next;
        curr = head
        return head    
    }
    if(head.next === null) return head

    while( i < left - 1 ){
        prevNode = curr;
        curr = curr!.next;
        i++;
    }

   
    while (i < right - 1 ) {
        nextNode = curr!.next;
        curr!.next = nextNode!.next;
        nextNode!.next = prevNode!.next;
        prevNode!.next = nextNode;

        i++
    }
    return head;
};