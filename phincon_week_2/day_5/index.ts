export {};

let test2: string = 'hello';
test2 = 'world';
console.log(test2);

let names: string[] = [];
let myProfile: { name: string; age: number } = {
  name: 'david',
  age: 32,
};

console.log(myProfile);

names.push('x');
names.push('y');

console.log(names);

// type annotation with function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

colors.splice(5, 0, 'buduk');
console.log(colors);
