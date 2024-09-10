function konversiSuhu(suhu, jenis) {
  // Tulis kode di sini
  if (jenis === 'C') {
    return (9 / 5) * suhu + 32 + ' Fahrenheit';
  } else if (jenis === 'F') {
    return (5 / 9) * (suhu - 32) + ' Celcius';
  }
}

// Ekspektasi hasil:
console.log(konversiSuhu(30, 'C')); // => 86 (Fahrenheit)
console.log(konversiSuhu(86, 'F')); //=> 30 (Celsius)
