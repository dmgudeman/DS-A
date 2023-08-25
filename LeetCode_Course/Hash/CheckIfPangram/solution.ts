function checkIfPangram(sentence: string): boolean {
    
    let seen: Set<string> = new Set();
    
    for (let i = 0; i < sentence.length ; i++){
        seen.add(sentence[i])
    }
    return seen.size === 26;
};