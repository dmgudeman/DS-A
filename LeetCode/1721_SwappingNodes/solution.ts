

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function swapNodes(head: ListNode | null, k: number): ListNode | null {

    let prev1 = new ListNode();
    let prev2 = new ListNode();
    let curr = head
    let newHead = head

    for( let i = 1 ; i < k ; i ++) {
        prev1 = curr
        curr = curr.next
    }
    
    prev2 = head
    temp = curr
    while(temp.next) {
        prev2 = prev2.next
        temp = temp.next

    }

    if (prev1 == prev2) return newHead

   temp = curr.next;
    curr.next = prev2.next?.next;
    prev2.next.next = temp;

    prev2.next = curr;

    return newHead;



};

