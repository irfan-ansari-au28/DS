// Check If N and Its Double Exist

const arr = [-2,10,2,7,3,-4]

const checkIfExists = (arr)=>{
  const seen = new Set()
  for(let i=0; i<arr.length; i++){
    if(seen.has(arr[i] / 2 ) || seen.has(arr[i] * 2)) return true
    seen.add(arr[i])
  }
  return false
}

console.log(checkIfExists(arr))


