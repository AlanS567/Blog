import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import {  Route, Routes } from 'react-router-dom'
import Form from './components/Form'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/> 
    <Routes>
    <Route path='/f' element={<Form/>}/>
    <Route path='/h' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
