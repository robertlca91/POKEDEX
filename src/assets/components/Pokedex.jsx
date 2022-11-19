import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CharacterPokemon from './CharacterPokemon'
import { useNavigate } from 'react-router-dom'

const Pokedex = () => {
  const userName = useSelector((state) => state.name)
  const [pokemon, setPokemon] = useState([])
  const [pokemonName, setPokemonName] = useState('')
  const [tiposPokemon, setTiposPokemon] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=754')
      .then((res) => setPokemon(res.data.results))

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((res) => setTiposPokemon(res.data.results))
  }, [])

  const changePokemonName = () => {
    navigate(`/pokedex/${pokemonName.toLowerCase()}`)
  }
  const filterType = (e) => {
    axios.get(e.target.value).then((res) => setPokemon(res.data.pokemon))
  }

  // paginacion
  const [page, setPage] = useState(1)

  const pokemonItemPage = 20
  const lastIndex = page * pokemonItemPage
  const firtIndex = lastIndex - pokemonItemPage
  const pokemonPagination = pokemon.slice(firtIndex, lastIndex)
  const totalPage = Math.ceil(pokemon.length / pokemonItemPage)

  const array = []
  for (let i = 1; i <= totalPage; i++) {
    array.push(i)
  }
  console.log(pokemon)
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-6xl'>pokedex</h1>
      <p className='text-6xl'>Welcome ! {userName}</p>
      <input
        type='text'
        placeholder='search pokemon'
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={changePokemonName}>shearch</button>
      <select onChange={filterType} name='' id=''>
        {tiposPokemon.map((tipos) => (
          <option value={tipos.url} key={tipos.name}>
            {tipos.name}
          </option>
        ))}
      </select>
      <div>
        <ul>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className='btn btn-outline btn-success'
          >
            prev
          </button>
          {array.map((number) => (
            <button
              className='m-2 text-2xl btn btn-ghost'
              key={number}
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPage}
            className='btn btn-outline btn-success'
          >
            next
          </button>
        </ul>
      </div>

      <ul className='text-4xl'>
        {pokemonPagination.map((pokemon) => (
          <CharacterPokemon
            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          />
        ))}
      </ul>
      <div>
        <ul>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className='btn btn-outline btn-success'
          >
            prev
          </button>
          {array.map((number) => (
            <button
              className='m-2 text-2xl btn btn-ghost'
              key={number}
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPage}
            className='btn btn-outline btn-success'
          >
            next
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Pokedex
