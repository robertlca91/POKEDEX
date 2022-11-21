import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import InputName from './assets/components/InputName'
import Pokedex from './assets/components/Pokedex'
import PokedexDetails from './assets/components/PokedexDetails'
import ProtectedRoutes from './assets/components/ProtectedRoutes'
import ThemeDark from './assets/components/ThemeDark'
import { useState } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className='dark:text-neutral-focus  dark:bg-gradient-to-r from-cyan-900 via-cyan-500 to-cyan-200 relative'>
      <ThemeDark />
      <HashRouter className='App '>
        <Routes>
          <Route path='/' element={<InputName />} />
          <Route element={<ProtectedRoutes />}>
            <Route
              path='/pokedex'
              element={
                <Pokedex isVisible={isVisible} setIsVisible={setIsVisible} />
              }
            />
            <Route path='/pokedex/:id' element={<PokedexDetails />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
