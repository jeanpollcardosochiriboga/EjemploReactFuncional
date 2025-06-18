
import './App.css';
import Restaurante from './componentes/Restaurante';
import "./componentes/Restaurante.css"; //importamos el css
import React, { useState } from "react"; //importamos React y useState para manejar el estado
import CrearRestaurante from './componentes/CrearRestaurante'; //importamos el componente CrearRestaurante
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaRestaurantes from './componentes/ListaRestaurantes'; //importamos el componente ListaRestaurante
import Inicio from './componentes/Inicio'; //importamos el componente Inicio
import { Link, Navigate } from 'react-router-dom'; //importamos Link y Navigate para manejar la navegación
import { useEffect } from 'react'; //importamos useEffect para manejar los efectos secundarios
import AxiosRestaurante from './componentes/AxiosRestaurante';
import axios from 'axios';
//primer ejercicio
/*function App() { //Componente funcional

  return (
    <div className="App">
      <Restaurante
        nombre="Cafetería La Unión"
        direccion="10 de Agosto y Orellana"
        tipo="Cafeteria"
        imagen="https://imagenes.primicias.ec/files/main_image_832_468/uploads/2024/05/26/66539bf3ba20b.jpeg">
      </Restaurante>
      <Restaurante
        nombre="El Buen Sabor"
        direccion="Av. Amazonas y Naciones Unidas"
        tipo="Internacional"
        imagen="https://imagenes.primicias.ec/files/main_image_832_468/uploads/2024/05/26/66539bf3ba20b.jpeg">
      </Restaurante>
      <Restaurante
        nombre="Paquita"
        direccion="Orellana y Colon"
        tipo="Grill"
        imagen="https://imagenes.primicias.ec/files/main_image_832_468/uploads/2024/05/26/66539bf3ba20b.jpeg">
      </Restaurante>
      <Restaurante
        nombre="Las Vegas"
        direccion="Av.Shyris"
        tipo="Tradicional"
        imagen="https://imagenes.primicias.ec/files/main_image_832_468/uploads/2024/05/26/66539bf3ba20b.jpeg">
      </Restaurante>

      



    </div>
  );
}*/

function App() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [error, setError] = useState(null);

  const fetchRestaurantes = () => {
    axios.get("http://localhost:3001/restaurante")
      .then(response => {
        setRestaurantes(response.data);
        setError(null);
      })
      .catch(() => {
        setError("Error al cargar los restaurantes");
      });
  };

  React.useEffect(() => {
    fetchRestaurantes();
  }, []);

  const agregarRestaurante = (nuevoRestaurante) => {
    setRestaurantes([...restaurantes, nuevoRestaurante]); // Agrega un nuevo restaurante al estado
    //que hace el SetRestaurantes? Actualiza el estado de restaurantes con el nuevo restaurante agregado
    //...restaurantes es el estado actual de restaurantes, y nuevoRestaurante es el nuevo restaurante que se va a agregar
    //nuevoRestaurante es un objeto que contiene las propiedades del nuevo restaurante
  };

  const eliminarRestaurante = (index) => {
    setRestaurantes(restaurantes.filter((_, i) => i !== index));
  };

  
    return (
    <BrowserRouter>
      {/* Menú de navegación visible en todas las páginas */}
      <nav style={{ margin: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Inicio</Link>
        <Link to="/CrearRestaurante" style={{ marginRight: 10 }}>Crear Restaurante</Link>
        <Link to="/ListaRestaurante">Lista de Restaurantes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/CrearRestaurante" element={<CrearRestaurante agregarRestaurante={agregarRestaurante} />} />
        <Route path="/ListaRestaurante" element={<ListaRestaurantes restaurantes={restaurantes} eliminarRestaurante={eliminarRestaurante} />} />
        {/* Redirección por defecto a Inicio */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path='/AxiosRestaurante' element={<AxiosRestaurante />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




