const jwt = require("jsonwebtoken");
const User = require("../../models/user");

exports.login = (req, res) => {
  const { correo, password } = req.body;
  User.findByEmail(correo, password, (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Error en el servidor" });
    }
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    // Verificar si la contraseña coincide
    // if (user.password !== password) {
    //   return res.status(401).json({ message: "Contraseña incorrecta" });
    // }
    // Generar token JWT
    const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
    res
      .status(200)
      .json({ message: "Usuario autenticado correctamente", token });
  });
};



//     exports.adduser, (req, res) => {
//     const {
//       nombre,
//       apellido,
//       tipo_documento,
//       celular,
//       identificacion,
//       edad,
//       peso,
//       correo,
//       password,
//       id_role = 2,
//       fecha,
//       estado = 1,
//     } = req.body;

//     // Consulta SQL para verificar si el correo ya está registrado
//     const checkEmailQuery =
//       "SELECT COUNT(*) AS count FROM usuario WHERE correo = ? ";
//     const checkEmailValues = [correo];

//     mysqlConnection.query(checkEmailQuery, checkEmailValues, (err, rows) => {
//       if (err) {
//         console.error("Error executing MySQL query: ", err);
//         res.status(500).json({ message: "Error en el servidor" });
//         return;
//       }

//       const emailCount = rows[0].count;

//       if (emailCount > 0) {
//         res.send("El correo ya está registrado");
//         res.render("tu_pagina_con_formulario", {
//           errorMessage: "El correo ya está registrado.",
//         });

//         return;
//       }

//       // Si el correo no está registrado, procede con la inserción del nuevo usuario
//       const insertUserQuery =
//         "INSERT INTO usuario (nombre, apellido, tipo_documento, celular, identificacion, edad, peso, correo, password, id_role, fecha, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
//       const insertUserValues = [
//         nombre,
//         apellido,
//         tipo_documento,
//         celular,
//         identificacion,
//         edad,
//         peso,
//         correo,
//         password,
//         id_role,
//         fecha,
//         estado,
//       ];

//       mysqlConnection.query(insertUserQuery, insertUserValues, (err, result) => {
//         if (err) {
//           console.error("Error executing MySQL query: ", err);
//           res.status(500).json({ message: "Error en el servidor" });
//           return;
//         }
//         const token = jwt.sign({id: result.insertUserQuery}, 'secrect', {expiresIn: '1h' })
//         console.log("Usuario registrado con éxito");
//         res.json({ message: "Usuario registrado con éxito", token:token });
//       });
//     });
//   };

  exports.createUserWithGoogle = async (req, res) => {
    try {
      const { email, name, googleId } = req.body;
      let user = await User.findOne({ email });

      if (!user) {
        user = new User({
          email,
          name,
          googleId,
          role: 'user',
        });
        await user.save();
      }
      // Generar un token de JWT
      const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });

      res.status(201).send({ user, token });
    } catch (err) {
      console.error('Error al crear usuario', err);
      res.status(500).send('Error en el servidor');
    }
  };



exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Sesión terminada correctamente" });
};
