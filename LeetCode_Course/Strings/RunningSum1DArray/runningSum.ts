

function runningSum(nums: number[]): number[] {
    // prefix = [nums[0]]
    // for (int i = 1; i < nums.length; i++)
    // prefix.append(nums[i] + prefix[prefix.length - 1])
    let prefix: number[] = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push( nums[i] + prefix[prefix.length - 1])
    }
    return prefix;

};