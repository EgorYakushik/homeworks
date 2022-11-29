const getComment = async (id) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)  
      createCommentCard(data)
  }
  catch(e) {
    alert(`Error: ${e}`)
  }
}


function createCommentCard(comment) {
  const commentEl = document.createElement('div')
  commentEl.classList.add('comment')

  const id = comment.id
  const email = comment.email
  const name = comment.name

  const commentTemplate = `
      <div class="img-container">
        <img src="https://bing.ioliu.cn/v1/rand">
      </div>
      <div class="info">
        <h3 class="email">${email}</h3>
        <p class="name">${name}</p>
      </div>
  `
  commentEl.innerHTML = commentTemplate
  document.querySelector('#container').appendChild(commentEl)

}

function fetchComment() {

  for (let i = 1; i <= 10; i++) {
    getComment(i)
    
  }
  
}


fetchComment();













// const colors = {
//   fire: "#FDDFDF",
//   grass: "#DEFDE0",
//   electric: "#FCF7DE",
//   water: "#DEF3FD",
//   ground: "#f4e7da",
//   rock: "#d5d5d4",
//   fairy: "#fceaff",
//   poison: "#98d7a5",
//   bug: "#f8d5a3",
//   dragon: "#97b3e6",
//   psychic: "#eaeda1",
//   flying: "#F5F5F5",
//   fighting: "#E6E0D4",
//   normal: "#F5F5F5",
// }
// const pokemonCount = 30;
// const mainTypes = Object.keys(colors)

// const getPokemon = async (id) => {
//   try {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//     const res = await fetch(url)
//     const data = await res.json()
//     createPokemonCard(data)

//   }
//   catch(e) {
//     alert(`Error: ${e}`)
//   }
// };

// function createPokemonCard(pokemon) {
//   const pokemonEl = document.createElement('div')
//   pokemonEl.classList.add('pokemon')

//   const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
//   const id = pokemon.id
//   const pokeTypes = pokemon.types.map(type => type.type.name)
//   const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1)
//   const color = colors[type]

//   pokemonEl.style.backgroundStyle = color

//   const pokemonTemplate = `
//       <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
//       </div>
//       <div class="info">
//         <span class="number">${id}</span>
//         <h3 class="name">${name}</h3>
//         <small class="type">Type: <span>${type}</span></small>
//       </div>
//   `
//   pokemonEl.innerHTML = pokemonTemplate
//   document.querySelector('#container').appendChild(pokemonEl)

// }

// function fetchPokemon() {

//   for (let i = 1; i <= pokemonCount; i++) {
//     getPokemon(i)
    
//   }
  
// }


// fetchPokemon();