import React, { Component } from "react";
import Header from "../Components/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TodoListItem from "../Components/List/TodoListItem";
import axios from "../config/axios";
import NewTodoTask from "../Components/List/NewTodoTask";

class TodoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bucketTitle: this.props.location.state.bucket_title,
      bucket_id: this.props.location.state.bucket_id,
      bucket_desc: this.props.location.state.bucket_desc,
      allTodoList: [],
      todoTask: "",
    };
  }

  componentDidMount() {
    this.getTodoList();
  }

  getTodoList() {
    axios
      .get("api/Todo/")
      .then((response) => {
        this.setState({ allTodoList: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChangeValue = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitTodoTask = (event) => {
    event.preventDefault();

    const formData = {
      todo_task: this.state.todoTask,
      status: false,
      bucket: this.state.bucket_id,
    };

    axios
      .post("/api/Todo/", formData)
      .then((response) => {
        console.log(response);
        this.getTodoList();
        this.setState({ todoTask: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleDeleteItem = (itemId) => {
    axios
      .delete(`api/Todo/${itemId}`)
      .then((response) => {
        console.log(response);
        this.getTodoList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleMarkItemComplete = (itemId) => {
    const id = itemId.id;
    const formData = {
      todo_task: itemId.task,
      status: !itemId.status,
      bucket: itemId.bucket_id,
    };

    axios
      .put(`/api/Todo/${id}/`, formData)
      // .put('/api/Todo/1/', formData)
      .then((response) => {
        console.log(response);
        this.getTodoList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <div
          // className="alert alert-secondary"
          >
            <Row>
              <Col>
                <h4>
                  <Link to="/">
                    <i
                      className="fa fa-arrow-circle-left"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </Link>
                  &nbsp; &nbsp;
                  <b> {this.props.location.state.bucket_title}</b>
                </h4>
              </Col>
              <Col md="auto"></Col>
              <Col xs lg="2">
                <NewTodoTask
                  todoTask={this.state.todoTask}
                  handleChangeValue={this.handleChangeValue}
                  handleSubmitTodoTask={this.handleSubmitTodoTask}
                />
              </Col>
            </Row>
          </div>
          <small style={{ color: "gray", marginLeft: "10px" }}>
            {this.state.bucket_desc}
          </small>
          <hr style={{ marginTop: "-2px" }} />

          {this.state.allTodoList.length > 0 ? (
            this.state.allTodoList
              .filter((todoItem) => todoItem.bucket === this.state.bucket_id)
              .map((filteredTodo) => (
                <TodoListItem
                  key={filteredTodo.id}
                  id={filteredTodo.id}
                  bucket_id={this.state.bucket_id}
                  status={filteredTodo.status}
                  task={filteredTodo.todo_task}
                  handleMarkItemComplete={this.handleMarkItemComplete}
                  handleDeleteItem={this.handleDeleteItem}
                />
              ))
          ) : (
            <div>
              <small>There is no task in this bucket</small>
            </div>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default TodoView;
