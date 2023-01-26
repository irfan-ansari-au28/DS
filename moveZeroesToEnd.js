// Array Partion - cloud boundary concept

// Move all the zeros to the end of the array

const arr = [2, 0, 9, 12, 0, 25, 0, 0, 89, 39, 13, 0, 11]

const moveZerosToEnd = (arr) => {
  let boundary = arr.length - 1
  let i = arr.length - 1
  while (i >= 0) {
    if (arr[i] === 0) {
      // swap number with boundary
      [arr[i], arr[boundary]] = [arr[boundary], arr[i]]
      boundary -= 1
      console.log(arr)
    }
    i -= 1
  }

}

moveZerosToEnd(arr)