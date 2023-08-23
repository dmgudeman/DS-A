function sortedSquares(nums: number[]): number[] {
    let i:number =0
    let j:number = nums.length -1
    let ans: number[] = []
    
    while (i <= j) {
        if ( Math.abs(nums[i]) <= Math.abs(nums[j])){
            ans.unshift(nums[j] * nums[j])
            j--
        } else {
            ans.unshift(nums[i] * nums[i])
            i++
        }
    }
    
    return ans

};