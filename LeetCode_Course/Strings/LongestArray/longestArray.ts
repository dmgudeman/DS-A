

function longestOnes(nums: number[], k: number): number {

    let lIdx:number = 0;
    let rIdx:number =0;
    let count:number = 0;
    let zc:number = 0;

    while (rIdx < nums.length) {
        if (nums[rIdx] === 0) zc++;
        
        while (zc > k) {
            if (nums[lIdx] === 0)zc--
            lIdx++;
        }
        rIdx++;
        count = Math.max(count, rIdx - lIdx)
        

    }
    return count;
    
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));