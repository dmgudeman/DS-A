function search(nums: number[], target: number): number {
    if (nums.length === 0 || target < nums[0] || target > nums[nums.length - 1]) {
        return -1;
    }

    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
}
