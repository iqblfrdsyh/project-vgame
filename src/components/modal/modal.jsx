import { Modal, Button } from "react-bootstrap";

const ModalSuccess = (props) => {
  return (
    <Modal show={props.show} className="text-dark">
      <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.contentBody}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onclick}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalSuccess;
