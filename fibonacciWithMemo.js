// Fibonaccin Memoization

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// Fn = Fn-1 + Fn-2

// const fibonacci = (n, memo = {}) => {
//   if (n in memo) {
//     console.log(n,memo)
//     return memo[n];
//   }
//   if (n <= 2) return 1;
//   memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//   return memo[n];
// };
// fibonacci(10)



const fibonacci = (n, hashMap = {})=>{
  if(n in hashMap) return hashMap[n]
  if(n<3) return 1
  hashMap[n] = fibonacci(n-1,hashMap) + fibonacci(n-2,hashMap)
  return hashMap[n]
 
}
console.log(fibonacci(9))