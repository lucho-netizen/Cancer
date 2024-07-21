const jwt = require("jsonwebtoken");
const Admin = require("../../models/admin/admin");


exports.loginAdmin = (req, res) => {
    const { correo, password } = req.body;
    Admin.findByEmailAdmin(correo, password, (err, user) => {
      if (err) {
        console.error("Error en el servidor:", err);
        return res.status(500).json({ message: "Error en el servidor" });
      }
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      // Verificar si es administrador
      if (user.id_role === 1) {
        return res.status(403).json({ message: "Acceso no autorizado" });
      }
      // Generar token JWT para administrador
      const token = jwt.sign({ id: user.id }, "secretadmin", { expiresIn: "1h" });
      res
        .status(200)
        .json({
          message: "Usuario administrador autenticado correctamente",
          token,
        });
    });
  
 
}

exports.getPatients = (req, res) => {
  Admin.getPatients((err, patients) => {
    if (err) {
      console.error('Error al obtener pacientes:', err);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
    res.json(patients);
  });
};


 exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Sesión terminada correctamente" });
};
  