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
        <Form onSubmit={props.handleSubmitTodoTask}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add New Task
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows="2"
                name="todoTask"
                placeholder="Write your Task here..."
                value={props.todoTask}
                onChange={props.handleChangeValue}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info" onClick={handleClose}>
              Cancel
            </Button>

            <Button variant="success" type="submit" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
export default NewTodoTask;
