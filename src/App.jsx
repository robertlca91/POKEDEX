import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import InputName from './assets/components/InputName'
import Pokedex from './assets/components/Pokedex'
import PokedexDetails from './assets/components/PokedexDetails'
import ProtectedRoutes from './assets/components/ProtectedRoutes'
import ThemeDark from './assets/components/ThemeDark'

function App() {
  return (
    <div className='dark:text-secondary text-primary dark:bg-secondary-content h-full'>
      <ThemeDark />
      <HashRouter className='App '>
        <Routes>
          <Route path='/' element={<InputName />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<PokedexDetails />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
