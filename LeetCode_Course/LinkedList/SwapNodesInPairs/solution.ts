

function swapNodes(head:ListNode) {

    let nextNode:ListNode | null;
    let nextNode2: ListNode | null;

    let curr:ListNode | null = head;

    while ( curr && curr.next) {

        nextNode = curr.next;
        nextNode2 = curr.next.next;
        curr.next = nextNode2;
        curr = nextNode2!.next;
        nextNode2!.next = nextNode;
        nextNode.next = curr;

    }

    return head

}