import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BucketCard from "../Components/Card/BucketCard";
import NewBucket from "../Components/Card/NewBucket";
import Header from "../Components/Header/Header";
import axios from "../config/axios";

class BucketView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bucketCollection: [],

      title: "",
      description: "",
    };
  }

  componentDidMount() {
    this.getBucketList();
  }

  getBucketList() {
    axios
      .get("/api/bucket/", {})
      .then((response) => {
        this.setState({ bucketCollection: response.data });
        // console.log(response.data, this.state.bucketCollection);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleChangeValue = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleView = () => {
    alert("view");
  };

  handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`/api/bucket/${id}`)
      .then((response) => {
        this.getBucketList();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleSubmitBucket = (e) => {
    e.preventDefault();

    const formData = {
      title: this.state.title,
      description: this.state.description,
    };

    axios
      .post("/api/bucket/", formData)
      .then((response) => {
        // console.log(response);
        this.getBucketList();
        this.setState({
          title: "",
          description: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Header />

        <Container>
          <div
          // className="alert alert-secondary"
          >
            <Row>
              <Col md={10}>
                <h4 style={{ float: "left", color: "blue" }}>
                  <i className="fa fa-home" style={{ fontSize: "30px" }}></i>
                  &nbsp; Your Bucket list
                </h4>
              </Col>
              <Col md={2}>
                <NewBucket
                  handleSubmitBucket={this.handleSubmitBucket}
                  handleChangeValue={this.handleChangeValue}
                  title={this.state.title}
                  description={this.state.description}
                />
              </Col>
            </Row>
            <hr />
          </div>
          <Row>
            {this.state.bucketCollection.length > 0 ? (
              this.state.bucketCollection.map((bucket) => (
                <BucketCard
                  key={bucket.id}
                  id={bucket.id}
                  title={bucket.title}
                  desc={bucket.description}
                  created_at={bucket.created_at}
                  handleDelete={this.handleDelete}
                  handleView={this.handleView}
                />
              ))
            ) : (
              <div>
                <small>No Bucket is created !</small>
              </div>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
export default BucketView;
