const selectList = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.card-pokemon')

selectList.forEach(pokemon => {

    pokemon.addEventListener('click', () => {

        console.log(pokemon)

        const openPokemonCard = document.querySelector('.open')

        openPokemonCard.classList.remove('open')

        const idPokemon = pokemon.attributes.id.value

        const toOpenPokemonCard = document.getElementById('card-' + idPokemon)

        toOpenPokemonCard.classList.add('open')

        const activePokemonList = document.querySelector('.active')

        activePokemonList.classList.remove('active')

        const activePokemon = document.getElementById(idPokemon)
        
        activePokemon.classList.add('active')
    })
})