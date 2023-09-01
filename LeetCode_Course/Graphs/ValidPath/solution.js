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
function validPath(n, edges, source, destination) {
    var adjList = new Map();
    for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
        var _a = edges_1[_i], x = _a[0], y = _a[1];
        if (!adjList.has(x)) {
            adjList.set(x, []);
        }
        adjList.get(x).push(y);
        if (!adjList.has(y))
            adjList.set(y, []);
        adjList.get(y).push(x);
    }
    console.log(adjList);
}
;
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
console.log(validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5));
// let oth1:TreeNode | null = constructTree([1]
//     );
// console.log(closestValue(oth1, 4.428571))
