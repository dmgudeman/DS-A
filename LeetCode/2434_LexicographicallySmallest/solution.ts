// You are given a string s and a robot that currently holds an empty string t. Apply one of the following operations until s and t are both empty:

// Remove the first character of a string s and give it to the robot. The robot will append this character to the string t.
// Remove the last character of a string t and give it to the robot. The robot will write this character on paper.
// Return the lexicographically smallest string that can be written on the paper.



function robotWithString(s: string): string {
    let p: string[] = []
    let t: string[] = []

    // two operations
    // t+= s[0]
    // p += t[-1]

    for (let i = 0; i < s.length; i ++) {
        if(!t.length ) {
            t.push(s[i])
        } else if ( s[i] < t[t.length -1]){
            t.push(s[i])
           
        }else { 
            while(t[t.length -1] && s[i] > t[t.length -1]){
                p.push(t.pop()!)
            }
            t.push(s[i])
        }
    } 
  
    while(t.length){
        p.unshift(t.shift()!)
       
    }

    
 

    
    return p.join('')

};


console.log(robotWithString("zza"))
console.log(robotWithString("bdda"))
console.log(robotWithString('bac'))