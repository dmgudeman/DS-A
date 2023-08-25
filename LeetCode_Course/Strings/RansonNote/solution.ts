function canConstruct(ransomNote: string, magazine: string): boolean {
    
    let magHash: Map<string, number> = new Map();
    
    for (const char of magazine) {     
        magHash.set(char, (magHash.get(char) || 0) + 1)     
    }
    
    for (const char of ransomNote) {
        if (! magHash.get(char)) return false;
        
        magHash.set(char, magHash.get(char)! - 1);
        if (magHash.get(char) === 0) magHash.delete(char)
    }
    return true;

};