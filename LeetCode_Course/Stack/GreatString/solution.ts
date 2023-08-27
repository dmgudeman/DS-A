function makeGood(s: string): string {
    let stack: string[] = [];
    let ref: string = "";

    for (let i = 0; i < s.length; i++) {
        let char: string = s[i];

        if( char === char.toUpperCase() && stack[stack.length - 1] === char.toLowerCase()){
            stack.pop()
        } else if( char! === char.toLowerCase() && stack[stack.length - 1] === char.toUpperCase()){
            stack.pop() 
        } else {
            stack.push(char)
        }
       
    

    }
    return stack.join("");
}


console.log(makeGood("leEeetcode"))