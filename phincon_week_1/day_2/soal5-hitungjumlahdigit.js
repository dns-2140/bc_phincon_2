function hitungJumlahDigit(angka) {
  //convert angka to numbers
  const stringAngka = angka.toString();
  const arrAngkaString = stringAngka.split('');
  console.log(arrAngkaString);
  const arrAngka = arrAngkaString.map((x) => Number(x));
  let res = 0;
  for (let i = 0; i < arrAngka.length; i++) {
    res = res + arrAngka[i];
  }
  return res;
}

console.log(hitungJumlahDigit(12345));
console.log(hitungJumlahDigit(9876));
