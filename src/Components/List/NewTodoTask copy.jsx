import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function NewTodoTask(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Task
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        // keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={props.handleSubmitBucket}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add New Task
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Bucket Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Bucket Name"
                // value={props.title}
                // name="title"
                // onChange={props.handleChangeValue}
                // required={true}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit" onClick={handleClose}>
              Save
            </Button>
            {/* <button onClick={props.handleSubmit}>submit this data</button> */}
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
export default NewTodoTask;
