// Traverse Array from one side

// Reverse an array

const arr = [2, 3, 1, 12, 0, 5, 3, 13, -1, -1, -1]

const reverseArray = (arr) => {
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    //swap elements
    // let temp = arr[start]
    // arr[start] = arr[end]
    // arr[end] = temp


    // ES^6 swap
    arr[start], arr[end] = arr[end], arr[start]

    start += 1
    end -= 1
  }
  console.log(arr)
}

reverseArray(arr)