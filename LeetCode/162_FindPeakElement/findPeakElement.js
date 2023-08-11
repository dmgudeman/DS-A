

// # A peak element is an element that is strictly greater than its neighbors.

// # Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// # You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// # You must write an algorithm that runs in O(log n) time.

// function findPeakElement(nums) {

//     let left = 0;
//     let right = nums.length - 1;
//     let mid;

//     while ( left < right ) {
//         // mid = left + Math.floor((right - left) / 2);
//         mid = Math.floor( (left + right)/ 2 )
//         if (nums[mid] < nums[mid + 1]){
//            left = mid + 1
//         } else {
//             right = mid
//         }
//     }
//     return left
// }


function findPeakElement(nums) {

    let left = 0;
    let right = nums.length - 1;
    let mid;

    function _helper(left, right){
        if (left === right) return left;
       
        mid = Math.floor( (left + right)/ 2 )
            if (nums[mid] < nums[mid + 1]){
            left = mid + 1
            } else {
                right = mid
            }
        
        return _helper(left, right)
    }
    return _helper(left, right)
}

console.log( findPeakElement([1,2,3,1]))