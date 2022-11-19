import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CharacterPokemon = ({ url }) => {
  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data))
  }, [])

  return (
    <Link to={`/pokedex/${character.id}/`}>
      <h1>{character.name}</h1>
      <img src={character.sprites?.other.home.front_default} alt='' />
    </Link>
  )
}

export default CharacterPokemon
