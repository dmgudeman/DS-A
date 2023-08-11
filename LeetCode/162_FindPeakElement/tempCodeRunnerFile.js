function findPeakElement(nums) {

    let left = 0;
    let right = nums.length() -1;
    let mid;

    while ( left <= right ) {
        mid = Math.floor( right + (left - right)) / 2
        if (nums[mid] < nums[mid + 1]){
           left = mid 
        } else {
            right = mid
        }
    }
    return mid
}