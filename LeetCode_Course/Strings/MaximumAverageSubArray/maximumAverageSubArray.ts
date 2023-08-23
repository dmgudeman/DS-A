function findMaxAverage(nums: number[], k: number): number {
    let ans:number = 0;
    let sum:number = 0;
    for (let i = 0; i < k ; i++) {
         sum += nums[i];
             
    }
     ans = sum/k;
    
    for (let j = k; j < nums.length; j++){
        sum += nums[j] - nums[j-k];
        let temp:number = sum/k;
        ans = Math.max(temp, ans);   
    }
    
    return ans;

};