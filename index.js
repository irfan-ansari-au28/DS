// Array Partion - cloud boundary concept

// Dutch national flag - 3 compartment

const arr = [3, 2, 1, 4, 3, 6,4, 7, 5,-1,2,5,4,8,9]

const pivot = 4

const dutchNationalFlag = (arr, pivot)=>{
  let lowBoundary = 0
  let highBoundary = arr.length - 1
  let i = 0

  while(i<=highBoundary){
    if(arr[i] < pivot){
      [arr[i], arr[lowBoundary]] = [arr[lowBoundary], arr[i]]
      lowBoundary += 1
      // condition for i
      i++
    }else if (arr[i] > pivot){
      [arr[i], arr[highBoundary]] = [arr[highBoundary],arr[i]]
      highBoundary -= 1
      // condition (tricky)
    }else{
      i++
    }
  }
  console.log(arr)
}

dutchNationalFlag(arr, pivot)