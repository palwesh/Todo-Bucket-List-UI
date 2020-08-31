import React, { Component } from "react";
import "./component.css";
import { Row, Col } from "react-bootstrap";

class TodoListItem extends Component {
  render() {
    const itemClass =
      "isItemCompleted-" + (this.props.status ? "done" : "undone");

    const mainDivClass =
      "item alert-" + (this.props.status ? "success" : "primary");

    return (
      // <div className="alert-primary item">
      <div className={mainDivClass}>
        <Row>
          <Col sm={1}>
            <input
              type="checkbox"
              defaultChecked={this.props.status}
              onChange={(itemId) =>
                this.props.handleMarkItemComplete(this.props)
              }
            />
          </Col>
          <Col>
            <span className={itemClass}> {this.props.task} </span>
          </Col>
          <Col xs lg="2">
            <button
              style={{ float: "right", marginTop: "-4px" }}
              type="button"
              className="btn btn-danger btn-sm"
              onClick={(itemId) => this.props.handleDeleteItem(this.props.id)}
            >
              <i className="fa fa-remove"></i>
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TodoListItem;
