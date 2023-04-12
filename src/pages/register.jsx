// import { useEffect } from "react";
import { Form, FloatingLabel, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AnimationAOS } from "../AnimationAOS";
import Success from "../components/successAnimation/success";
import { useState } from "react";
import "../styles/style.css";

const Register = () => {
  const [success, setSuccess] = useState(false);

  const backgroundRegister = {
    backgroundImage: `url('assets/background/bgRegister.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  const styleInput = {
    background: "transparent",
    color: "#fff",
  };

  const [passMatch, setPassMatch] = useState(true);
  const [inputPass, setInputPass] = useState("");
  const [inputRepeat, setInputRepeat] = useState("");

  const handleInputChange = (e) => {
    const repeatPass =
      e.target.name === "repeatPass" ? e.target.value : inputRepeat;
    const password = e.target.name === "password" ? e.target.value : inputPass;

    if (password == repeatPass) {
      setPassMatch(true);
    }

    setInputPass(password);
    setInputRepeat(repeatPass);
  };

  const styleInputPass = {
    background: "transparent",
    color: "#fff",
    borderColor: passMatch ? "" : "red",
  };

  const navigate = useNavigate();

  const HandleRegister = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repeatPass = e.target.repeatPass.value;

    const newUser = {
      username: username,
      email: email,
      password: password,
    };

    if (password !== repeatPass) {
      setPassMatch(false);
    } else {
      localStorage.setItem("user", JSON.stringify(newUser));
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  AnimationAOS();

  return (
    <div className="register" style={backgroundRegister}>
      <div data-aos="fade-right">
        <Container>
          {success ? (
            <Success successTo="Success Register" />
          ) : (
            <>
              <div className="title">
                <h1>Register</h1>
              </div>
              <form data-aos="fade-right" onSubmit={HandleRegister}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    style={styleInput}
                    name="username"
                    required
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    style={styleInput}
                    name="email"
                    required
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    style={styleInputPass}
                    className="mb-3"
                    name="password"
                    onChange={handleInputChange}
                    required
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Repeat password"
                >
                  <Form.Control
                    type="password"
                    placeholder="Repeat password"
                    style={styleInputPass}
                    name="repeatPass"
                    onChange={handleInputChange}
                    required
                  />
                </FloatingLabel>
                <button
                  className="btn btn-md text-black mt-4 mb-4 py-2 px-4 fw-semibold"
                  style={{
                    background: "white",
                  }}
                >
                  Register
                </button>
              </form>
              <p>
                Already have an account? <Link to={"/login"}> Login now</Link>
              </p>
            </>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Register;
