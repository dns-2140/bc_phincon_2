const pokemonCards = document.getElementById('pokemon-cards');
const next = document.getElementById('nextBut');
async function fetchData() {
  let response = await fetch(urlState);
  let data = await response.json();
  return data;
}

async function fetchDataPokemon(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

const buttonState = [1, 2, 3, 4, 5];
const buttons = document.querySelectorAll('.buttonNum');
console.log(buttons);
// for (let i = 0; i < buttons.length; i++) {
//   console.log(buttons[i].textContent);
//   buttons[i].textContent = +buttons[i].textContent + 1;
// }

function nextPageNumber() {
  for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i].textContent);
    buttons[i].textContent = +buttons[i].textContent + 1;
  }
}

function previousPageNumber() {
  for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i].textContent);
    buttons[i].textContent = +buttons[i].textContent - 1;
  }
}

let urlOffSet = 0;
let urlState = `https://pokeapi.co/api/v2/pokemon/?offset=${urlOffSet}&limit=20`;

next.addEventListener('click', () => {
  nextPageNumber();
  urlOffSet = urlOffSet + 20;
  urlState = `https://pokeapi.co/api/v2/pokemon/?offset=${urlOffSet}&limit=20`;
  console.log(urlOffSet, urlState);
  fetchData()
    .then((data) => {
      console.log(data.results);
      pokemonCards.innerHTML = '';
      for (let i = 0; i < data.results.length; i++) {
        pokemonCards.insertAdjacentHTML(
          'beforeend',
          `<div id="pokemonCard${i}">${data.results[i].name}</div>`
        );
      }
      return data;
    })
    .then(async (data) => {
      for (let i = 0; i < data.results.length; i++) {
        console.log(data.results[i].url);
        console.log(data.results[i].name);

        try {
          // Call fetchDataPokemon with the Pokémon URL
          const pokemonData = await fetchDataPokemon(data.results[i].url);
          const pokemonCard = document.getElementById(`pokemonCard${i}`);
          console.log(pokemonCard);
          pokemonCard.insertAdjacentHTML(
            'beforeend',
            `<img src="${pokemonData.sprites.front_default}">`
          );
        } catch (e) {
          console.log(e);
        }
      }
    })
    .catch((err) => console.log(err));
});

///fetch data awal
fetchData()
  .then((data) => {
    console.log(data.results);
    for (let i = 0; i < data.results.length; i++) {
      pokemonCards.insertAdjacentHTML(
        'beforeend',
        `<div id="pokemonCard${i}">${data.results[i].name}</div>`
      );
    }
    return data;
  })
  .then(async (data) => {
    for (let i = 0; i < data.results.length; i++) {
      console.log(data.results[i].url);
      console.log(data.results[i].name);

      try {
        // Call fetchDataPokemon with the Pokémon URL
        const pokemonData = await fetchDataPokemon(data.results[i].url);
        const pokemonCard = document.getElementById(`pokemonCard${i}`);
        console.log(pokemonCard);
        pokemonCard.insertAdjacentHTML(
          'beforeend',
          `<img src="${pokemonData.sprites.front_default}">`
        );
      } catch (e) {
        console.log(e);
      }
    }
  })
  .catch((err) => console.log(err));
