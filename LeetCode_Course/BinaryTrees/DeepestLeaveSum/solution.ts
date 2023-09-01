
// Given the root of a binary tree, return the sum of values of its deepest leaves.

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


function deepestLeavesSum(root: TreeNode | null): number {
    
    if (!root) return 0;

    let myQueue:TreeNode[] = [root];
    let counter = 1;
    let ans = 0
    while(myQueue.length) {
        counter += 1
        let newQueue:TreeNode[] = []
        for(let i = 0; i < myQueue.length; ++i){
        
            if(myQueue[i].left){
                newQueue.push(myQueue[i].left!)
            }
            if(myQueue[i].right){
                newQueue.push(myQueue[i].right!)
            }

        }

        myQueue = newQueue
    }
    myQueue = [root]
    while(myQueue.length) {
        counter -= 1
        let newQueue:TreeNode[] = []
        for(let i = 0; i < myQueue.length; ++i){
        
            if(myQueue[i].left){
                newQueue.push(myQueue[i].left!)
            }
            if(myQueue[i].right){
                newQueue.push(myQueue[i].right!)
            }

        }
        if (counter === 1) break
        myQueue = newQueue
    }


    for (let i = 0; i < myQueue.length; i++){
        ans += myQueue[i].val
    }

  
   return ans

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

let some2:TreeNode | null = constructTree([1,2,3,4,5,null,6,7,null,null,null,null,8]
    );

console.log(deepestLeavesSum(some2))
let other2:TreeNode | null = constructTree([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]

    );
console.log(deepestLeavesSum(other2))