function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {


    let fast: ListNode | null = head;
    let slow:ListNode | null = head;
    let prev:ListNode | null = null
    if (!head || !head.next ) return null

   

    for ( let i = 0; i < n ; i++) {
        fast = fast!.next
    }

    while( fast && fast.next ) {
        prev = slow
        fast = fast.next
        slow = slow.next
    }
    if(!prev) head = head.next;
    else prev.next = slow.next
    return head

}