// -------------------
// STRUGGLED WITH THIS!!!
// -------------------
"use strict"
// Pattern is excellent for comparing elements within an array.
// 
// Example
// 
// Write a function called minSubArrayLen which accepts an array of positive integers and an
//   integer called n. The function returns the minimal length of a contiguous subarray
//   where the sum is greater than or equal to the integer passed to the function.
//   If there is none, return 0.
//   
// Ex.
// minSubArrayLen([2, 3, 1, 2, 4, 3], 7) === 2
// minSubArrayLen([2, 1, 6, 5, 4], 9) === 2


// Naive answer. Nested loops with O(n^2) complexity. 

// Optimal answer.
// Idea: start both pointers at the start of the array. and increase width until 
//   we find the first subarray that will work. Remember the length.
// Then, slide the window. 
// If that still works, try to shrink the width.
// If it doesn't work, shift the window again. 
// Stop when right pointer is maxed, and the array can't be shrunk anymore. 
function minSubArrayLen(arr, n){
    let left = 0;
    let right = 0; // points to the next element to be included
    let tempSum = arr[0]; // tempSum must exceed n
    let minWidth = Infinity; // tempSum must exceed n
    while (right < arr.length && left < arr.length) {
        if (tempSum >= n) {
            // if tempSum is acceptable, save width, increase left.
            minWidth = Math.min(minWidth, right-left + 1);
            tempSum -= arr[left];
            left++;
        } else if (tempSum < n) {
            // if tempSum is not acceptable, increase right
            right++;
            tempSum += arr[right];
        }
    }
    return minWidth === Infinity ? 0 : minWidth;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7) === 2)
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9) === 2)
console.log(minSubArrayLen([2, 1, 6, 5, 4, 12], 12) === 1)
console.log(minSubArrayLen([2, 1, 6, 5, 4, 12], 250) === 0)

