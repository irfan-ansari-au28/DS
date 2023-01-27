// Sub-Array preifix sum
// Find an array that sums to a zero.

const arr = [-1, 2, 1, -4, 2, 3, -1, 2];



const subarraySumsToZero = function(arr) {

  let sum = 0
  const prefixSum = {}

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (!prefixSum.hasOwnProperty(sum)) {
      prefixSum[sum] = i
    } else {
      console.log(sum + 1, i)
      return
    }
    console.log(sum)
    console.log(prefixSum)
    if (sum === 0) {
      console.log(0, i)
    }

  }
};

// Big-O = O(n)

// Output :
subarraySumsToZero(arr);
