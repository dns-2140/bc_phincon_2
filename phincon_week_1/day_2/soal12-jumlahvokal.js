function hitungJumlahVokal(kata) {
  let counter = 0;
  const arrKata = kata.split('');
  for (let i = 0; i < arrKata.length; i++) {
    if (isVocal(arrKata[i])) {
      counter++;
    }
  }
  return counter;
}

function isVocal(letter) {
  const arrVocal = ['a', 'i', 'u', 'e', 'o'];
  for (let i = 0; i < arrVocal.length; i++) {
    if (letter === arrVocal[i]) {
      return true;
    }
  }
  return false;
}
// Ekspektasi hasil:
console.log(hitungJumlahVokal('javascript'));
