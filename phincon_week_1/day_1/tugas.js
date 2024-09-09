const bandingkanAngka = (angka1, angka2) => {
  if (angka1 === angka2) return -1;
  return angka1 > angka2;
};

const balikKata = (kata) => {
  return kata.split('').reverse('').join('');
};

console.log(bandingkanAngka(2, 2));
console.log(bandingkanAngka(3, 2));
console.log(bandingkanAngka(2, 3));
console.log(balikKata('mobil'));
console.log(balikKata('john doe'));
