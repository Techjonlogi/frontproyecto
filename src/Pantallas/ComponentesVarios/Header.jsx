import React from "react";
import { FormControl,InputGroup,Button } from "react-bootstrap";
import "./Header.css";

import logoImagen from "../../Imagenes/LogoImagen.jpeg";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <div className="logo">
            <img src={logoImagen} height={100} />
          </div>
          <div className="divBusqueda wrapper">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Ingrese texto a buscar"
                
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="bottonBuscar">
               Buscar
              </Button>
            </InputGroup>
          </div>
          <div className="divBotonLogin ">
          <Button variant="danger">Ingresar</Button> 
          </div>
          <div className="divBotonRegistrarse">
          <Button variant="danger">Registrarme</Button> 
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
