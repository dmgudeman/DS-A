// Given the root of a binary tree, return the sum of values of its deepest leaves.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function deepestLeavesSum(root) {
    if (!root)
        return 0;
    var myQueue = [root];
    var counter = 1;
    var ans = 0;
    while (myQueue.length) {
        counter += 1;
        var newQueue = [];
        for (var i = 0; i < myQueue.length; ++i) {
            if (myQueue[i].left) {
                newQueue.push(myQueue[i].left);
            }
            if (myQueue[i].right) {
                newQueue.push(myQueue[i].right);
            }
        }
        myQueue = newQueue;
    }
    myQueue = [root];
    while (myQueue.length) {
        counter -= 1;
        var newQueue = [];
        for (var i = 0; i < myQueue.length; ++i) {
            if (myQueue[i].left) {
                newQueue.push(myQueue[i].left);
            }
            if (myQueue[i].right) {
                newQueue.push(myQueue[i].right);
            }
        }
        if (counter === 1)
            break;
        myQueue = newQueue;
    }
    for (var i = 0; i < myQueue.length; i++) {
        ans += myQueue[i].val;
    }
    return ans;
}
;
function constructTree(arr) {
    if (arr.length === 0 || arr[0] === null)
        return null;
    var root = new TreeNode(arr[0]);
    var queue = [root];
    var i = 1;
    while (queue.length > 0 && i < arr.length) {
        var current = queue.shift();
        if (current !== null) {
            if (arr[i] !== null) {
                current.left = new TreeNode(arr[i]);
                queue.push(current.left);
            }
            i++;
            if (i < arr.length && arr[i] !== null) {
                current.right = new TreeNode(arr[i]);
                queue.push(current.right);
            }
            i++;
        }
    }
    return root;
}
var some2 = constructTree([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]);
console.log(deepestLeavesSum(some2));
var other2 = constructTree([6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5]);
console.log(deepestLeavesSum(other2));
