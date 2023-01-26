// Traverse Array from both side

// Two sum 

const arr = [2, 3, 1, 12, 0, 5, 3, 13,-1,-1,-1]

const target = 17

// ask is array sorted if yes then proceed
const twoSum = (arr, target) => {
  // sort numbers
  const compareFunction = (a, b) => {
    return a - b
  }
  arr.sort(compareFunction)
  console.log('Arr-',arr)


  let start = 0
  let end = arr.length - 1

  while (start < end) {
    let sum = arr[start] + arr[end]
    if (sum < target) {
      start += 1
    } else if (sum > target) {
      end -= 1
    } else {
      console.log([arr[start], arr[end]])
      console.log(start, end)
      return
    }
  }

  console.log(-1)
}

twoSum(arr, target)