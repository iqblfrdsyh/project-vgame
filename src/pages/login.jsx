import { Form, FloatingLabel, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AnimationAOS } from "../AnimationAOS";
import "../styles/style.css";

const Login = () => {
  const backgroundLogin = {
    backgroundImage: `url('assets/background/bgLogin.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  const styleInput = {
    background: "transparent",
    color: "#fff",
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
      alert("Email not registered");
    } else if (user.email != formData.email) {
      alert("Email not registered");
    } else {
      if (formData.password !== user.password) {
        alert("Password wrong");
      } else {
        navigate("/");
      }
    }
  };

  AnimationAOS();

  return (
    <div className="login" style={backgroundLogin}>
      <div data-aos="fade-right">
        <Container>
          <div className="title">
            <h1>Login</h1>
          </div>
          <form data-aos="fade-right" onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                style={styleInput}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
            <p className="text-end pt-2">
              <Link to={"/forgotPass"}>Forgot password?</Link>
            </p>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                style={styleInput}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
            <button
              className="btn btn-md text-black mt-4 mb-4 py-2 px-4 fw-semibold"
              style={{
                background: "white",
              }}
            >
              Login
            </button>
            <p>
              Don't have an account? <Link to={"/register"}> Register now</Link>
            </p>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Login;
