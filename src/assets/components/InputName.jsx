import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeName } from '../../store/slice/name.slice'
import pokebola from '../image/pokedex.png'
import doctor from '../image/doctor.png'
import ash from '../video/ash.mp4'

const InputName = () => {
  const [userName, setUserName] = useState('')

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const enterName = () => {
    dispatch(changeName(userName))
    navigate('/pokedex')
  }

  return (
    <div className='flex flex-col text-center justify-center items-center h-screen gap-6 z-50 '>
      <img src={pokebola} width='350px' alt='pokedex' />

      <video
        src={ash}
        width='350px'
        height='350px'
        controls
        muted
        autoPlay
        className='rounded-xl'
      ></video>
      <h1 className='text-6xl dark:text-white '>Hello trainer!</h1>
      <input
        className='input input-bordered w-full max-w-xs dark:text-white'
        type='text'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className='btn btn-wide dark:text-white' onClick={enterName}>
        enter
      </button>
    </div>
  )
}

export default InputName
