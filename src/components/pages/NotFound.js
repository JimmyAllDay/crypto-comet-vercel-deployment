import React from "react";

import { Container, Col, Button } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container fluid className="p-5 d-flex flex-column h-100">
      There is no page at this url. Click the button to return home. <br />
      <br />
      <br />
      <Col className="border mx-auto">
        <Button variant="info" href="/">
          <p className="text-light p-0 m-0">Home</p>
        </Button>
      </Col>
    </Container>
  );
}
