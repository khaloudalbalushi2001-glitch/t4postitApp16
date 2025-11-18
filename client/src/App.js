import { Container, Row } from "reactstrap";
import "./App.css";
//import About from "./Components/About";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Register from "./Components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Container fluid>
      <Router>
        <Row>
          <Header />
        </Row>

        <Row className="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </Row>

        <Row>
          <Footer />
        </Row>
      </Router>
    </Container>
  );
};

export default App;
