import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lander from './pages/Lander'
import ScoreBoard from './pages/ScoreBoard'
import Settings from './pages/Settings'
import './App.css'

function App() {
  
return(
    <Router>
      <Routes>
        <Route path='/' element={<Lander />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/scores' element={<ScoreBoard />}></Route>
      </Routes>
    </Router>
)
  
}

export default App
