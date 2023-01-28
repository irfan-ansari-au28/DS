// Binary Search works only on sorted Array

const arr = [-4, 2, 4, 6, 7, 10, 28]
const target = 10

// function binarySearch(arr,target){
//   let leftIndex = 0
//   let rightIndex = arr.length - 1

//   while(leftIndex <= rightIndex){
//     let midIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if(target == arr[midIndex]){
//       return midIndex
//     }
//     if(target < arr[midIndex]){
//       rightIndex = midIndex - 1
//     }else{
//       leftIndex = midIndex + 1
//     }
//   }
//   return -1
  
// }

// console.log(binarySearch(arr,target))

// if array is already sorted
// Big-O = O(logn)


const binarySearch = (arr,target) =>{
  let start = 0;
  let end = arr.length - 1

  while(start <= end){
    let mid = Math.floor(start + (end-start)/2)

    if(arr[mid] < target){
      start = mid + 1
    }else if(arr[mid] > target){
      end = mid -1
    }else{
      return mid
    }
  }
  return -1
}

console.log(binarySearch(arr,target))