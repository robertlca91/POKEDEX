import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CharacterPokemon from './CharacterPokemon'
import { useNavigate } from 'react-router-dom'
import ChangePagination from './ChangePagination'
import Page from './Page'
import Pagination from './Pagination'

const Pokedex = ({ isVisible, setIsVisible }) => {
  const userName = useSelector((state) => state.name)
  //
  const [totalPokemon, setTotalPokemon] = useState(0) // api 1154
  const [totalPokemonPage, setTotalPokemonPage] = useState(20) // la cantidad de pokemones por pagina
  const [offset, setOffset] = useState(0) // se pone cero para que cuente a partir de esa posicion dentro del array
  const [pokemon, setPokemon] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${totalPokemonPage}`
      )
      .then((res) => setPokemon(res.data.results))

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => setTotalPokemon(res.data.count))

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((res) => setTiposPokemon(res.data.results))
  }, [offset])

  const changePokemonName = () => {
    navigate(`/pokedex/${pokemonName.toLowerCase()}`)
  }
  const filterType = (e) => {
    axios.get(e.target.value).then((res) => setPokemon(res.data.pokemon))
  }

  // se tiene que crear un useEffect para el consumo de api
  // useEffect(() => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${totalPokemonPage}`)
  //     .then((res) => setPokemon(res.data.results))

  //   axios
  //     .get(`https://pokeapi.co/api/v2/type/`)
  //     .then((res) => setTiposPokemon(res.data.results))
  // }, [])

  //
  // const userName = useSelector((state) => state.name)
  // const [pokemon, setPokemon] = useState([])
  const [pokemonName, setPokemonName] = useState('')
  const [tiposPokemon, setTiposPokemon] = useState([])

  // paginacion metodo elio
  // const [page, setPage] = useState(1)

  // const pokemonItemPage = 20
  // const lastIndex = page * pokemonItemPage
  // const firtIndex = lastIndex - pokemonItemPage
  // const pokemonPagination = pokemon.slice(firtIndex, lastIndex)
  // const totalPage = Math.ceil(pokemon.length / pokemonItemPage)

  // const array = []
  // for (let i = 1; i <= totalPage; i++) {
  //   array.push(i)
  // }
  // console.log(pokemon)
  return (
    <div className='flex flex-col items-center justify-center '>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-6xl'>POKEDEX</h1>
        <p className='text-6xl text-center'>Welcome ! {userName}</p>
      </div>
      <input
        className='h-10 rounded-xl text-center z-50 mt-4'
        list='pokemon'
        name='pokemon'
        placeholder='search pokemon'
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <div className='z-[60]'>
        <datalist id='pokemon'>
          {pokemon.map((pok) => (
            <option value={pok.name} key={pok.name}>
              {pok.name}
            </option>
          ))}
        </datalist>
      </div>
      <button
        className='btn btn-outline dark:text-white z-50 mt-4 mb-4'
        onClick={changePokemonName}
      >
        shearch
      </button>
      <select
        className='input input-bordered input-info w-40 max-w-xs dark:text-white z-50 mb-4'
        onChange={filterType}
        name=''
        id='select'
      >
        {tiposPokemon.map((tipos) => (
          <option value={tipos.url} key={tipos.name}>
            {tipos.name}
          </option>
        ))}
      </select>
      <div>
        <Pagination
          totalPokemonPage={totalPokemonPage}
          totalPokemon={totalPokemon}
          setOffset={setOffset}
        />
      </div>
      <div className='grid grid-cols-4 gap-4 '>
        {pokemon.map((poke) => (
          <li className='list-none' key={poke.url}>
            <CharacterPokemon url={poke.url} />
          </li>
        ))}
      </div>

      <div>
        <Pagination
          totalPokemonPage={totalPokemonPage}
          totalPokemon={totalPokemon}
          setOffset={setOffset}
        />
      </div>
    </div>

    // <div className='flex flex-col items-center justify-center'>
    //   <div
    //     className='absolute top-0 left-0 right-0 bottom-0'
    //     onClick={() => setIsVisible(false)}
    //   ></div>
    //   <div className='flex flex-col items-center justify-center '>
    //     <h1 className='text-6xl'>POKEDEX</h1>
    //     <p className='text-6xl text-center'>Welcome ! {userName}</p>
    //   </div>
    //   <input
    //     className='h-10 rounded-xl text-center z-50 mt-4'
    //     list='pokemon'
    //     name='pokemon'
    //     placeholder='search pokemon'
    //     value={pokemonName}
    //     onChange={(e) => setPokemonName(e.target.value)}
    //   />
    //   <div className='z-[60]'>
    //     <datalist id='pokemon'>
    //       {pokemon.map((pok) => (
    //         <option value={pok.name} key={pok.name}></option>
    //       ))}
    //     </datalist>
    //   </div>
    //   <button
    //     className='btn btn-outline dark:text-white z-50 mt-4 mb-4'
    //     onClick={changePokemonName}
    //   >
    //     shearch
    //   </button>
    //   <select
    //     className='input input-bordered input-info w-40 max-w-xs dark:text-white z-50 mb-4'
    //     onChange={filterType}
    //     name=''
    //     id='select'
    //   >
    //     {tiposPokemon.map((tipos) => (
    //       <option value={tipos.url} key={tipos.name}>
    //         {tipos.name}
    //       </option>
    //     ))}
    //   </select>
    //   {/* paginacion */}
    //   <Page
    //     isVisible={isVisible}
    //     setIsVisible={setIsVisible}
    //     page={page}
    //     setPage={setPage}
    //     array={array}
    //     totalPage={totalPage}
    //   />

    //   {/* cierra paginacion */}
    //   <section className='mt-6'>
    //     <ul className='text-4xl w-50 h-50 md:grid grid-cols-4 gap-5'>
    //       {pokemonPagination.map((pokemon) => (
    //         <CharacterPokemon
    //           url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
    //           key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
    //         />
    //       ))}
    //     </ul>
    //   </section>
    //   <Page
    //     isVisible={isVisible}
    //     setIsVisible={setIsVisible}
    //     page={page}
    //     setPage={setPage}
    //     array={array}
    //     totalPage={totalPage}
    //   />
    // </div>
  )
}

export default Pokedex
