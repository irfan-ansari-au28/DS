arr = [9, -7, 2, -9, 8, 11]

function bubbleSort(arr) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
        // console.log(arr)
      }
    }
  }
  while (swapped)
  return arr
}

console.log(bubbleSort(arr))

// Big-O = O(n^2)