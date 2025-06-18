import { useState } from "react";
import axios from "axios"; //importamos axios para hacer peticiones HTTP

const AxiosRestaurante = () => {    

    const [restaurantes, setRestaurantes] = useState([]);
    const [clientes, setClientes] = useState([]); //estado para almacenar los clientes  

    const fecthRestaurantes =  () => {
        axios.get('https://api.example.com/restaurante') // Reemplaza con la URL de tu API
            .then(response => {
                setRestaurantes(response.data); // Actualiza el estado con los datos recibidos
            })
            .catch(error => {
                console.error("Error al cargar los restaurantes:", error);
            });
    }

    const fecthClientes =  () => {
        axios.get('https://api.example.com/clientes') // Reemplaza con la URL de tu API
            .then(response => {
                setClientes(response.data); // Actualiza el estado con los datos recibidos
            })
            .catch(error => {
                console.error("Error al cargar los clientes:", error);
            });
    }

    const clickHandler = () => {
        fecthRestaurantes(); // Llama a la función para cargar los restaurantes
        fecthClientes(); // Llama a la función para cargar los clientes
    }

    return (
        <div>
            <h1>Restaurantes</h1>
            <button onClick={clickHandler}>Cargar Restaurantes y Clientes</button>
            <ul>
                {restaurantes.map((restaurante, index) => (
                    <li key={index}>
                        <h2>{restaurante.nombre}</h2>
                        <p>{restaurante.direccion}</p>
                        <p>{restaurante.tipo}</p>
                        <img src={restaurante.imagen} alt={restaurante.nombre} />
                    </li>
                ))}
            </ul>
            <h1>Clientes</h1>
            <ul>
                {clientes.map((cliente, index) => (
                    <li key={index}>
                        <h2>{cliente.nombre}</h2>
                        <p>{cliente.email}</p>
                        <p>{cliente.telefono}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AxiosRestaurante ;
