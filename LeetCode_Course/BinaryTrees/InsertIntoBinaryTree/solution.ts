// You are given the root node of a binary search tree (BST) and a value to insert into the tree. 
// Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.



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


function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {  
        if(!root) return new TreeNode(val);
        if (val > root.val) root.right = insertIntoBST(root.right, val);
        else root.left = insertIntoBST(root.left, val)

        return root
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



let data1:TreeNode | null = constructTree([4,2,7,1,3]
    );
console.log(insertIntoBST(data1, 5));

let data2:TreeNode | null = constructTree([40,20,60,10,30,50,70]
    );
console.log(insertIntoBST(data2, 25))

let data3:TreeNode | null = constructTree([4,2,7,1,3,null,null,null,null,null,null]
    );
console.log(insertIntoBST(data3, 5))