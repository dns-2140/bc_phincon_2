function cariBilanganPrima(n) {
  // Tulis kode di sini
  const arr = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num; i++) {
    console.log(i);
    if (i === num) {
      return true;
    }
    if (num % i === 0) {
      return false;
    }
  }
}

console.log(isPrime(2));
console.log(isPrime(10));
console.log(cariBilanganPrima(100));
