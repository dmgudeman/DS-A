// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
//   Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function minDepth(root) {
    if (!root)
        return 0;
    var left = minDepth(root.left);
    var right = minDepth(root.right);
    if (left === 0)
        return right + 1;
    if (right === 0)
        return left + 1;
    return Math.min(left, right) + 1;
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
var x = constructTree([3, 9, 20, null, null, 15, 7]);
console.log(minDepth(x));
var y = constructTree([2, null, 3, null, 4, null, 5, null, 6]);
console.log(minDepth(y));
