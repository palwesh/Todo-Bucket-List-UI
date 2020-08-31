import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BucketCard = (props) => {
  return (
    <Card style={{ width: "22rem", margin: "10px" }}>
      <Card.Body>
        <Link
          to={{
            pathname: "/todo",
            state: {
              bucket_id: props.id,
              bucket_title: props.title,
              bucket_desc: props.desc,
            },
          }}
        >
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <small> created: {new Date(props.created_at).toDateString()}</small>
          </Card.Subtitle>
          <Card.Text>{props.desc}</Card.Text>
          <Card.Link>
          <button
            className="btn btn-sm btn-success"
           
          >
            View
          </button>
          </Card.Link>
        </Link>
        &nbsp; &nbsp; &nbsp;
        <Card.Link>
          <button
            className="btn btn-sm btn-danger"
            onClick={(id) => props.handleDelete(props.id)}
          >
            Delete
          </button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default BucketCard;
