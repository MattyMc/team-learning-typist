"use strict"
// Pattern is excellent for comparing elements within an array.
// 
// Example
// 
// Write a function called maxSubarraySum which accepts an array of integers and a 
//   number called n. The function should calculate the maximium sum of n consecutive
//   elements in the array.
//   
// Ex.
// maxSubarraySum([1,2,5,2,8,1,5], 2) => 10


// Naive answer. Nested loops with O(n^2) complexity. 

// Optimal answer.
// Idea: Instead of summing n digits everytime we move the window, we can just subtract the value
//   that's no longer part of the window, and add the new value that is part of the window.
function maxSubarraySum(arr, n){
    // sum the first n values to get a temporary maximum
    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    
    let tempMaxSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        // subtract the old value, add the new value
        tempMaxSum = tempMaxSum - arr[i - n] + arr[i];
        // update max if needed
        if (tempMaxSum > maxSum) {
            maxSum = tempMaxSum;
        }
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) === 10);
// console.log(countUniqueValues([2,2,2,2,3]) === 2);

