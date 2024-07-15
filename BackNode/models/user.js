const mysqlConnection = require("../db/db");
const sqlstring = require("sqlstring");


class User {
  constructor(nombre, apellido, tipo_documento, celular, identificacion, edad, peso, correo, password, id_role, fecha, estado) {
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
    const sql = "SELECT * FROM usuario WHERE correo = ? and password = ? AND id_role = 1";
    const values = [email, password];

    mysqlConnection.query(sql, values, (err, result) => {
      if (err) return callback(err, null);
      callback(null, result[0]);
    });
  }

  
}

module.exports = User;
