"use strict"
// Pattern is excellent for comparing elements within an array.
// 
// Example
// 
// Write a function called isSubsequence which takes in two strings and checks whether 
//   the characters in the first string form a subsequence of the characters in the second string. 
//   In other words, the function should check whether the characters in the first string appear 
//   somewhere in the second string, without their order changing.
// Must have O(N+M) time complexity, O(1) space complexity
//   

// Ex.
// isSubsequence('sing', 'sting') => true
// isSubsequence('abc', 'acb') => false // order matters

// Optimal answer.
// Idea: start two pointers at the beginning of each string. If the characters equal,
//   then advance both pointers. If they don't equal, advance the second pointer (at the string we're searching)
//   If the first pointer reaches the end of the first word, success!
function isSubsequence(needleStr, haystackStr){
    let needlePtr = 0;
    let haystackPtr = 0;
    while (haystackPtr < haystackStr.length && needlePtr < needleStr.length) {
        if (needleStr[needlePtr] === haystackStr[haystackPtr]) {
            needlePtr++;
        } 
        haystackPtr++;
    }
    return needlePtr === needleStr.length;
}

console.log(isSubsequence('sing', 'sting') === true);
console.log(isSubsequence('abc', 'acb') === false);

