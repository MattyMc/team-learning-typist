"use strict"
// Pattern is excellent for comparing two arrays.
// 
// Example
// 
// Write a function that accepts two arrays of integers. The function should return true
//   if every element in the first array has a corresponding squared value in the second
//   array. The frequency of values must be the same (i.e. if the first array has two 2s, 
//   the second array must have two 4s).
// 
// I.e. hasSquares([1,2], [1, 4]) => true
//      hasSquares([2,3], [4, 8]) => false

// Naive answer. Nested loops.
// Problem: 
//   O(n^2) complexity since the for loop has O(n), and the next .indexOf has O(n). 
//   Therefore, O(n^2)
function hasSquaresNaive(arr1, arr2){
    // return if the length of the arrays is different
    if (arr1.length !== arr2.length) return false;
    
    // loop through elements of the first array
    for (let el of arr1) {
        let idx = arr2.indexOf(el ** 2) === -1;
        // check whether each element has a square in the second array
        // if not => false
        if (idx) return false;
        // if yes => remove that element from the second array
        arr2.splice(idx, 1);
    }
    return true;
}

// Better answer with O(n) complexity.
function hasSquaresOptimal(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    // create hash for each array of the form: number => frequence
    let h1 = {}; 
    for (let el of arr1) { 
        h1[el] = (h1[el] || 0) + 1; 
    }
    let h2 = {};
    for (let el of arr2) {
        h2[el] = (h2[el] || 0) + 1;
    }

    // for each key in the first hash, check if the key ** 2 in the second hash has the same frequency
    for (let key in h1) {
        if (h1[key] !== h2[key**2]) return false;
    }
    return true;
}



console.log(hasSquaresNaive([2,4,5], [4,16,25]) === true);
console.log(hasSquaresNaive([2,4,5], [4,16,24]) === false);

console.log(hasSquaresOptimal([2,4,5], [4,16,25]) === true);
console.log(hasSquaresOptimal([2,4,5], [4,16,24]) === false);