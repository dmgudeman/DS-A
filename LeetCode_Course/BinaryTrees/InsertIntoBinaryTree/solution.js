// You are given the root node of a binary search tree (BST) and a value to insert into the tree. 
// Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function insertIntoBST(root, val) {
    if (!root)
        return new TreeNode(val);
    if (val > root.val)
        insertIntoBST(root.right, val);
    else
        insertIntoBST(root.left, val);
    return root;
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
var data1 = constructTree([4, 2, 7, 1, 3]);
console.log(insertIntoBST(data1, 5));
var data2 = constructTree([40, 20, 60, 10, 30, 50, 70]);
console.log(insertIntoBST(data2, 25));
var data3 = constructTree([4, 2, 7, 1, 3, null, null, null, null, null, null]);
console.log(insertIntoBST(data3, 5));
