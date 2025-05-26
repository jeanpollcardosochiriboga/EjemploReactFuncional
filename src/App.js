import logo from './logo.svg';
import './App.css';
import Restaurante from './componentes/Restaurante';
import "./componentes/Restaurante.css"; //importamos el css
import React, { useState } from "react"; //importamos React y useState para manejar el estado

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

function App() { //Componente funcional
  const restaurantes = [
    {
      nombre:"Cafetería La Unión",
      direccion:"10 de Agosto y Orellana",
      tipo:"Cafeteria",
      imagen:"https://imagenes.primicias.ec/files/main_image_832_468/uploads/2024/05/26/66539bf3ba20b.jpeg"
      
    },
    {
      nombre:"El Buen Sabor",
        direccion:"Av. Amazonas y Naciones Unidas",
        tipo:"Internacional",
        imagen:"https://imagenes.primicias.ec/files/main_image_832_468/uploads/2024/05/26/66539bf3ba20b.jpeg"
        

    },
    {
      nombre:"Paquita",
        direccion:"Orellana y Colon",
        tipo:"Grill",
        imagen:"https://imagenes.primicias.ec/files/main_image_832_468/uploads/2024/05/26/66539bf3ba20b.jpeg"
      
    },
    {
      nombre:"Las Vegas",
        direccion:"Av.Shyris",
        tipo:"Tradicional",
        imagen:"https://imagenes.primicias.ec/files/main_image_832_468/uploads/2024/05/26/66539bf3ba20b.jpeg"
        
    }

  ];
  const [likesTotales, setLikesTotales] = React.useState(0);

  const handlerLikeTotales = () => {
    setLikesTotales((prevState) => prevState + 1); // Incrementa el contador de likes totales
  };
  
 const handlerDislikeTotales = () => {
    setLikesTotales((prevState) => prevState - 1); // Incrementa el contador de dislikes totales
  }
  // Estado para manejar los dislikes totales
  const [dislikesTotales, setDislikesTotales] = React.useState(0);
  const [mensajeErrorLikes, setMensajeErrorLikes] = React.useState(""); // Estado para manejar el mensaje de error de likes

  
  return (
    <div className="App">
      {restaurantes.map((restaurante) => (
        <Restaurante
          nombre={restaurante.nombre}
          direccion={restaurante.direccion}
          tipo={restaurante.tipo}
          imagen={restaurante.imagen}
          key={restaurante.nombre} //clave unica para cada restaurante
          handlerLikeTotales={handlerLikeTotales} //pasamos la funcion para manejar los likes totales
          handlerDislikeTotales={handlerDislikeTotales} //pasamos la funcion para manejar los dislikes totales
          setMensajeErrorLikes={setMensajeErrorLikes} //pasamos la funcion para manejar el mensaje de error de likes
        />
      ))}
      <h2>Total Likes: {likesTotales}</h2>
       <h4>setMensajeErrorLikes</h4>
    </div>
  );
}

export default App;





