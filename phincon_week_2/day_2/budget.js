const getBudgets = (arr) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res = res + arr[i].budget;
  }
  return res;
};

const arr1 = [
  { name: 'john', age: 21, budget: 23000 },
  { name: 'steve', age: 31, budget: 40000 },
  { name: 'martin', age: 51, budget: 2700 },
];

console.log(getBudgets(arr1));
