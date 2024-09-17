let aa = 0;
let bb = 0;

let player1 = '';
let player22 = '';

const enterPlayerNames = (p1, p2) => {
  player1 = p1;
  player2 = p2;
};

enterPlayerNames('disdada', 'abdul');
console.log(player1, player2);

const whoWins = (a, b) => {
  if (a === 'R' && b === 'S') {
    return aa++;
  }
  if (a === 'R' && b === 'P') {
    return bb++;
  }
  if (a === 'R' && b === 'R') {
    return;
  }

  if (a === 'S' && b === 'R') {
    return bb++;
  }

  if (a === 'S' && b === 'P') {
    return aa++;
  }

  if (a === 'S' && b === 'S') {
    return;
  }

  if (a === 'P' && b === 'R') {
    return aa++;
  }

  if (a === 'P' && b === 'P') {
    return;
  }

  if (a === 'P' && b === 'S') {
    return bb++;
  }
};

const calculateScore = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][0], arr[i][1]);
    whoWins(arr[i][0], arr[i][1]);
  }
  console.log(aa, bb);
  if (aa > bb) {
    aa = 0;
    bb = 0;
    return player1;
  } else if (bb > aa) {
    aa = 0;
    bb = 0;
    return player2;
  } else {
    aa = 0;
    bb = 0;
    return 'Tie';
  }
};

console.log(
  calculateScore([
    ['R', 'P'],
    ['R', 'S'],
    ['S', 'P'],
  ])
);

console.log(
  calculateScore([
    ['S', 'R'],
    ['R', 'S'],
    ['R', 'R'],
  ])
);
