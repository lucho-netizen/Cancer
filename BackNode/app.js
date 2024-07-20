// const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysqlConnection = require("./db/db"); // Importar la conexión a la base de datos
const userRoutes = require('./routes/userRoutes');
const AdminRoutes = require('./routes/admin/adminRoutes');


const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', userRoutes);
app.use('/apia', AdminRoutes);



// Escuchar en el puerto 5000
app.listen(5000, () => {
  console.log("Servidor iniciado en el puerto 5000");
});
