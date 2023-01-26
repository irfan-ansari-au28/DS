// Array Partion - cloud boundary concept

// Move all the zeros to the begining of the array

const arr = [2, 0, 9, 12, 0, 25, 0, 0, 89, 39, 13, 0, 11]

const moveZerosToBegining = (arr) => {
  let boundary = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      // let temp = arr[i]
      // arr[i] = arr[boundary]
      // arr[boundary] = temp
      [arr[i], arr[boundary]] = [arr[boundary], arr[i]]
      // console.log(arr)
      boundary += 1
    }
  }
}

moveZerosToBegining(arr)