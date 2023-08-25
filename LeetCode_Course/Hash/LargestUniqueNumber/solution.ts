function largestUniqueNumber(nums: number[]): number {

    let tally:Map<number,number> = new Map();

    for (const num of nums) {
        tally.set(num, (tally.get(num) || 0) + 1)
    }

    let ans:number = -1;

    for (const [key, value] of tally.entries()){
        if (value === 1){
            ans = Math.max(key, ans)
        }
    }

    return ans;


};