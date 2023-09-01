// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).


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


function zigzagLevelOrder(root: TreeNode | null): number[][] {

    if (!root) return [];

    let myQueue:TreeNode[] =[root];
    let ans:number[][] = [[root.val]]
    let level:number = 1;

    while(myQueue.length) {
     
       let newQueue:TreeNode[] = []
       for(let i = 0; i<myQueue.length; i++){
            if(myQueue[i].left) newQueue.push(myQueue[i].left!);
            if(myQueue[i].right) newQueue.push(myQueue[i].right!);
        }

        let odd = level % 2 === 0;
        let temp:number[] = []
        for (const v of newQueue) {
      
            if (odd) temp.push(v.val)
            else temp.unshift(v.val)

        }
        if( temp.length)ans.push(temp)
        level ++;
        myQueue = newQueue
     
    }

    return ans;

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



let som:TreeNode | null = constructTree([3,9,20,null,null,15,7]
    );
console.log(zigzagLevelOrder(som));

let othe:TreeNode | null = constructTree([1]
    );
console.log(zigzagLevelOrder(othe))