import React, { useState } from "react";
import FaceIcon from "@material-ui/icons/Face";
import { Modal, Button, Form } from "react-bootstrap";
import PublishIcon from "@material-ui/icons/Publish";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add an Avatar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formFile" className="form-control mb-3">
          <Form.Control type="file" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button className="d-flex btn-success">
          <PublishIcon />
          Upload
        </Button>
        <Button className="btn-danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const AvatarModel = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button className="dropdown-item" onClick={() => setModalShow(true)}>
        <FaceIcon />
        Add avatar
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default AvatarModel;
