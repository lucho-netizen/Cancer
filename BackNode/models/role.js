const mysqlConnection = require('../db/db');

class Role {
  static findById(id, callback) {
    const sql = "SELECT * FROM roles WHERE id_role = ?";
    mysqlConnection.query(sql, [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, result[0]);
    });
  }

  static findByName(name, callback) {
    const sql = "SELECT * FROM roles WHERE role_name = ?";
    mysqlConnection.query(sql, [name], (err, result) => {
      if (err) return callback(err, null);
      callback(null, result[0]);
    });
  }
}

module.exports = Role;
