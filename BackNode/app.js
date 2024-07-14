const jwt = require("jsonwebtoken");

const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./db/db"); // Importar la conexión a la base de datos
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const sql =
    "SELECT * FROM usuario WHERE correo = ? AND password = ? AND id_role = 1";

  mysqlConnection.query(
    sql,
    [req.body.correo, req.body.password],
    (err, data) => {
      if (err) {
        res.status(500).json({ message: "Error en el servidor" });
      } else {
        if (data.length > 0) {
          const token = jwt.sign({ id: data[0].id }, "secret", {
            expiresIn: "1h",
          });
          res.status(200).json({ message: "Usuario encontrado", token: token });
        } else {
          res.status(404).json({ message: "Usuario no encontrado" });
        }
      }
    }
  );
});

// Login Admin
// app.post("/loginadmin", (req, res) => {

//   const sql = "SELECT * FROM usuario WHERE correo = ? AND password = ? AND id_role = 2";

//   mysqlConnection.query(
//     sql,
//     [req.body.correo, req.body.password],
//     (err, data) => {
//       if (err){
//         res.status(500).json({ message: "Error en el servidor" });
//       } else {
//         if (data.length > 0) {
//           const token = jwt.sign({ id: data[0].id }, "secretadmin", {
//             expiresIn: "1h",
//           });
//           res.status(200).json({ message: "Usuario encontrado", token: token });
//         } else {
//           res.status(404).json({ message: "Usuario no encontrado" });
//         }
//       }
//     }
//   );
// });

// Login Admin Correcto
app.post("/loginadmin", (req, res) => {
  const sql = "SELECT * FROM usuario WHERE correo = ? AND password = ?";

  mysqlConnection.query(
    sql,
    [req.body.correo, req.body.password],
    (err, data) => {
      if (err) {
        console.error("Error al ejecutar la consulta SQL:", err);
        return res.status(500).json({ message: "Error en el servidor" });
      }

      if (data.length === 0) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      const user = data[0];
      if (user.id_role !== 2) {
        return res.status(403).json({ message: "Acceso no autorizado" });
      }

      const token = jwt.sign({ id: user.id }, "secretadmin", {
        expiresIn: "1h",
      });
      res.status(200).json({ message: "Usuario encontrado", token: token });
    }
  );
});

//Obtener usuarios
app.get("/patients", (req, res) => {
  const sql = "select u.nombre, u.edad, u.peso, u.correo, r.role_name as role_name  from usuario u inner join roles r on u.id_role = r.id_role";

  mysqlConnection.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener usuarios:", err);
      res.status(500).send("Error al obtener usuarios");
      return;
    }

    res.json(results); // Enviar los usuarios al frontend como JSON
  });
});

//Add-User
app.post("/adduser", (req, res) => {
  const {
    nombre,
    apellido,
    tipo_documento,
    celular,
    identificacion,
    edad,
    peso,
    correo,
    password,
    id_role = 2,
    fecha,
    estado = 1,
  } = req.body;

  // Consulta SQL para verificar si el correo ya está registrado
  const checkEmailQuery =
    "SELECT COUNT(*) AS count FROM usuario WHERE correo = ? ";
  const checkEmailValues = [correo];

  mysqlConnection.query(checkEmailQuery, checkEmailValues, (err, rows) => {
    if (err) {
      console.error("Error executing MySQL query: ", err);
      res.status(500).json({ message: "Error en el servidor" });
      return;
    }

    const emailCount = rows[0].count;

    if (emailCount > 0) {
      res.send("El correo ya está registrado");
      res.render("tu_pagina_con_formulario", {
        errorMessage: "El correo ya está registrado.",
      });

      return;
    }

    // Si el correo no está registrado, procede con la inserción del nuevo usuario
    const insertUserQuery =
      "INSERT INTO usuario (nombre, apellido, tipo_documento, celular, identificacion, edad, peso, correo, password, id_role, fecha, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const insertUserValues = [
      nombre,
      apellido,
      tipo_documento,
      celular,
      identificacion,
      edad,
      peso,
      correo,
      password,
      id_role,
      fecha,
      estado,
    ];

    mysqlConnection.query(insertUserQuery, insertUserValues, (err, result) => {
      if (err) {
        console.error("Error executing MySQL query: ", err);
        res.status(500).json({ message: "Error en el servidor" });
        return;
      }
      const token = jwt.sign({id: result.insertUserQuery}, 'secrect', {expiresIn: '1h' })
      console.log("Usuario registrado con éxito");
      res.json({ message: "Usuario registrado con éxito", token:token });
    });
  });
});

// Escuchar en el puerto 5000
app.listen(5000, () => {
  console.log("Servidor iniciado en el puerto 5000");
});
