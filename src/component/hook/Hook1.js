import React, { useRef, useState } from "react";
import "./hook1.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardFooter,
  ListGroup,
  ListGroupItem,
  CardLink
} from "reactstrap";

export default function Hook1() {
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(10);
  const sidebarRef = useRef();

  const handle_count = () => {
    setCount(count - 1);
    setCount((preState) => preState - 1);
    setCount((preState) => preState - 1);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handle_count}>Count down</button>
      <div className={flag ? "hook1 active" : "hook1"}>
        <h1>Hook 1</h1>
        <p>Flag: {flag ? "True" : "False"}</p>
      </div>

      <div className="meo" ref={sidebarRef}></div>

      <button
        onClick={() => {
          setFlag(!flag);
          // sidebarRef.current.classlist.toggle("active")
        }}
      >
        Change flag
      </button>
      <Card
        className="my-2"
        style={{
          width: "18rem",
        }}
      >
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>

      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Card" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Card Title</CardTitle>
          <CardText>This is some text within a card body.</CardText>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>An item</ListGroupItem>
          <ListGroupItem>A second item</ListGroupItem>
          <ListGroupItem>And a third item</ListGroupItem>
        </ListGroup>
        <CardBody>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Card Link</CardLink>
        </CardBody>
      </Card>
    </>
  );
}
