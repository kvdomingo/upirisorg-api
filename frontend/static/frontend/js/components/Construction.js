import React from "react";
import { MDBContainer as Container, MDBTypography as Type, MDBIcon as Icon } from "mdbreact";
import { Helmet } from "react-helmet";

export default class Construction extends React.Component {
  render() {
    return (
      <Container className="my-5 py-5 text-center" style={{ height: "75vh" }}>
        <Helmet>
          <title>Under construction | UP Iris</title>
        </Helmet>
        <Icon fas icon="tools" className="pb-4" size="5x" />
        <Type tag="h1" variant="h4">
          This page is under construction. Come back next time!
        </Type>
      </Container>
    );
  }
}
