/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../assets/css/login.css";
import login from "./login";
import axios from "axios";
import planta from "../assets/images/image-2.png";
import mujer from "../assets/images/img.png";

function Adduser() {
  const [passwordMatchMessage, setPasswordMatchMessage] = useState("");
  const [passwordStrengthMessage, setPasswordStrengthMessage] = useState("");
  const [passwordMatchMessageColor, setPasswordMatchMessageColor] =
    useState("");
  const [passwordStrengthMessageColor, setPasswordStrengthMessageColor] =
    useState("");

  const [correo, setCorreo] = useState({});
  const [password, setPassword] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [edad, setEdad] = useState("");
  const [peso, setPeso] = useState("");
  const [nombre, setNombre] = useState("");
  const [tipo_documento, setTipo_documento] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [horaUser, setHoraUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  // Función para validar la fortaleza de la contraseña
  function validatePasswordStrength(password) {
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasNumber && hasSpecialChar;
  }

  function handleSubmit(event) {
    event.preventDefault();
    // const horauser = new Date();
    // const fecha = horauser.toISOString().slice(0, 19).replace("T", " ");

    const horauser = new Date();
    const horaColombiana = new Date(horauser.getTime() - (5 * 60 * 60 * 1000)); // Restar 5 horas en milisegundos
    const fecha = horaColombiana.toISOString().slice(0, 19).replace("T", " ");

    axios
      .post("http://127.0.0.1:5000/adduser", {
        nombre,
        apellido,
        tipo_documento,
        celular,
        identificacion,
        edad,
        peso,
        correo,
        password,
        fecha,
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.error("Error en inicio de sesión:", err);
        setError(
          "Error en inicio de sesión. Por favor, verifica tus credenciales."
        );
        setLoading(false);
      });

    if (loggedIn) {
      window.location.href = "/dashboard";
    }
  }

  // Función para manejar el evento onBlur en el campo de confirmación de contraseña
  function handleConfirmPasswordBlur(event) {
    const { value } = event.target;
    const password = document.getElementById("password").value;

    if (password === value) {
      setPasswordMatchMessage("Las contraseñas coinciden");
      setPasswordMatchMessageColor("green");
    } else {
      setPasswordMatchMessage("Las contraseñas no coinciden");
      setPasswordMatchMessageColor("red");
    }

    if (validatePasswordStrength(password)) {
      setPasswordStrengthMessage("La contraseña es fuerte");
      setPasswordStrengthMessageColor("green");
    } else {
      setPasswordStrengthMessage(
        "La contraseña debe contener números y caracteres especiales"
      );
      setPasswordStrengthMessageColor("red");
    }
  }

  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <>
      <title>Sign Up</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div className="wrapper">
        <div className="inner">
          <img src={mujer} alt="" className="image-1" />

          <form onSubmit={handleSubmit}>
            <h3>Regístrese</h3>

            <div className="form-holder">
              <span className="lnr lnr-user"></span>
              <input
                type="text"
                className="form-control"
                placeholder="nombre"
                name="nombre"
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-users"></span>
              <input
                type="text"
                className="form-control"
                placeholder="apellido"
                name="apellido"
                id="apellido"
                onChange={(e) => setApellido(e.target.value)}
                required
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-indent-decrease"></span>
              <select
                name="tipo_documento"
                id="tipo_documento"
                onChange={(e) => setTipo_documento(e.target.value)}
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

            <div className="form-holder">
              <span className="lnr lnr-phone"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="celular"
                id="celular"
                onChange={(e) => setCelular(e.target.value)}
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-file-add"></span>
              <input
                type="text"
                className="form-control"
                placeholder="identificacion"
                name="identificacion"
                id="identificacion"
                onChange={(e) => setIdentificacion(e.target.value)}
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-smile"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Edad"
                name="edad"
                id="edad"
                onChange={(e) => setEdad(e.target.value)}
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-heart"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Peso"
                name="peso"
                id="peso"
                onChange={(e) => setPeso(e.target.value)}
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-envelope"></span>
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="correo"
                id="correo"
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-lock"></span>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-lock"></span>
              <input
                type="password"
                className="form-control"
                placeholder="Confirma Contraseña"
                id="confirmPassword"
                onBlur={handleConfirmPasswordBlur}
                required
              />
            </div>

            <span
              id="passwordMatchMessage"
              style={{ color: passwordMatchMessageColor }}
            >
              {passwordMatchMessage}
            </span>
            <br />
            <span
              id="passwordStrengthMessage"
              style={{ color: passwordStrengthMessageColor }}
            >
              {passwordStrengthMessage}
            </span>

            <input type="submit" value="submit" />

            <div>
              <br />
              <p>Est&aacute;s registrada?</p>
              <a href="/login/" target="_blank">
                <span>Sí</span>
              </a>
            </div>
          </form>
          {errorMessage && <p>{errorMessage}</p>}

          <img src={planta} alt="" className="image-2" />
        </div>
      </div>
    </>
  );
}

export default Adduser;
