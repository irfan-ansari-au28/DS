const climbingStairCase = (n) =>{
  if(n < 3){
    return n
  }
  return climbingStairCase(n-1) + climbingStairCase(n-2)
}

console.log(climbingStairCase(4)) //n = 5