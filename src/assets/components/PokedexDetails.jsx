import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pokeball from '../gifs/pokeball.gif'

const PokedexDetails = () => {
  const [pokemon, setPokemon] = useState({})

  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data))
  }, [id])

  console.log(pokemon)

  const type2 = pokemon.types?.[1]?.type.name
  const ability2 = pokemon.abilities?.[1]?.ability.name

  //flex flex-col text-center justify-center items-center h-screen gap-6

  return (
    <div className='grid grid-cols-1 h-full dark:text-white '>
      <div>
        <div className='text-center flex flex-col items-center justify-center'>
          <img src={pokeball} alt='pokeball1' />
          <img src={pokemon.sprites?.other.home?.front_default} alt='poke' />
          <h1 className='text-2xl white mt-5 font-extrabold'>{pokemon.name}</h1>
        </div>
        <div className='grid grid-cols-2'>
          <div className=''>
            <h2 className='text-center mt-3'>Weight</h2>
            <p className='text-center'>{pokemon.weight}</p>
          </div>
          <div>
            <h2 className='text-center mt-3'>Height</h2>
            <p className='text-center'>{pokemon.height}</p>
          </div>
          <div>
            <h2 className='text-center mt-3'>Type</h2>
            <div className='flex flex-row gap-1 items-center justify-center'>
              <p className='bg-red-500 px-3 py-1'> {pokemon.types?.[0].type.name}</p>
              <p className='bg-red-500 px-3 py-1'> {pokemon.types?.[1]?.type.name ? `${type2}` : ''}</p>
            </div>
          </div>
          <div>
            <h2 className='text-center mt-3'>Abilities</h2>
            <div className='flex flex-row gap-1 items-center justify-center'>
              <p className='bg-red-500 px-3 py-1'> {pokemon.abilities?.[0].ability.name}</p>
              <p className='bg-red-500 px-3 py-1'>{pokemon.abilities?.[1]?.ability.name ? `${ability2}` : ''}</p>
            </div>

          </div>
        </div>
        <div className='text-center mt-3 mb-5'>
          <h2>Stats</h2>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <label htmlFor='HP'>HP</label>
          <progress
            className='progress progress-info w-56 border-2 border-white-500 h-5'
            id='HP'
            max='150'
            value={pokemon.stats?.[0].base_stat}
          ></progress>
          <p className='mb-5'>{pokemon.stats?.[0].base_stat}/150</p>
          <label htmlFor='Atack'>Atack</label>
          <progress
            className='progress progress-info w-56 border-2 border-white-500 h-5'
            id='Atack'
            max='150'
            value={pokemon.stats?.[1].base_stat}
          >
            {' '}
          </progress>
          <p className='mb-5'>{pokemon.stats?.[1].base_stat}/150</p>
          <label htmlFor='Defense'>Defense</label>
          <progress
            className='progress progress-info w-56 border-2 border-white-500 h-5'
            id='Defense'
            max='150'
            value={pokemon.stats?.[2].base_stat}
          >
            {' '}
          </progress>
          <p className='mb-5'>{pokemon.stats?.[2].base_stat}/150</p>
          <label htmlFor='Speed'>Speed</label>
          <progress
            className='progress progress-info w-56 border-2 border-white-500 h-5'
            id='Speed'
            max='150'
            value={pokemon.stats?.[5].base_stat}
          >
            {' '}
          </progress>
          <p className='mb-5'>{pokemon.stats?.[5].base_stat}/150</p>
        </div>
      </div>
      <h2 className='text-center text-2xl'>Movements</h2>
      <div className='flex flex-wrap gap-2 p-2'>
        {pokemon.moves?.map((poke) => (
          <button className='btn glass dark:text-white' key={poke.move.name}>{poke.move.name}</button>
        ))}
      </div>
    </div>
  )
}

export default PokedexDetails
