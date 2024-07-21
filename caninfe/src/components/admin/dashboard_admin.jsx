import React, { useState, useEffect } from "react";
import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";
import "../../assets/css/dashboardadmin.css";

import Logout from "./../logout/logout";

const Dashboardadmin = () => {
  const [users, setUsers] = useState([]);
  const [activeMenu, setActiveMenu] = useState("list"); // Estado para el menú activo

  useEffect(() => {
    // Lógica para obtener los usuarios de la base de datos o una API
    fetch("http://127.0.0.1:5000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const handleLogout = () => {
    // Realizar acciones de cierre de sesión, como limpiar el almacenamiento local, etc.
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="admin-dashboard">
      {/* Menú */}
      <div className="menu">
        <button onClick={() => setActiveMenu("add")}>Agregar Usuario</button>
        <button onClick={() => setActiveMenu("list")}>Listar Usuarios</button>
        <button onClick={handleLogout}>Cerrar Sesión</button>{" "}
        {/* Corregido aquí */}
      </div>

      {/* Contenido según el menú activo */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            {activeMenu === "add" && <AddUserForm addUser={addUser} />}
            {activeMenu === "list" && <UserTable users={users} />}
            {activeMenu === "other" && <div>Otra acción aquí...</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardadmin;
