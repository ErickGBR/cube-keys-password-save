import React from "react";
//import { Container, Card, CardImg } from "reactstrap"; // Cambia aquí
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Register";

/*
import Register from "./components/Register";
import Login from "./components/Login";
import AddPassword from "./components/AddPassword";
import ViewPasswords from "./components/ViewPasswords";
import Account from "./components/Account";
*/
const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              <h1>KEY CUBE</h1>
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>

    /*
    <Router>
      <Container className="app-container">
        <Card className="text-center">
          <CardImg src="../assets/images/logowithe.png" alt="Logo" className="logo" />
          <h1>PasswordCube</h1>
        </Card>
        <nav>
          <ul>
            <li><Link to="/add-password">Add Password</Link></li>
            <li><Link to="/view-passwords">View Passwords</Link></li>
            <li><Link to="/account">Account</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add-password" element={<AddPassword />} />
            <Route path="/view-passwords" element={<ViewPasswords />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
      </Container>
    </Router>
    */
  );
};

export default App;
