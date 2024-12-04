import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
      <EstouConseguindoAprenderReact estouConseguindo={true} />

      {
        [ {nome: "João", email: "JoãoGamer@gmail.com", curso: "Sistemas para Internet", media: 7},
          {nome: "Maria", email: "MariaUnicornio@gmail.com", curso: "Sistemas para Internet", media: 8},
          {nome: "Pedro", email: "PedroHackerXx@gmail.com", curso: "Sistemas de informação", media: 4}
        ].map((aluno) => 
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/>
        )
      }
    </div>
  )
}

export default App