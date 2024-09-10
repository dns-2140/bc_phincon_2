//hitung jumlah bilangan ganjil
function hitungBilanganGanjil(num) {
  //list numbers from 1 to num
  const arr = [];
  let counter = 0;
  for (let i = 0; i <= num; i++) {
    arr.push(i);
  }
  //check if the number is an odd number
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      counter++;
    }
  }
  return counter;
}

hitungBilanganGanjil(10);
hitungBilanganGanjil(20);
