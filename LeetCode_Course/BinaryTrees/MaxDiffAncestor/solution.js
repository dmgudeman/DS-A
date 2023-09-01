var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function maxAncestorDiff(root) {
    if (!root)
        return 0;
    var result = 0;
    function dfs(node, minVal, maxVal) {
        if (!node)
            return;
        var temp = Math.max(Math.abs(minVal - node.val), Math.abs(maxVal - node.val));
        result = Math.max(temp, result);
        var newMinVal = Math.min(node.val, minVal);
        var newMaxVal = Math.max(node.val, maxVal);
        dfs(node.left, newMinVal, newMaxVal);
        dfs(node.left, newMinVal, newMaxVal);
        return;
    }
    dfs(root, -Infinity, Infinity);
    return result;
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
var some = constructTree([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13]);
console.log(maxAncestorDiff(some));
var other = constructTree([1, null, 2, null, 0, 3]);
console.log(maxAncestorDiff(other));
