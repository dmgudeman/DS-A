// # 3. Longest Substring Without Repeating Characters
// # Medium
// # 35.1K
// # 1.6K
// # Companies
// # Given a string s, find the length of the longest 
// # substring
// #  without repeating characters.

 

// # Example 1:

// # Input: s = "abcabcbb"
// # Output: 3
// # Explanation: The answer is "abc", with the length of 3.
// # Example 2:

// # Input: s = "bbbbb"
// # Output: 1
// # Explanation: The answer is "b", with the length of 1.
// # Example 3:

// # Input: s = "pwwkew"
// # Output: 3
// # Explanation: The answer is "wke", with the length of 3.
// # Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// # Constraints:

// # 0 <= s.length <= 5 * 104
// # s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(s: string): number {

    let big:number = 0;
    let lIdx:number = 0;
    let rIdx:number = 0;
    let dups:Set<string>= new Set()

    while (rIdx < s.length){
        if(!dups.has(s[rIdx])){
            dups.add(s[rIdx])
            big = Math.max(big, rIdx - lIdx + 1);
            ++rIdx;
        } else {
            dups.delete(s[lIdx]);
            ++lIdx;
        }
    }
    return big;

}
