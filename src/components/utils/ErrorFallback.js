import React from "react";
import { Container, Button, Col } from "react-bootstrap";

export default function ErrorFallback() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Container fluid className="p-5 d-flex flex-column">
      <p className="mx-auto">
        There has been an error. Click the button to reset the page. If
        refreshing the page does not work, you may have to check back later.
      </p>
      <br />
      <br />
      <br />
      <Col className="border mx-auto">
        <Button variant="info" href="/" onClick={() => refreshPage()}>
          <p className="text-light p-0 m-0">Home</p>
        </Button>
      </Col>
    </Container>
  );
}
