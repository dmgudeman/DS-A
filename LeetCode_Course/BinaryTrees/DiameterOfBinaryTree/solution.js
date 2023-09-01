var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function diameterOfBinaryTree(root) {
    if (!root)
        return 0;
    var result = 0;
    function dfs(node) {
        if (!node)
            return 0;
        var leftDepth = dfs(node.left);
        var rightDepth = dfs(node.right);
        result = Math.max(leftDepth + rightDepth, result);
        return Math.max(leftDepth, rightDepth) + 1;
    }
    dfs(root);
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
var some1 = constructTree([1, 2, 3, 4, 5]);
console.log('some1', diameterOfBinaryTree(some1));
var other1 = constructTree([1, 2]);
console.log('other1', diameterOfBinaryTree(other1));
