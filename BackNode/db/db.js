// db.js

const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: 'Rolex.b1',
  database: 'cancer'
};

// Crear una nueva conexión
const connection = mysql.createConnection(dbConfig);

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos MySQL establecida');
});

// Exportar la conexión para que pueda ser utilizada en otros archivos
module.exports = connection;
