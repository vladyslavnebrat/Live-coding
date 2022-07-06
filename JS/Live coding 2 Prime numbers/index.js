/**
 * @param {number} num
 * @return {undefined}
 */
function getPrimes(num) {
  for (let number = 2; number < num; number += 1) {
    let isPrime = true;
    for (let index = 2; index < number; index += 1) {
      if (number % index === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(number);
    }
  }
}

getPrimes(15);
getPrimes(7);

// input  - number
// output - undefined
// 1. iterate from 2 to num
// 2. check if prime
// 2.1.
// 3. if prime - print it
