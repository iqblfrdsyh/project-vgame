import { useState } from "react";
import { Form } from "react-bootstrap";

const FormEdit = ({ onSave }) => {
  const dataUser = JSON.parse(localStorage.getItem("user")) || [];

  const username = dataUser.username;
  const email = dataUser.email;

  const [editUsername, setEditUsername] = useState(username);
  const [editEmail, setEditEmail] = useState(email);

  const newData = {
    username: editUsername || username,
    email: editEmail || email,
  };
  const handleEdit = () => {
    if (dataUser === null) {
      alert(
        "Sorry you're not registered cannot edit data, please login before edit data"
      );
    } else {
      localStorage.setItem("user", JSON.stringify({ ...dataUser, ...newData }));
      onSave();
    }
  };

  return (
    <>
      <Form.Label>Username</Form.Label>
      <Form.Control
        type="text"
        name="username"
        value={editUsername}
        className="mb-3"
        onChange={(e) => setEditUsername(e.target.value)}
      />
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="email"
        name="email"
        value={editEmail}
        className="mb-2"
        onChange={(e) => setEditEmail(e.target.value)}
      />
      <button
        className="btn btn-md btn-primary w-100 mt-4"
        onClick={handleEdit}
        handleClosed
      >
        Save
      </button>
    </>
  );
};

export default FormEdit;
