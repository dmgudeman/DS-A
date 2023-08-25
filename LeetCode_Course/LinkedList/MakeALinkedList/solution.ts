


class ListNode {
    value:number | null;
    next:ListNode | null;
    prev:ListNode | null;
    constructor(value:number | null = null, next: ListNode | null = null, prev: ListNode | null = null ){
        this.value = value;
        this.next = next;
        this.prev = prev;

    }
}

class LinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    size: number;
    constructor() {
        this.head = new ListNode(null, this.tail, null);
        this.tail = new ListNode(null, null, this.head)
        this.size = 0;
    }

    prepend(value:number):void {
       let node:ListNode = new ListNode(value, this.head);
       if (this.head){
        node.next = this.head.next;
        this.head.next = node;
        node.prev = this.head;
       }

       this.size ++;

    }

}

let ll = new LinkedList()

ll.prepend(1)
ll.prepend(2)
ll.prepend(3)
ll.prepend(4)

console.log(ll.size)

