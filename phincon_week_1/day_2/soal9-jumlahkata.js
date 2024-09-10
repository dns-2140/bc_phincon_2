function hitungJumlahKata(kalimat) {
  const arr = kalimat.split(' ');
  return arr.length;
}

// Ekspektasi hasil:
console.log(hitungJumlahKata('Saya suka belajar JavaScript'));
console.log(hitungJumlahKata('Ibu pergi ke pasar bersama Budi'));
