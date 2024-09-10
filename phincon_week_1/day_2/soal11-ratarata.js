function hitungRataRata(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total / arr.length;
}

// Ekspektasi hasil:
console.log(hitungRataRata([1, 2, 3, 4, 5]));
