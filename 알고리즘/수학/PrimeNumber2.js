// O(sqrt(n))
//모든 소수는 소수 2 와 3 을 제외하고 6n + 1 또는 6n – 1 의 형태로 표현될 수 있다.
function isPrime(n) {
  // Check if n=1 or n=0
  if (n <= 1) return false;
  // Check if n=2 or n=3
  if (n == 2 || n == 3) return true;
  // Check whether n is divisible by 2 or 3
  if (n % 2 == 0 || n % 3 == 0) return false;
  // Check from 5 to square root of n
  // Iterate i by (i+6)
  for (var i = 5; i <= Math.sqrt(n); i = i + 6)
    if (n % i == 0 || n % (i + 2) == 0) return false;

  return true;
}

// Driver Code
isPrime(11) ? console.log("true") : console.log("false");
