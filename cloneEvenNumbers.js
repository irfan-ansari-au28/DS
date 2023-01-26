// Traversing Reverse in an Array

const arr = [2, 3, 1, 12, 0, 5, 3, 13, -1, -1, -1]

const findLastNumber = (arr) => {
  i = arr.length - 1
  while (arr[i] === -1) {
    i -= 1
  }
  return i
}
const lastDigitIndex = findLastNumber(arr)

// check if last ele even move two instances at last
// if odd move the ele to last

const cloneEvenNumbers = (arr, lastDigitIndex) => {
  let end = arr.length - 1

  while (lastDigitIndex >= 0) {
    if (arr[lastDigitIndex] % 2 === 0) {
      arr[end] = arr[lastDigitIndex]
      end -= 1
      arr[end] = arr[lastDigitIndex]
      end -= 1
    } else {
      arr[end] = arr[lastDigitIndex]
      end -= 1
    }
    lastDigitIndex -= 1
  }
  console.log(arr)
}

cloneEvenNumbers(arr, lastDigitIndex)