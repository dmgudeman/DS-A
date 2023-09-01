// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function zigzagLevelOrder(root) {
    if (!root)
        return [];
    var myQueue = [root];
    var ans = [[root.val]];
    var level = 1;
    while (myQueue.length) {
        var newQueue = [];
        for (var i = 0; i < myQueue.length; i++) {
            if (myQueue[i].left)
                newQueue.push(myQueue[i].left);
            if (myQueue[i].right)
                newQueue.push(myQueue[i].right);
        }
        var odd = level % 2 === 0;
        var temp = [];
        for (var _i = 0, newQueue_1 = newQueue; _i < newQueue_1.length; _i++) {
            var v = newQueue_1[_i];
            if (odd)
                temp.push(v.val);
            else
                temp.unshift(v.val);
        }
        if (temp.length)
            ans.push(temp);
        level++;
        myQueue = newQueue;
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
var som = constructTree([3, 9, 20, null, null, 15, 7]);
console.log(zigzagLevelOrder(som));
var othe = constructTree([1]);
console.log(zigzagLevelOrder(othe));
