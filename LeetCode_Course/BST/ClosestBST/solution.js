var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function closestValue(root, target) {
    if (!root) {
        console.log("The tree is empty.");
        return null;
    }
    function dfs(node, small, large, tar) {
        if (tar === void 0) { tar = target; }
        if (!node) {
            if (Math.abs(target - small.val) < Math.abs(target - large))
                return small;
            else
                return large;
        }
        ;
        if (tar < node.val) {
            if (!node.left) {
                small = node;
                return dfs(node.left, small, large, tar);
            }
            return dfs(node.left, small, node, tar);
        }
        else {
            if (!node.right) {
                large = node;
                return dfs(node.right, small, large, tar);
            }
            return dfs(node.right, node, large, tar);
        }
    }
    var smallNode = new TreeNode(Infinity);
    var largeNode = new TreeNode(-Infinity);
    var ans = dfs(root, smallNode, largeNode);
    return ans.val;
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
var so = constructTree([4, 2, 5, 1, 3]);
console.log(closestValue(so, 3.714286));
var oth = constructTree([1]);
console.log(closestValue(oth, 4.428571));
