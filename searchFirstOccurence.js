// Binary Search works only on sorted Array
// Find first occurence of target

const arr = [-4, 2,2,2, 1, 3, 4, 4, 4, 4, 6, 7, 10, 28]
const target = 4


const binarySearchFirstOccurance = (arr, target) => {
  let start = 0;
  let end = arr.length - 1

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2)

    if (arr[mid] < target) {
      start = mid + 1
    } else if (arr[mid] > target || arr[mid] === target && mid > 0 && arr[mid - 1] === target) {
      end = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

console.log(binarySearchFirstOccurance(arr, target))