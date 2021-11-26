import React from "react";
import NavBar from "../ComponentesVarios/NavBar";
import CrearPublicacionComponent from "../CrearPublicacion/CrearPublicacion";
import Header from "../ComponentesVarios/Header";
import "./Home.css"


const Home = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <CrearPublicacionComponent/>
    </>
  );
};
// cada componente va aqui
// const DefinirComponente =(cosas)=> {
//   switch

// }
//handleclick

export default Home;
