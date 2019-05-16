"use strict"
// Pattern is excellent for comparing elements within an array.
// 
// Example
// 
// Write a function called countUniqueValues which accepts a sorted array of integers
//   and counts the unique values in the array.
//   
// Ex.
// countUniqueValues([]) => 0
// countUniqueValues([2,2,3,3]) => 2
// countUniqueValues([1, 3, 5]) => 3


// Naive answer. Nested loops with O(n^2) complexity

// Optimal answer.
// Idea: start two pointers in positions 0 and 1. Check if the values at these positions
//   are equal, and if so, advance the second pointer. If they're not equal, advance and 
//   replace the value.
function countUniqueValues(arr){
    if (arr.length <= 1) return arr.length;
    let left = 0;
    for (let right = 1; right < arr.length; right++) {
        // check if the values at the two pointers equate
        if (arr[left] !== arr[right]) {
            // if not, progress both pointers and update
            // the value at left
            left++; 
            arr[left] = arr[right];
        }
    }
    return left+1;
}

console.log(countUniqueValues([-5, -4, 2, 4, 4, 16, 25]) === 6);
console.log(countUniqueValues([2,2,2,2,3]) === 2);

