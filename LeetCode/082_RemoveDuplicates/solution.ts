
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function deleteDuplicates(head: ListNode | null): ListNode | null {

    let curr = head;
    let prev:ListNode| null = new ListNode();
    prev.next = curr;
    let newHead = prev;

    while (curr){
     
        while(curr.next && curr.val === curr.next.val){
            curr = curr.next
 
        }
         
        if(prev.next !== curr) {
            prev.next = curr.next;

        } else {
            prev = curr;
        }
        curr = curr.next
        

    }
    return newHead.next
};