function cekTahunKabisat(tahun) {
  return tahun % 4 === 0 ? true : false;
}

console.log(cekTahunKabisat(2020));
console.log(cekTahunKabisat(2021));
