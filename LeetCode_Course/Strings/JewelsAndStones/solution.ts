function numJewelsInStones(jewels: string, stones: string): number {
    
    let jewSet:Set<string> = new Set();
    let count:number = 0;
    
    for (const j of jewels){ jewSet.add(j)}
    
    for (const s of stones) {
        if(jewSet.has(s)) count++;
        
    }
    return count;
};
