import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokedexDetails = () => {
  const [pokemon, setPokemon] = useState({})

  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data))
  }, [id])

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.other.home?.front_default} alt='poke' />
    </div>
  )
}

export default PokedexDetails
