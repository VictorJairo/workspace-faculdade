import React from 'react'

const RenderizandoComfuncoes = () => {

    function escolhaDeRenderizacao (oQueRenderizar) {
        if (oQueRenderizar === "h1") {
            return <h1>Texto em h1</h1>
        } else {
            return <h2>Texto em h2</h2>
        }

    }

  return (
    <div>
        {escolhaDeRenderizacao("teste")}
        {escolhaDeRenderizacao("h1")}
    </div>
  )
}

export default RenderizandoComfuncoes