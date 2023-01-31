/* 
The first while loop checks if the array is increasing. If not, it returns false.
The second while loop checks if the array is decreasing. If not, it returns false.
If both while loops complete successfully, it returns true, meaning the array is a valid mountain array.
*/

// Valid Mountain Array

const ValidMountainArray = (arr)=>{
  let i=0;
  // Check for strictly increasing
  while(i<arr.length && arr[i] < arr[i+1]) i++
  // check for strictly decreasing
  if( i===0 || i===arr.length-1) return false
  while(i<arr.length && arr[i] > arr[i+1]) i++
  // return true when pointer reaches the end
  return i === arr.length-1
}

console.log(ValidMountainArray([0,3,2,1]))