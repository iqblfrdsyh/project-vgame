import { FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

const ForgotPass = () => {
  const styleInput = {
    background: "transparent",
    color: "#fff",
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const emailForm = document.querySelector(".email-form");
    const passwordForm = document.querySelector(".password-form");
    emailForm.classList.add("d-none");
    passwordForm.classList.add("d-block");
  };

  const navigate = useNavigate();

  const handleConfirm = (e) => {
    e.preventDefault();
    const newPass = e.target.newPassword.value;
    const repeatPass = e.target.repeatPass.value;

    const user = JSON.parse(localStorage.getItem("user"));

    user.password = newPass;

    if (newPass != repeatPass) {
      alert("Password Tidak Sama");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      alert("Password updated successfully!");
      navigate("/login");
    }
  };

  return (
    <div className="forgotPass d-flex align-items-center">
      <div className="box w-50 mx-auto">
        <div className="title text-center mb-3">
          <h3>Input Your Email</h3>
        </div>

        <Form className="email-form">
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
              required
            />
          </FloatingLabel>
          <div className="d-flex justify-content-end mt-4">
            <button className="btn btn-md btn-primary" onClick={handleContinue}>
              Continue
            </button>
          </div>
        </Form>

        <Form
          className="password-form"
          style={{ display: "none" }}
          onSubmit={handleConfirm}
        >
          <FloatingLabel
            controlId="floatingInput"
            label="New Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              name="newPassword"
              style={styleInput}
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Repeat Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              name="repeatPass"
              style={styleInput}
              required
            />
          </FloatingLabel>
          <div className="d-flex justify-content-end mt-4">
            <button className="btn btn-md btn-primary">Confirm</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPass;
