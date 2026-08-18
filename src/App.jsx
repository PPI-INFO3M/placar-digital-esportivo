import { useState } from 'react'
import './App.css'
import Time from './components/Time'
import Cabecalho from './components/Cabecalho'
import NomeTimes from './components/NomeTimes'

function App() {
  const [pontosTime1, setPontosTime1] = useState(0)
  const [pontosTime2, setPontosTime2] = useState(0)
  const [faltasTime1, setFaltasTime1] = useState(0)
  const [faltasTime2, setFaltasTime2] = useState(0)

  const [nomeTime1, setNomeTime1] = useState("Time 1")
  const [nomeTime2, setNomeTime2] = useState("Time 2")

  function incrementar(estado, setEstado, valor) {
    setEstado(estado + valor)
  }
  function decrementar(estado, setEstado, valor) {
    setEstado(estado - valor)
  }
  function zerar () {
    setFaltasTime1(0)
    setFaltasTime2(0)
    setPontosTime1(0)
    setPontosTime2(0)
  }

  function calcularVencedor(pontosA, pontosB) {
    if (pontosA > pontosB) {
      return 1
    } else if (pontosA < pontosB) {
      return 2
    } else {
      return 0
    }
  }

  const vencedor = calcularVencedor(pontosTime1, pontosTime2)

  return(
    <div className="placar">
      <Cabecalho />

      <NomeTimes 
      nomeTime1={nomeTime1}
      setNomeTime1={setNomeTime1}
      nomeTime2={nomeTime2}
      setNomeTime2={setNomeTime2}
      />

      <Time 
      nome={nomeTime1}
      pontos={pontosTime1}
      setPontos={setPontosTime1}
      faltas={faltasTime1}
      setFaltas={setFaltasTime1}
      incrementar={incrementar}
      decrementar={decrementar}
      vencendo={vencedor === 1}
      />
      <Time 
      nome={nomeTime2}
      pontos={pontosTime2}
      setPontos={setPontosTime2}
      faltas={faltasTime2}
      setFaltas={setFaltasTime2}
      incrementar={incrementar}
      decrementar={decrementar}
      vencendo={vencedor === 2}
      />
      <button className="botao-zerar" onClick={() => zerar()}>Zerar</button>



    </div>
  )

}

export default App
