// Recursion

// 1. A base condition to terminate the recursion
// 2. Sometimes it may be complex

function recursiveFibonacci(n){
  if(n < 2){
    return n
  }
  return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(6)) // 8
console.log(recursiveFibonacci(7)) // 13

// Big-O = Iterative O(n)
// Big-O = Recursive O(2^n)