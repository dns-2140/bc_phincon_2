function hitungKemunculanKata(kalimat, kata) {
  // Tulis kode di sini
  const arrKata = kalimat.split(' ');
  console.log(arrKata);
  let counter = 0;
  for (let i = 0; i < arrKata.length; i++) {
    if (arrKata.includes(kata)) {
      counter++;
    }
  }
  return counter;
}

// Ekspektasi hasil:
console.log(
  hitungKemunculanKata('Saya suka makan nasi, saya juga suka minum air', 'suka')
); // => 2
