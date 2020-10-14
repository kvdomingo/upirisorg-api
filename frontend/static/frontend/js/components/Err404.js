import React from "react";
import { MDBContainer as Container, MDBTypography as Typography } from "mdbreact";
import { Helmet } from "react-helmet";

export default class NotFound extends React.Component {
  render() {
    return (
      <Container className="my-5 py-5 text-center">
        <Helmet>
          <title>404 Not Found</title>
        </Helmet>
        <Typography tag="h1" variant="display-3" className="my-5 py-5">
          Not Found
        </Typography>
      </Container>
    );
  }
}
