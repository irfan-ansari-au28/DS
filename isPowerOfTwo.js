// function isPowerOfTwo(n) {    
//   if(n<1){
//     return false
//   }

//   while(n>1){
//     if(n%2 !==0){
//       return false
//     }
//     n = n/2
//   }
//   return true
// }

// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(4))
// console.log(isPowerOfTwo(9))

// Big-O = O(nlogn)

function isPowerOftwoBitwise(n){
  if(n<1){
    return false
  }

  return (n & (n-1)) === 0
}

console.log(isPowerOftwoBitwise(1))
console.log(isPowerOftwoBitwise(4))
console.log(isPowerOftwoBitwise(9))

// Big-O = O(1)