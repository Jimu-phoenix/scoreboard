import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lander from './pages/Lander'
import ScoreBoard from './pages/ScoreBoard'
import ScoreBoard1v1 from './pages/ScoreBoard1v1'
import Settings from './pages/Settings'
import './App.css'

function App() {
  
return(
    <Router>
      <Routes>
        <Route path='/' element={<Lander />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/scores' element={<ScoreBoard />}></Route>
        <Route path='/scores-1v1' element={<ScoreBoard1v1 />}></Route>
      </Routes>
    </Router>
)
  
}

export default App
