function cekPalindrom(kata) {
  // Tulis kode di sini
  for (let i = 0; i <= kata.length; i++) {
    if (kata[i] !== kata[kata.length - (i + 1)]) {
      return false;
    }
    return true;
  }
}

const str = 'ia';
console.log(str.length);
console.log(str[1]);
console.log(cekPalindrom('00'));
console.log(cekPalindrom('000'));
console.log(cekPalindrom('katak'));
console.log(cekPalindrom('malam'));
console.log(cekPalindrom('hello'));
console.log(cekPalindrom('XY'));
