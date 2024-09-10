function hitungKarakterUnik(str) {
  // Tulis kode
  const arrLetter = [];
  for (let i = 0; i < str.length; i++) {
    if (!arrLetter.includes(str[i])) {
      arrLetter.push(str[i]);
    }
  }
  return arrLetter.length;
}

// Ekspektasi hasil:
console.log(hitungKarakterUnik('hello world')); //=> 8
