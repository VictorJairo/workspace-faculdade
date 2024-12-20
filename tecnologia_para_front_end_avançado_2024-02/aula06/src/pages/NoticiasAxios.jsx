import React from 'react'
import axios  from 'axios'
import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const url = "http://localhost:3000/noticias"

const NoticiasAxios = () => {

    const [noticias, setNoticias] = useState([])


    useEffect(() => {
        const buscarNoticias = () => {
            axios.get(url)
            .then(response => {
                setNoticias(response.data)
            })
            .catch(error => {
                console.error("Aconteceu um erro", error)
            }) 
        }
        buscarNoticias()
    }, [])

    return (
        <div>
            <h1>Noticias </h1>
            <ul>
                {
                    noticias.map((noticia)=> (
                        <li key={noticia.id}>
                            <h2><Link to={`/visualiza-noticia/
                            ${noticia.id}`}>{noticia.titulo}</Link></h2>
                        </li>
                    ))
                }
            </ul>
        </div>
      )
}

export default NoticiasAxios