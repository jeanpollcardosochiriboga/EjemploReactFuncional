import React from "react";
import Restaurante from "./Restaurante"; // importamos el componente Restaurante
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // importamos useNavigate para redireccionar

const ListaRestaurantes = ({ restaurantes, eliminarRestaurante }) => {
    const [likesTotales, setLikesTotales] = React.useState(0);
    const [mensajeErrorLikes, setMensajeErrorLikes] = React.useState(""); // Estado para manejar el mensaje de error de likes

    const handlerLikeTotales = () => {
        setLikesTotales((prevState) => prevState + 1); // Incrementa el contador de likes totales
    };
    

    const handlerDislikeTotales = () => {
        setLikesTotales((prevState) => prevState - 1); // Decrementa el contador de likes totales
    };

    const navigate = useNavigate(); // inicializamos useNavigate para redireccionar

    const HandleCrearRestaurante = () => {
        navigate("/CrearRestaurante");
    }
    const HandleListaRestaurante = () => {
        navigate("/ListaRestaurante");
    }
    const HandleInicio = () => {
        navigate("/Inicio");
    };

    return (
        <div className="lista-restaurantes">
            <h2>Lista de Restaurantes</h2>
            {restaurantes.map((rest, idx) => (
                <div key={idx}>
                    <Restaurante
                        {...rest}
                        handlerLikeTotales={handlerLikeTotales}
                        handlerDislikeTotales={handlerDislikeTotales}
                    />
                    <button onClick={() => eliminarRestaurante(idx)}>Eliminar Restaurante</button>
                </div>
            ))}
            <h2>Total Likes: {likesTotales}</h2>
            <h4>{mensajeErrorLikes}</h4>
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
};

export default ListaRestaurantes; // exportamos el componente ListaRestaurantes