function hitungPangkat(angka, pangkat) {
  let res = 1;
  for (let i = 1; i <= pangkat; i++) {
    res = res * angka;
  }
  return res;
}

// Ekspektasi hasil:
console.log(hitungPangkat(2, 3));
console.log(hitungPangkat(5, 2));
