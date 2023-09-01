// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
//   Definition for a binary tree node.
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


function minDepth(root: TreeNode | null): number {

    
        if(!root) return 0;
        let left:number = minDepth(root.left);
        let right:number = minDepth(root.right);

        if (left === 0) return right + 1;
        if (right === 0) return left + 1;
        return Math.min(left,right) + 1

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

let x:TreeNode | null = constructTree([3,9,20,null,null,15,7]);

console.log(minDepth(x))
 let y:TreeNode | null = constructTree([2,null,3,null,4,null,5,null,6]);
 console.log(minDepth(y))