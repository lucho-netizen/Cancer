// En AddUserForm.js
import React, { useState } from "react";
import axios from "axios";
import admin from "./dashboard_admin";

const AddUserForm = ({ addUser }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tide, setIde] = useState("");
  const [celular, setCelular] = useState("");
  const [nide, setNIde] = useState("");
  const [edad, setEdad] = useState("");
  const [peso, setPeso] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({
      nombre,
      apellido,
      setIde,
      setCelular,
      setNIde,
      setEdad,
      setPeso,
      correo,
      setPass,
    });

    const horauser = new Date();
    const horaColombiana = new Date(horauser.getTime() - 5 * 60 * 60 * 1000); // Restar 5 horas en milisegundos
    const fecha = horaColombiana.toISOString().slice(0, 19).replace("T", " ");

    axios
      .post("http://127.0.0.1:5000/adduser", {
        nombre,
        apellido,
        tide,
        celular,
        nide,
        edad,
        peso,
        correo,
        password,
        fecha,
      })
      .then((res) => {
        console.log(res.data);
        window.location.href = "./dashboard_admin";
      })
      .catch((err) => {
        console.error("Error en inicio de sesión:", err);
      });
  };

  return (
    <div style={{ dsiplay: "flex", alignItems: "center", position: "center" }}>
      <h2 style={{ textAlign: "center" }}>Agregar Nuevo Usuario</h2>
      <form
        onSubmit={handleSubmit}
        style={{ marginLeft: "260px", marginRight: "auto" }}
      >
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            className="form-control"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ide">Tipo De Indentificaci&oacute;n:</label>
          <select
            name="ide"
            id="ide"
            onChange={(e) => setIde(e.target.value)}
            style={{
              marginLeft: "50px",
              borderLeft: "var(--size) solid transparent",
              borderRight: "var(--size) solid transparent",
              borderTop: "var(--size) solid black",
            }}
          >
            <option value="CC">Cedula de Ciudadania</option>
            <option value="TI">Tarjeta de Identidad</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Celular:</label>
          <input
            type="number"
            id="celular"
            className="form-control"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nide">Identificaci&oacute;n:</label>
          <input
            type="number"
            id="nide"
            className="form-control"
            value={nide}
            onChange={(e) => setNIde(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            className="form-control"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="peso">peso:</label>
          <input
            type="number"
            id="peso"
            className="form-control"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo:</label>
          <input
            type="email"
            id="correo"
            className="form-control"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
