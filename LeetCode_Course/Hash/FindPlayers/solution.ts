function findWinners(matches: number[][]): number[][] {
   
    let tally: Map<number,number | null> = new Map();
    let ans: number[][] = [[],[]];

    for( const arr of matches){
        tally.set(arr[0], (tally.get(arr[0]) || 0) + 0);
        tally.set(arr[1], (tally.get(arr[1]) || 0) + 1);
    }

    for (const [key,value] of tally.entries()){
        if (value === 0) ans[0].push(key)
        if (value === 1) ans[1].push(key)

    }
    ans[0] = ans[0].sort();
    ans[1] = ans[1].sort();
    return ans;

};