const mysqlConnection = require("../../db/db");

class User {
  constructor(
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
    estado
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.tipo_documento = tipo_documento;
    this.celular = celular;
    this.identificacion = identificacion;
    this.edad = edad;
    this.peso = peso;
    this.correo = correo;
    this.password = password;
    this.id_role = id_role;
    this.fecha = fecha;
    this.estado = estado;
  }

  static findByEmail(email, password, callback) {
    const sql =
      "SELECT * FROM usuario WHERE correo = ? and password = ? AND id_role = 1";
    const values = [email, password];

    mysqlConnection.query(sql, values, (err, result) => {
      if (err) return callback(err, null);
      callback(null, result[0]);
    });
  }

  static createUser(user, callback) {
    const sql = `
      INSERT INTO usuario (nombre, apellido, tipo_documento, celular, identificacion, edad, peso, correo, password, id_role, fecha, estado) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      user.nombre,
      user.apellido,
      user.tipo_documento,
      user.celular,
      user.identificacion,
      user.edad,
      user.peso,
      user.correo,
      user.password,
      user.id_role,
      user.fecha,
      user.estado,
    ];

    mysqlConnection.query(sql, values, (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

  static findByEmailByGoogle({ googleId, email, name }, callback) {
    const sqlSelect = "SELECT * FROM usuario WHERE correo = ?";
    mysqlConnection.query(sqlSelect, [email], (err, results) => {
      if (err) return callback(err, null);

      // Verifica si results es un array y tiene elementos
      if (Array.isArray(results) && results.length > 0) {
        return callback(null, results[0]);
      }

      // Si no hay usuario, crea uno nuevo
      const sqlInsert = `
        INSERT INTO usuario (googleId, nombre, apellido, tipo_documento, celular, 
          identificacion, edad, peso, correo, password, id_role, fecha, estado) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const values = [
        googleId || null,
        name || "No Name",
        "No Last Name",
        "CC",
        "0",
        "0",
        "0",
        "0",
        email,
        "null",
        1,
        new Date(),
        1,
      ];

      mysqlConnection.query(sqlInsert, values, (err, result) => {
        if (err) return callback(err, null);
        callback(null, { id: result.insertId, googleId, email, name });
      });
    });
  }
}

module.exports = User;
