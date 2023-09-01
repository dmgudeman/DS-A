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


function closestValue(root: TreeNode | null, target: number) {
    if (!root) {
        console.log("The tree is empty.");
        return null; 
    }

    function dfs(node, small , large , tar = target){
        if (!node){
            if (Math.abs(target - small.val) < Math.abs(target - large)) return small
            else return large
        };
        

       
        if(tar < node.val) {
            
            if (!node.left) {
                small = node;
                return dfs(node.left, small, large, tar)
            }
            return dfs(node.left, small, node, tar)
            
        }
        else {
            if (!node.right) {
                large = node
                return dfs(node.right, small, large, tar)
            }

           return dfs(node.right, node, large, tar)
           
        }

    
}


    let smallNode = new TreeNode(Infinity);
    let largeNode = new TreeNode(-Infinity)
    let ans =  dfs(root, smallNode, largeNode) 
    return ans.val

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



let so:TreeNode | null = constructTree([4,2,5,1,3]
    );
console.log(closestValue(so, 3.714286));

let oth:TreeNode | null = constructTree([1]
    );
console.log(closestValue(oth, 4.428571))