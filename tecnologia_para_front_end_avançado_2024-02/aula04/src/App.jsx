import React from 'react'
import Exercicio from './components/exercicio'
import Exercicio1 from './components/Exercicio1'
import Campanha from './components/Campanha'

const App = () => {
  return (
    <div>
      <Exercicio/>
      <Exercicio1/>
      <Campanha mes='setembro'/>

    </div>
  )
}

export default App