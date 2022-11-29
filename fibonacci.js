function fibonacci(n){
  const fib = [0,1]
  for(let i=2; i<n ; i++){
    fib[i] = fib[i-2] + fib[i-1]
  }
  return fib
}

const res = fibonacci(20)
console.log(res)

// Big-O = O(n)




