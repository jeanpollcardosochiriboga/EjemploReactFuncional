import React from "react";
import Restaurante from "./Restaurante"; // importamos el componente Restaurante
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // importamos useNavigate para redireccionar
const Inicio = () => {
  
  const navigate = useNavigate(); // inicializamos useNavigate para redireccionar

  
  const HandleCrearRestaurante = () => {
    navigate("/CrearRestaurante");
  };

  const HandleListaRestaurante = () => {
    navigate("/ListaRestaurante");  
  }
  const HandleInicio = () => {
    navigate("/Inicio");
  };

  return (
    <div className="inicio">
      <h1>Bienvenido a la App de Restaurantes</h1>
      <p>Explora los mejores restaurantes de la ciudad.</p>
      <Link to="/Inicio">Inicio</Link>
      <br /> 
      <Link to="/CrearRestaurante">CrearRestaurante</Link>
      <br />
      <Link to="/ListaRestaurante">ListaRestaurante</Link>
      <br />
      <button onClick={HandleCrearRestaurante}> Go to CrearRestaurante</button>
      <br />
      <button onClick={HandleListaRestaurante}> Go to ListaRestaurante</button>
      <br />
      <button onClick={HandleInicio}> Go to Inicio</button>
    </div>
  );
 
}



export default Inicio; // exportamos el componente Inicio para que pueda ser utilizado en otros archivos