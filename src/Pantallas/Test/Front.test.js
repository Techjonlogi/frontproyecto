import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import Home from "../Home/Home"
import Login from "../Login/Login"
import UserRegistry from "../UserRegistry/UserRegistry"
import VerpublicacionEspecifica from "../VerPublicacionEspecifica/VerPublicacionSeleccionada"
import CrearPublicacion from "../CrearPublicacion/CrearPublicacion"
import PaginaError from "../PaginaError/Error404"
import Busqueda from "../Busqueda/Busqueda"

test('renderizando home',()=>{
const home={
    content: 'esto es un test',
    important: true
}

const componente = render(<Home></Home>)
componente.getByText('Login')
})


test('renderizando home btn',()=>{
    const home={
        content: 'esto es un test',
        important: true
    }
    
    const componente = render(<Home></Home>)
    componente.getByText('Registro')
    })


test('renderizar login',()=>{
    const login ={
        content: 'eso es una prueba',
        important: true
    }

    const componente = render(<Login></Login>)
    componente.getByText('Usuario')
    
    
})

test ('renderizando registro',()=>{
    const componente = render (<UserRegistry></UserRegistry>)
    componente.getByText('Registro de Usuario')
})

test ('renderizando registro campos', ()=>{
    const componente = render(<UserRegistry></UserRegistry>)
    componente.getByText('Crear Cuenta')
})

test ('renderizado partes publicacion seleccionada', ()=>{
    const componente = render(<VerpublicacionEspecifica></VerpublicacionEspecifica>)
    componente.getByText('Nombre')
})

test ('renderizado partes publicacion seleccionada informacion', ()=>{
    const componente = render(<VerpublicacionEspecifica></VerpublicacionEspecifica>)
    componente.getByText('Informacion Publicacion')
})

test ('renderizado partes publicacion seleccionada fecha', ()=>{
    const componente = render(<VerpublicacionEspecifica></VerpublicacionEspecifica>)
    componente.getByText('Fecha de la publicacion')
})

test ('renderizado partes publicacion seleccionada tabla', ()=>{
    const componente = render(<VerpublicacionEspecifica></VerpublicacionEspecifica>)
    componente.getByText('usuario')
})

test ('renderizado partes publicacion seleccionada tabla comentarios', ()=>{
    const componente = render(<VerpublicacionEspecifica></VerpublicacionEspecifica>)
    componente.getByText('Comentario')
})

test('crear publicacion render', ()=>{

    const componente = render(<CrearPublicacion></CrearPublicacion>)   
})

test('Probando pagina 404', ()=>{
const componente = render(<PaginaError></PaginaError>)
componente.getByText('404')
})

test('Probando pagina 404 body', ()=>{
    const componente = render(<PaginaError></PaginaError>)
    componente.getByText('Creo que estas perdido, Aquí solo hay codigo nucleares, no creo que sea lo que buscas')
    })

test('Probando pagina 404 p', ()=>{
        const componente = render(<PaginaError></PaginaError>)
        componente.getByText('Revisa la URL que ingresaste')
        })

test('Probando pagina 404 btn', ()=>{
            const componente = render(<PaginaError></PaginaError>)
            componente.getByText('Regresar a un lugar seguro')
            })

test('Probando busqueda', ()=>{
                const componente = render(<Busqueda></Busqueda>)
                componente.getByText('No hubo resultados de la búsqueda.')
                })

            
