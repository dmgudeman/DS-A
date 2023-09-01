


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


function maxAncestorDiff(root: TreeNode | null): number {

    if(!root) return 0;

    let result = 0

    function dfs( node, minVal, maxVal){
        if(!node) return;
        let temp = Math.max(Math.abs(minVal - node.val), Math.abs(maxVal - node.val))

        result = Math.max(temp, result)
        let newMinVal = Math.min(node.val, minVal)
        let newMaxVal = Math.max(node.val, maxVal)
     
        
        dfs(node.left, newMinVal, newMaxVal)
        dfs(node.right, newMinVal, newMaxVal)
   
        return;
        
    }  
    
    dfs(root, root.val, root.val );
    return result

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

let some:TreeNode | null = constructTree([8,3,10,1,6,null,14,null,null,4,7,13]
    );

console.log(maxAncestorDiff(some))
let other:TreeNode | null = constructTree([1,null,2,null,0,3]);
console.log(maxAncestorDiff(other))