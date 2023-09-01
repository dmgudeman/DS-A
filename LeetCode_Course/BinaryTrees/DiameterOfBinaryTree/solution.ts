class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function diameterOfBinaryTree(root: TreeNode | null): number {

    if(!root) return 0;
    let result = 0;

    function dfs(node:TreeNode){
        if(!node) return 0;
   
        let leftDepth = dfs(node.left!)
        let rightDepth = dfs(node.right!)
        result  = Math.max(leftDepth + rightDepth, result)
        return Math.max(leftDepth, rightDepth) + 1

    }
    dfs(root)
    return result;
};


function constructTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null;

  let root = new TreeNode(arr[0]);
  let queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
      let current = queue.shift();

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

let some1:TreeNode | null = constructTree([1,2,3,4,5]

    );

console.log('some1',diameterOfBinaryTree(some1))
let other1:TreeNode | null = constructTree([1,2]);
console.log('other1',diameterOfBinaryTree(other1))