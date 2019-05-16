"use strict"
// Pattern is excellent for comparing elements within an array.
// 
// Example
// 
// Write a function called Sum Zero which accepts a sorted array of integers. 
//   The function should find the first pair that sum to 0, and return an array of the pair 
//   or undefined if the pair does not exist.
// 
// Key Idea: Instead of doing a nested loop over the array, start two pointers at 
//   the ends of the array. Add to see if they sum to zero, and if the answer is > 0, then
//   move the right point down an element since the positive number is a greater magnitude.

// Naive answer. Nested loops with O(n^2) complexity

// Optimal answer.
function sumZero(arr){
    let left = 0; 
    let right = arr.length;
    // while left < right
    while (left < right) {
        let sum = arr[left] + arr[right];
        // check if the elements sum to 0
        if (sum === 0) {
            // return the elements if yes
            return [arr[left], arr[right]];
        // if not, increase left if > 0
        } else if (sum < 0) {
            left++;
        // decrease right if < 0 
        } else {
            right--;
        }
    }
    // other wise, return undefined
    return undefined;
}

console.log(sumZero([-5, -4, 2, 4, 16, 25])[0] === -4 && sumZero([-5, -4, 2, 4, 16, 25])[1] === 4);
console.log(sumZero([2,4,5, 4,16,24]) === undefined);
