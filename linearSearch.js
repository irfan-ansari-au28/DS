const arr = [-4, 2, 4, 6, 7, 10, 28]
const target = 10
function linearSearch(arr,target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}

console.log(linearSearch(arr,target))
console.log(linearSearch([-4, 2, 4, 6, 7, 10, 28],11))

// Big-O = O(n)