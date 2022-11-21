import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pokeball from '../gifs/pokeball.gif'

const PokedexDetails = () => {
  const [pokemon, setPokemon] = useState({})
  const [add, setAdd] = useState(false)

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
    <div className='grid grid-cols-1 h-full min-h-screen dark:text-white md:text-3xl '>
      {!add && (
        <div className='md:flex md:items-center justify-center'>
          <img
            onClick={() => setAdd(true)}
            src={pokeball}
            className='cursor-pointer'
            alt='pokeball1'
          />
        </div>
      )}

      {add && (
        <div>
          <div
            className='top-0 right-0 bottom-0 left-0 fixed bg-white-900/80'
            onClick={() => setAdd(false)}
          ></div>

          <div>
            <div className='text-center flex flex-col items-center h-full justify-center '>
              {/* <img src={pokeball} alt='pokeball1' /> */}
              <img
                src={pokemon.sprites?.other.home?.front_default}
                alt='poke'
              />
              <h1 className='text-3xl white mt-5 font-extrabold md:text-6xl'>
                {pokemon.name}
              </h1>
            </div>
            <div className='grid grid-cols-2'>
              <div className=''>
                <h2 className='text-center my-3'>Weight</h2>
                <p className='text-center '>
                  <span className='w-8 h-8 bg-[#0a508355] px-3 py-1 rounded-xl'>
                    {pokemon.weight}
                  </span>
                </p>
              </div>
              <div>
                <h2 className='text-center my-3'>Height</h2>
                <p className='text-center'>
                  <span className='w-8 h-8 bg-[#0a508355] px-3 py-1 rounded-xl'>
                    {' '}
                    {pokemon.height}
                  </span>
                </p>
              </div>
              <div>
                <h2 className='text-center my-3'>Type</h2>
                <div className='flex flex-row gap-1 items-center justify-center'>
                  <p className='bg-[#0a508355] px-3 py-1 rounded-xl'>
                    {' '}
                    {pokemon.types?.[0].type.name}
                  </p>
                  <p className='bg-[#0a508355] px-3 py-1 rounded-xl'>
                    {' '}
                    {pokemon.types?.[1]?.type.name ? `${type2}` : ''}
                  </p>
                </div>
              </div>
              <div className='item-center justify-center mr-5'>
                <h2 className='text-center my-3'>Abilities</h2>
                <div className='flex flex-row gap-1 items-center justify-center'>
                  <p className='bg-[#0a508355] px-3 py-1 rounded-xl'>
                    {' '}
                    {pokemon.abilities?.[0].ability.name}
                  </p>
                  <p className='bg-[#0a508355] px-3 py-1 rounded-xl'>
                    {pokemon.abilities?.[1]?.ability.name ? `${ability2}` : ''}
                  </p>
                </div>
              </div>
            </div>
            <div className='text-center mt-3 mb-5'>
              <h2 className='text-2xl mt-8 md:text-5xl'>Stats</h2>
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

          {/* inicia el despliege */}
          <div className='collapse '>
            <input type='checkbox' className='peer' />
            <div className='collapse-title bg-primary text-[#c29243] dark:text-[#0c8da8] dark:peer-checked:bg-secondary peer-checked:bg-transparent dark:peer-checked:text-white peer-checked:text-[#c29243] text-center'>
              Movements
            </div>
            <div className='collapse-content bg-primary text-primary-content dark:peer-checked:bg-secondary peer-checked:bg-transparent peer-checked:text-secondary-content mx-auto gap-2 justify-center items-center '>
              {pokemon.moves?.map((poke) => (
                <div key={poke.move.name} className='inline m-1 my-8'>
                  <button
                    className='px-4 py-2 mb-4 glass dark:text-white text-neutral-content rounded-xl'
                    key={poke.move.name}
                  >
                    {poke.move.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PokedexDetails
