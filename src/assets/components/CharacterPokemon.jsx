import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CharacterPokemon = ({ url }) => {
  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data))
  }, [])
  const type2 = character.types?.[1]?.type.name
  console.log(character)
  return (
    <Link to={`/pokedex/${character.id}/`}>
      <section className='card w-80 glass text-center items-center mb-6 shadow-lg shadow-cyan-500/50'>
        <figure className='bg-gradient-to-r from-[#7EC6C5] to-[#ABDAC6,#CAE099] w-full'>
          <img
            src={character.sprites?.other.home.front_default}
            alt='pokemon'
            className='w-[180px] h-[180px]'
          />
        </figure>

        <h1>{character.name}</h1>
        <p>
          {character.types?.[0].type.name}
          {character.types?.[1]?.type.name ? ` / ${type2}` : ''}
        </p>
        <p>Type</p>
        <div className='grid grid-cols-2  text-center gap-4 m-5'>
          <div className='text-2xl'>
            <h3>HP</h3>
            <p>{character.stats?.[0].base_stat}</p>
          </div>
          <div className=' text-2xl'>
            <h3>STACK</h3>
            <p>{character.stats?.[1].base_stat}</p>
          </div>
          <div className=' text-2xl'>
            <h3>DEFENSE</h3>
            <p>{character.stats?.[2].base_stat}</p>
          </div>
          <div className='text-2xl'>
            <h3>SPEED</h3>
            <p>{character.stats?.[5].base_stat}</p>
          </div>
        </div>
      </section>
    </Link>
  )
}

export default CharacterPokemon
