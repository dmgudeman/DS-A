var ListNode = /** @class */ (function () {
    function ListNode(value, next, prev) {
        if (value === void 0) { value = null; }
        if (next === void 0) { next = null; }
        if (prev === void 0) { prev = null; }
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = new ListNode(null, this.tail, null);
        this.tail = new ListNode(null, null, this.head);
        this.size = 0;
    }
    LinkedList.prototype.prepend = function (value) {
        var node = new ListNode(value, this.head);
        if (this.head) {
            node.next = this.head.next;
            this.head.next = node;
            node.prev = this.head;
        }
        this.size++;
    };
    return LinkedList;
}());
var ll = new LinkedList();
ll.prepend(1);
ll.prepend(2);
ll.prepend(3);
ll.prepend(4);
console.log(ll.size);
