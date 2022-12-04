// n = no of rings, Rod: A B C

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n < 2) {
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)

    return
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod)
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
  towerOfHanoi(n - 1, usingRod, toRod, fromRod)

}

console.log(towerOfHanoi(3, "A", "C", "B"))

// Big-O = O(2^n-1)