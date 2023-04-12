import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import "./cardProfile.css";
import FormEdit from "./formEdit";
import { useNavigate } from "react-router-dom";

const CardProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dataUser = JSON.parse(localStorage.getItem("user")) || [];

  const handleEditSave = () => {
    setShow(false);
  };
  const navigate = useNavigate();

  const Logout = () => {
    navigate("/login");
  };

  const DeleteAcc = () => {
    const decision = confirm("Are you sure to delete your account?");
    if (decision) {
      localStorage.clear();
      navigate("/login");
    }
  };

  return (
    <>
      <div className="text-center text-white mt-3">
        <div className="profile mb-3">
          <img src="assets/Profile.svg" alt="" width="145px" />
        </div>
        <h4>{!dataUser.username ? "Guest" : dataUser.username}</h4>
        <h5>{!dataUser.email ? "example@gmail.com" : dataUser.email}</h5>
        <button
          className="btn btn-md btn-primary px-4 py-1 fs-6 mt-4"
          onClick={handleShow}
        >
          Edit
        </button>
      </div>
      <div className="text-center" style={{ marginTop: "12%" }}>
        <button className="btn btn-md btn-danger mb-3" onClick={Logout}>
          Logout
        </button>{" "}
        <br />
        <button className="btn btn-md btn-danger" onClick={DeleteAcc}>
          Delete Account
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Edit Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-dark">
          <FormEdit onSave={handleEditSave} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardProfile;
