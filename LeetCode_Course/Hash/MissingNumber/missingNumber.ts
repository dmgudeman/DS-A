

function missingNumber(nums: number[]): number {
    
    let seen:Set<number> = new Set();
    let ans:number = -1;
    for (let i = 0; i <= nums.length; i++){
        seen.add(nums[i])
     }
    
     for (let i = 0; i <= nums.length; i++){
        if (!seen.has(i))   ans = i
     }
    return ans

}; 