// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }


function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    
    let adjList = new Map<number,number[]>();
    for (const [x,y] of edges) {
        if(!adjList.has(x)) {
            adjList.set(x,[]);
        }
        adjList.get(x)!.push(y);
    
 
        if(!adjList.has(y)) adjList.set(y,[]);
        adjList.get(y)!.push(x);
    }
    function dfs(node: number, visited: Set<number>): boolean {
        if (node === destination) {
            return true;
        }

        visited.add(node);

        if (adjList.has(node)) {
            for (const neighbor of adjList.get(node)!) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor, visited)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    const visited = new Set<number>();
    return dfs(source, visited);

};


// function constructTree(arr: (number | null)[]): TreeNode | null {
//   if (arr.length === 0 || arr[0] === null) return null;

//   let root = new TreeNode(arr[0]);
//   let queue: (TreeNode | null)[] = [root];
//   let i = 1;

//   while (queue.length > 0 && i < arr.length) {
//       let current = queue.shift();

//       if (current !== null) {
//           if (arr[i] !== null) {
//               current.left = new TreeNode(arr[i]);
//               queue.push(current.left);
//           }
//           i++;

//           if (i < arr.length && arr[i] !== null) {
//               current.right = new TreeNode(arr[i]);
//               queue.push(current.right);
//           }
//           i++;
//       }
//   }

//   return root;
// }



// let so1:TreeNode | null = constructTree([[0,1],[0,2],[3,5],[5,4],[4,3]]
    // );
console.log(validPath(6,[[0,1],[0,2],[3,5],[5,4],[4,3]],0,5));

// let oth1:TreeNode | null = constructTree([1]
//     );
// console.log(closestValue(oth1, 4.428571))