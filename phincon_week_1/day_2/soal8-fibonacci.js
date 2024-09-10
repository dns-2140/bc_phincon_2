function deretFibonacci(n) {
  const arr = [0, 1];
  for (let i = 0; arr.length < n; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }

  return arr;
}

// Ekspektasi hasil:
console.log(deretFibonacci(8));
