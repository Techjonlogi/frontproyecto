import './EstilosLogin.css'
import Title from './Componentes/Title/Title';
import Label from './Componentes/Label/Label';
import Input from './Componentes/Input/Input';
import React,{ useState } from 'react';


const Login = ()=> {

    const [user, setUser] = useState('');
    const[password,setPassword] =useState('');

    
function Listener(name,value) {
    if(name === 'usuario'){
       setUser(value) 
    }else{

        setPassword(value)
    }
    
}

function HacerLogin() {
    let cuenta = {user,password};
    if(cuenta){
        console.log('cuenta', cuenta);
    }
}


    return (
     <div className='login-container'>
         <div className='login-content'>

    
         <Title text="Bienvenido!!"></Title>
         <Label text="Usuario"></Label>
         <Input atributo={{
             id: 'usuario',
             name: 'usuario',
             type: 'text',
             placeholder: 'Ingrese su usuario'

         }}
         listener={Listener}
         ></Input>

         <Label text="contraseña"></Label>
         <Input atributo={{
             id: 'contraseña',
             name: 'contraseña',
             type: 'password',
             placeholder: 'Ingrese su Contraseña'

         }}
         listener={Listener}
         ></Input>
       <div className='submit-button-container'>
       <button onClick={HacerLogin} className='submit-button'>
             Ingresar
         </button>
       </div>
       <div className='submit-button-container'>
       <button  className='submit-button-register'>
             Crear Nueva Cuenta
         </button>
       </div>
        
         </div>
     </div>
    );
  }
  export default Login;