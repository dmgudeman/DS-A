

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function reversedList(head:ListNode) {
    let prev = null;
    let curr = head;
    while(curr){
        const nextNode = curr.next
   
        curr.next = prev;
        prev = curr;

        if(nextNode) curr = nextNode;
    }
    return prev
}



