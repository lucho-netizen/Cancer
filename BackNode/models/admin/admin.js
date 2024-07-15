const mysqlConnection = require("../../db/db");
const sqlstring = require("sqlstring");
const { findByEmail } = require("../user");



class Admin {
  /**
   * @param {string} email,
   * @param {string} password
   * @param {function} callback
   */
      // static findByEmail(email, password, callback) {
      //   const sql = "SELECT * FROM usuario WHERE correo =? and password =? AND id_role = 2";
      //   const values = [email, password]
      //   mysqlConnection.query(sql, values, (err, result) => {
      //     if (err) return callback(err, null);
      //     callback(null, result[0]);
      //   });
      // }

      static findByEmail(email, password, callback){
        if(!email || !password) {
          const error = new Error ('Email y contraseñas requeridos');
          error.statusCode = 400;
          return callback(error, null);
        }
        const sql = "SELECT * FROM usuario WHERE correo =? and password =? AND id_role = 2";
        const values = [email, password];

        mysqlConnection.query(sql, values, (err, result) => {
          if(err) {
            console.error("Error al ejecutar la consulta SQL:", err);
            return callback(err, null);
          }

          if (!result || result.length === 0) {
            const error = new Error ('Usuario no encontrado');
            error.statusCode = 404;
            return callback(error, null);
          }
          callback(null, result[0]);
        });
        }
            
      static getPatients(callback) {
        const sql = "SELECT u.nombre, u.edad, u.peso, u.correo, r.role_name AS role_name FROM usuario u  INNER JOIN roles r ON u.id_role = r.id_role WHERE u.id_role = 1";  // Ajusta el ID del rol según tu estructura de roles
        
    
        mysqlConnection.query(sql, (err, results) => {
          if (err) {
            console.error("Error al obtener pacientes:", err);
            return callback(err, null);
          }
          callback(null, results);
        });
      }
}


module.exports = Admin;
