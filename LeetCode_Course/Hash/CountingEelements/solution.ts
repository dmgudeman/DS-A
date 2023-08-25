function countElements(arr: number[]): number {

    let seen: Set<number> = new Set();
    let count: number = 0;

    for ( const a of arr) {
        seen.add(a)
    }

    for ( const b of arr) {
        if (seen.has(b+1)) count++
    }

    return count;

};