const pokemonCards = document.getElementById('pokemon-cards');
const next = document.getElementById('nextBut');

let urlOffSet = 0;
let urlState = `https://pokeapi.co/api/v2/pokemon/?offset=${urlOffSet}&limit=20`;

next.addEventListener('click', () => {
  urlOffSet = urlOffSet + 20;
  urlState = `https://pokeapi.co/api/v2/pokemon/?offset=${urlOffSet}&limit=20`;
  console.log(urlOffSet, urlState);
});

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

console.log(next);
