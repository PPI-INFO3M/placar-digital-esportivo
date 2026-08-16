import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [pontosTime1, setPontosTime1] = useState(0)
  const [pontosTime2, setPontosTime2] = useState(0)
  const [faltasTime1, setFaltasTime1] = useState(0)
  const [faltasTime2, setFaltasTime2] = useState(0)

  const [nomeTime1, setNomeTime1] = useState("Time 1")
  const [nomeTime2, setNomeTime2] = useState("Time 2")


}

export default App
