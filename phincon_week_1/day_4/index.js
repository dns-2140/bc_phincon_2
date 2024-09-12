const num7 = document.getElementById('num7');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num0 = document.getElementById('num0');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const displayNumber = document.getElementById('res');
const del = document.getElementById('del');
const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const division = document.getElementById('division');
const multiplication = document.getElementById('multiplication');
const equal = document.getElementById('equal');

let state = '';
if (state) {
  displayNumber.textContent = state;
} else {
  displayNumber.textContent = '0';
}

num7.addEventListener('click', () => {
  // if (displayNumber.textContent === '0') {
  //   state = state + 7;
  //   displayNumber.textContent = state;
  //   console.log(state);
  // } else {
  //   state = state + 7;
  //   displayNumber.textContent = state;
  //   console.log(state);
  // }
  state = state + 7;
  displayNumber.textContent = state;
  console.log(state);
});

num1.addEventListener('click', () => {
  // if (displayNumber.textContent === '0') {
  //   displayNumber.textContent = '1';
  //   state = state + 1;
  //   console.log(state);
  // } else {
  //   displayNumber.textContent = displayNumber.textContent + '1';
  //   state = state + 1;
  //   console.log(state);
  // }
  state = state + 1;
  displayNumber.textContent = state;
  console.log(state);
});

num2.addEventListener('click', () => {
  // if (displayNumber.textContent === '0') {
  //   displayNumber.textContent = '2';
  //   state = state + 2;
  //   console.log(state);
  // } else {
  //   displayNumber.textContent = displayNumber.textContent + '2';
  //   state = state + 2;
  //   console.log(state);
  // }
  state = state + 2;
  displayNumber.textContent = state;
  console.log(state);
});

num3.addEventListener('click', () => {
  // if (displayNumber.textContent === '0') {
  //   displayNumber.textContent = '3';
  //   state = state + 3;
  //   console.log(state);
  // } else {
  //   displayNumber.textContent = displayNumber.textContent + '3';
  //   state = state + 3;
  //   console.log(state);
  // }
  state = state + 3;
  displayNumber.textContent = state;
  console.log(state);
});

num4.addEventListener('click', () => {
  // if (displayNumber.textContent === '0') {
  //   displayNumber.textContent = '4';
  //   state = state + 4;
  //   console.log(state);
  // } else {
  //   displayNumber.textContent = displayNumber.textContent + '4';
  //   state = state + 4;
  //   console.log(state);
  // }
  state = state + 4;
  displayNumber.textContent = state;
  console.log(state);
});

num5.addEventListener('click', () => {
  // if (displayNumber.textContent === '0') {
  //   displayNumber.textContent = '5';
  //   state = state + 5;
  //   console.log(state);
  // } else {
  //   displayNumber.textContent = displayNumber.textContent + '5';
  //   state = state + 5;
  //   console.log(state);
  // }
  state = state + 5;
  displayNumber.textContent = state;
  console.log(state);
});

num6.addEventListener('click', () => {
  // if (displayNumber.textContent === '0') {
  //   displayNumber.textContent = '6';
  //   state = state + 6;
  //   console.log(state);
  // } else {
  //   displayNumber.textContent = displayNumber.textContent + '6';
  //   state = state + 6;
  //   console.log(state);
  // }
  state = state + 6;
  displayNumber.textContent = state;
  console.log(state);
});

num8.addEventListener('click', () => {
  // if (displayNumber.textContent === '0') {
  //   displayNumber.textContent = '8';
  //   state = state + 8;
  //   console.log(state);
  // } else {
  //   displayNumber.textContent = displayNumber.textContent + '8';
  //   state = state + 8;
  //   console.log(state);
  // }
  state = state + 8;
  displayNumber.textContent = state;
  console.log(state);
});

num9.addEventListener('click', () => {
  // if (displayNumber.textContent === '0') {
  //   displayNumber.textContent = '9';
  //   state = state + 9;
  //   console.log(state);
  // } else {
  //   displayNumber.textContent = displayNumber.textContent + '9';
  //   state = state + 9;
  //   console.log(state);
  // }
  state = state + 9;
  displayNumber.textContent = state;
  console.log(state);
});

num0.addEventListener('click', () => {
  // if (displayNumber.textContent === '0') {
  //   displayNumber.textContent = '0';
  //   state = state + 0;
  //   console.log(state);
  // } else {
  //   displayNumber.textContent = displayNumber.textContent + '0';
  //   state = state + 0;
  //   console.log(state);
  // }
  state = state + 0;
  displayNumber.textContent = state;
  console.log(state);
});

del.addEventListener('click', () => {
  // if (displayNumber.textContent === '0') {
  //   displayNumber.textContent = '0';
  //   state = '0';
  //   console.log(state);
  // } else if (displayNumber.textContent.length === 1) {
  //   displayNumber.textContent = '0';
  //   state = '0';
  //   console.log(state);
  // } else {
  //   displayNumber.textContent = displayNumber.textContent.slice(0, -1);
  //   state = state.slice(0, -1);
  //   console.log(state);
  // }

  state = state.slice(0, -1);
  if (state) {
    displayNumber.textContent = state;
  } else {
    displayNumber.textContent = '0';
  }
  console.log(state);
});

addition.addEventListener('click', () => {
  state = state + '+';
  displayNumber.textContent = state;
  console.log(state);
});

subtraction.addEventListener('click', () => {
  state = state + '-';
  displayNumber.textContent = state;
  console.log(state);
});

multiplication.addEventListener('click', () => {
  state = state + '*';
  displayNumber.textContent = state;
  console.log(state);
});

division.addEventListener('click', () => {
  state = state + '/';
  displayNumber.textContent = state;
  console.log(state);
});

decimal.addEventListener('click', () => {
  state = state + '.';
  displayNumber.textContent = state;
  console.log(state);
});

equal.addEventListener('click', () => {
  const res = eval(state);
  console.log(res);
  displayNumber.textContent = res;
});

reset.addEventListener('click', () => {
  state = '';
  if (state) {
    displayNumber.textContent = state;
  } else {
    displayNumber.textContent = '0';
  }
  console.log(state);
});
