// function isPrime(n) {
//   if(n < 2){
//     return false
//   }
//   for(let i=2; i<n ; i++){
//     if(n % 2 === 0){
//       return false
//     }
//   }
//   return true
  
// }

// Big-O = O(n)

// console.log(isPrime(1)) // false
// console.log(isPrime(5)) // true
// console.log(isPrime(17)) // false



// Optimized

function isPrime(n) {
  if(n < 2){
    return false
  }
  for(let i=2; i<Math.sqrt(i) ; i++){
    if(n % 2 === 0){
      return false
    }
  }
  return true
  
}

// Big-O = O(sqrt(n))

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(17)) // false



