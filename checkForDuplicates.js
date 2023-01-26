


const arr = [9, 7, 2, 19, 7, 8, 11]

// const checkForDuplicates = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       if (arr[i] === arr[j]) {
//         console.log('Array has duplicate element')
//       }
//     }
//   }
// }



// Big-O = O(n2)

// const checkForDuplicates = (arr) => {
//   arr.sort()
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       console.log('Array has duplicate element')
//       return
//     }
//   }
//   console.log("No duplicates found")
// }

// Big-O = O(nlogn)


// const checkForDuplicates = (arr) => {
//   const set = {}
//   for (let i = 0; i < arr.length; i++) {
//     if (!obj.hasOwnProperty(arr[i])) {
//       obj[arr[i]] = i
//     } else {
//       console.log('Array has duplicate element')
//       return
//     }
//   }
//   console.log("No duplicates found")
// }

// Big-O = O(n)
// Big-O Space = O(n)


const checkForDuplicates = (arr) => {
  const removeDuplicates = [...new Set(arr)]
  // console.log(removeDuplicates)
  if (removeDuplicates.length === arr.length) {
    console.log('Array has no duplicate element')
    return
  }
  console.log(" duplicates found")

}

// Big-O = O(n) 
// Big-O Space = O(n)


checkForDuplicates(arr)

