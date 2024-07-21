import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Callback from "./components/callback";
import Chat from "./components/chat";
import Adduser from "./components/adduser";
import loginadmin from "./components/admin/login";
import logout from "./components/logout/logout";
import Dashboardadmin from "./components/admin/dashboard_admin";
import UserTable from "./components/admin/UserTable";
import AddUserForm from "./components/admin/AddUserForm";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import PrivateRoute from "./components/PrivateRoutes/PrivatRoute";
// Import chatBot
import ChatComponent from "./components/chatbot/chatcomponent";


import Index from "./components/index";
import Logout from "./components/logout/logout";

function App() {
  const user = localStorage.getItem("user");
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/callback" component={Callback} />
        <PrivateRoute path="/chat" component={Chat} />
        <Route path="/adduser" component={Adduser} />
        <Route path="/index" component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/loginadmin" component={loginadmin} />
        <PrivateRoute path="/usertable" component={UserTable} />
        <PrivateRoute path="/adduserform" component={AddUserForm} />
        <PrivateRoute path="/dashboardadmin" component={Dashboardadmin} />
        <Route path="/chatcomponent" component={ChatComponent} />
        <PrivateRoute path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
