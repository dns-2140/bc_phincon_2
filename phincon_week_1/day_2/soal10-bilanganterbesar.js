function cariBilanganTerbesar(arr) {
  let biggestNumber = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > biggestNumber) {
      biggestNumber = arr[i];
    }
  }
  return biggestNumber;
}

// Ekspektasi hasil:
console.log(cariBilanganTerbesar([3, 7, 2, 9, 1]));
console.log(cariBilanganTerbesar([3, 7, 2, 1, 9]));
