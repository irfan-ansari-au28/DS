// Recursion using auxilary buffer

// Print all combination of lenght 3

// Create an arr of length n
// Array.from(Array(10).keys())
// [...Array(10).keys()]

const arr = [1, 2, 3, 4, 5, 6]

const printCombos = (arr, buffer, bufferIndex, startIndex)=>{
  // Base condition
  if (startIndex === arr.length) {
      return
  }
  if (bufferIndex === buffer.length) {
     console.log(buffer)
    return
  }

  // step 2
  for (let i = startIndex; i < arr.length; i++) {
    buffer[bufferIndex] = arr[i]
      // step 3
    printCombos(arr, buffer, bufferIndex + 1, startIndex + 1)
  }

}

// create buffer array
const buffer = [...Array(3).keys()]

printCombos(arr,buffer,0,0)
