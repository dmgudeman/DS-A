

function deleteMiddle(head: ListNode | null): ListNode | null {
    if(!head.next) return null

    let slow:ListNode | null = head;
    let fast:ListNode | null = head;
    let prev:ListNode | null = null;

    while(fast && fast.next){
        prev = slow
        slow = slow!.next;
        fast = fast!.next!.next;


    }

    if (prev ) prev.next = slow?.next;
    return head


};