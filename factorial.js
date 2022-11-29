function factorial(n) {
  let num = 1
  for(let i=1; i<=n ; i++){  
    num = num*i
  }
  return num
}

result = factorial(5)
console.log(result)

// Big-O = O(n)