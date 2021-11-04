import React from "react";
import './Input.css'


const Input =({atributo, listener, parametro})=>{

    return(
        <div>
           <input 
             id={atributo.id}
             name={atributo.name}
             placeholder={atributo.placeholder}
             type={atributo.type}
             onChange={(e) => listener(e.target.name, e.target.value)}
             className='regular-style'
             /> 
        </div>
    )



};

export default Input;