function cariFaktorBilangan(angka) {
  const arrFaktor = [];
  for (let i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      arrFaktor.push(i);
    }
  }

  return arrFaktor;
}

// Ekspektasi hasil:
console.log(cariFaktorBilangan(12)); //=> [1, 2, 3, 4, 6, 12]
