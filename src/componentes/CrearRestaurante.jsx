import React from "react";
import "./Restaurante.css"; // importamos el css
import { useNavigate } from "react-router-dom"; // importamos useNavigate para redireccionar
import { Link } from "react-router-dom"; // importamos Link para la navegación
const CrearRestaurante = ({ agregarRestaurante }) => {

  const [nombre, setNombre] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [tipo, setTipo] = React.useState("");
  const [imagen, setImagen] = React.useState("");
  const [reputacion, setReputacion] = React.useState(0);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoRestaurante = {
      nombre,
      direccion,
      tipo,
      imagen,
      reputacion,
    };
    agregarRestaurante(nuevoRestaurante);
    setNombre('');
    setDireccion('');
    setTipo('');
    setReputacion(0);
    setImagen('');
    navigate('/listaRestaurante'); // Redirecciona a la lista de restaurantes después de agregar uno nuevo
  };
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
    <form onSubmit={handleSubmit}>
      <h2>Crear Nuevo Restaurante</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Dirección"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Tipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="URL Imagen"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
        required
      />

      <button type="submit">Ingresar</button>
      <br />
      <Link to="/Inicio">Inicio</Link>
      <div>
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

    </form>
  );
};
export default CrearRestaurante;