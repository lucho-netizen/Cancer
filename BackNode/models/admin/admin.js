const mysqlConnection = require("../../db/db");
const sqlstring = require("sqlstring");
const { findByEmail } = require("../user");



class Admin {
  /**
   * @param {string} email,
   * @param {string} password
   * @param {function} callback
   */
      

      static findByEmailAdmin(email, password, callback) {
        const sql = "SELECT * FROM usuario WHERE correo = ? and password = ?";
        const values = [email, password];
    
        mysqlConnection.query(sql, values, (err, result) => {
          if (err) return callback(err, null);
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
