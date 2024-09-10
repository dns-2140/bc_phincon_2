function hitungFaktorial(n) {
  if (n === 0) {
    return 1;
  }
  const arr = [];
  let counter = 1;
  for (let i = 1; i < n; i++) {
    counter = counter * (i + 1);
  }
  return counter;
}

console.log(hitungFaktorial(5));
console.log(hitungFaktorial(0));
