

function minStartValue(nums: number[]): number {
    let prefix:number[] = [nums[0]];
    let minPres:number = nums[0]
    for (let i = 1; i < nums.length; i++ ){
        prefix.push(nums[i] + prefix[prefix.length - 1]) 
        minPres = Math.min(minPres, prefix[i])      
    }
    if (minPres < 0) return 1 - minPres;
    return 1
};