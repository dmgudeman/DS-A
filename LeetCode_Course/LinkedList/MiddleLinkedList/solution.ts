function middleNode(head: ListNode | null): ListNode | null {

    let fast:ListNode | null = head;
    let slow:ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }
    return slow
}