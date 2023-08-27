function makeGood(s) {
    var stack = [];
    var ref = "";
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (char === char.toUpperCase() && stack[stack.length - 1] === char.toLowerCase()) {
            stack.pop();
        }
        else if (char === char.toLowerCase() && stack[stack.length - 1] === char.toUpperCase()) {
            stack.pop();
        }
        else {
            stack.push(char);
        }
    }
    return stack.join("");
}
console.log(makeGood("leEeetcode"));
