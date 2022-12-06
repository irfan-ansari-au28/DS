function isPrime(n) {
  // Check if n is less than or equal to 1
  if (n <= 1) return false;

  // Check if n is divisible by any number between 2 and n-1
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  // If n is not divisible by any number between 2 and n-1, it is prime
  return true;
}

function printPrimeNumbers(n1, n2) {
  // Iterate from n1 to n2 and print all prime numbers
  for (let i = n1; i <= n2; i++) {
    if (isPrime(i)) console.log(i);
  }
}

// Input two numbers from the user
const n1 = 20;
const n2 = 100;

console.log(`Prime numbers between ${n1} and ${n2}:`);

// Print all prime numbers between n1 and n2
printPrimeNumbers(n1, n2);
