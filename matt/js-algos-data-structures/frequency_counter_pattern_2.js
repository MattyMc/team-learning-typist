"use strict"
// Pattern is excellent for comparing two arrays.
// 
// Example
// 
// Given two strings, write a function to determine if the second string is an anagram of the first.

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    // create a frequence hash
    let frequencyHash1 = {};
    let frequencyHash2 = {};
    for (let char of str1) {
        frequencyHash1[char] = (frequencyHash1[char] || 0) +1;
    }
    for (let char of str2) {
        frequencyHash2[char] = (frequencyHash2[char] || 0) +1;
    }
    // compare frequencies in hashes
    for (let key in frequencyHash1) {
        if (frequencyHash1[key] !== frequencyHash2[key]) return false;
    }
    return true;
}

const anagram = (str1, str2) => {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return false
    }

    if (str1.length !== str2.length) {
        return false
    }

    obj = {}
    for (let i = 0; i < str1.length; i++) {
        obj[str1[i]] ? obj[str1[i]] + 1 : 1
        obj[str2[i]] ? obj[str2[i]] - 1 : -1
    }

    for (const key in obj) {
        if (obj[key] !== 0) {
            return false
        }
    }

    return true
}

console.log(isAnagram('abba', 'bbaa') === true);
console.log(isAnagram('abbca', 'bcbaa') === true);
console.log(isAnagram('abbca', 'bdbaa') === false);