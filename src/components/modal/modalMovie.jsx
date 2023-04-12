import { Modal, Button } from "react-bootstrap";

const ModalMovie = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="text-dark"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <video src={props.link} controls style={{ width: "100%" }}></video>
      </Modal.Body>
    </Modal>
  );
};

export default ModalMovie;
