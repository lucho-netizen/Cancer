const jwt = require("jsonwebtoken");

const User = require("../../models/user/user");
const mysqlConnection = require("../../db/db"); // Ajusta la ruta según tu estructura de carpetas
const { OAuth2Client } = require("google-auth-library");

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

// tonkens from G
const client = new OAuth2Client(
  "236412742841-kb5urirqrtgs16j06m7sifcrgqu8psbf.apps.googleusercontent.com"
);
const SECRET_KEY = "%RFGHJI";
//Google User

exports.googleLogin = async (req, res) => {
  const { idToken } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience:
        "236412742841-kb5urirqrtgs16j06m7sifcrgqu8psbf.apps.googleusercontent.com", // Asegúrate de usar tu Client ID
    });

    const payload = ticket.getPayload();
    const { sub: googleId, email, name } = payload;

    User.findByEmailByGoogle({ googleId, email, name }, (err, user) => {
      if (err) {
        console.error("Error finding or creating user:", err);
        return res.status(500).json({ message: "Error en el servidor" });
      }

      const token = jwt.sign({ sub: googleId, email, name }, SECRET_KEY, {
        expiresIn: "1h",
      });
      res
        .status(201)
        .json({ message: "Usuario logueado correctamente", token });
    });
  } catch (error) {
    console.error("Error en el login con Google:", error);
    res.status(401).json({ message: "Invalid Token" });
  }
};

exports.addUser = (req, res) => {
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
    id_role = 1,
    fecha = new Date(),
    estado = 1,
  } = req.body;

  const checkEmailQuery =
    "SELECT COUNT(*) AS count FROM usuario WHERE correo = ?";
  const checkEmailValues = [correo];

  mysqlConnection.query(checkEmailQuery, checkEmailValues, (err, rows) => {
    if (err) {
      console.error("Error ejecutando la consulta MySQL: ", err);
      res.status(500).json({ message: "Error en el servidor" });
      return;
    }

    const emailCount = rows[0].count;

    if (emailCount > 0) {
      res.status(400).json({ message: "El correo ya está registrado" });
      return;
    }

    const newUser = {
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
    };
    console.log("Datos a insertar en la base de datos:", newUser);

    const insertUserQuery = `
      INSERT INTO usuario (nombre, apellido, tipo_documento, celular, identificacion, edad, peso, correo, password, id_role, fecha, estado)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
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
        console.error("Error ejecutando la consulta MySQL: ", err);
        res.status(500).json({ message: "Error en el servidor" });
        return;
      }

      const token = jwt.sign({ id: result.insertId }, "secret", {
        expiresIn: "1h",
      });
      console.log("Usuario registrado con éxito");
      res.status(201).json({ message: "Usuario registrado con éxito", token });
    });
  });
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Sesión terminada correctamente" });
};
