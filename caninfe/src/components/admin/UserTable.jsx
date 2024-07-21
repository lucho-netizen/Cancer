import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa el archivo CSS de Bootstrap

const UserTable = ({ users, updateUser, deleteUser }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.correo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="table-responsive">
      <h2 className="mb-4" style={{ textAlign: "center" }}>
        Lista de Usuarios
      </h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Peso</th>
            <th>Estado</th>
            <th>Actulizar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.correo}</td>
              <td>{user.edad}</td>
              <td>{user.peso}</td>
              <td>{user.estado}</td>
              <td>
                {/* Botones para actualizar y eliminar */}
                <button onClick={() => updateUser(user)}>Actualizar</button>
              </td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [users, setUsers] = useState([]);

  const updateUser = (updateUser) => {
    const updateUsers = users.map((user) =>
      user.id === updateUser.id ? updateUser : user
    );
    setUsers(updateUsers);
  };

  const deleteUser = (id) => {
    const deleteUsers = users.filter((user) => user.id !== id);
    setUsers(deleteUsers);
  };

  return (
    <div>
      
        users={users}
        updateUser={updateUser}
        deleteUser={deleteUser}
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default UserTable;
