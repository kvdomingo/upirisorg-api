import React from "react";
import {
  MDBFooter as Footer,
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBTypography as Type,
  MDBIcon as Icon,
} from "mdbreact";
import { Link } from "react-router-dom";

export default class PageFooter extends React.Component {
  render() {
    let now = new Date();
    return (
      <Footer className="font-small blue darken-4 pt-4">
        <Container className="text-center text-md-left">
          <Row>
            <Col size={8} className="mt-md-0 mt-3">
              <Type tag="h2" variant="h2-responsive" className="text-uppercase">
                UP Iris Photography
              </Type>
              <Type tag="h5">#BeIRISistible</Type>
            </Col>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <Col className="mb-md-0 mb-3">
              <Type tag="h5" className="text-uppercase">
                About
              </Type>
              <ul className="list-unstyled">
                <li>
                  <Link to="/about">Our Mission</Link>
                </li>
                <li>
                  <Link to="/about">Our Vision</Link>
                </li>
                <li>
                  <Link to="/about">Our Principles</Link>
                </li>
                <li>
                  <Link to="/about">Our Objectives</Link>
                </li>
              </ul>
            </Col>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <Col className="mb-md-0 mb-3">
              <Type tag="h5" className="text-uppercase">
                Links
              </Type>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.facebook.com/upiris" target="_blank" rel="noopener noreferrer">
                    <Icon fab icon="facebook-square" /> /upiris
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/upirisofficial" target="_blank" rel="noopener noreferrer">
                    <Icon fab icon="twitter" /> @upirisofficial
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/upirisofficial" target="_blank" rel="noopener noreferrer">
                    <Icon fab icon="instagram" /> @upirisofficial
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <p className="my-0">
            &copy; {now.getFullYear()} UP IRIS. This awesome website powered by{" "}
            <a href="https://kvdomingo.xyz" target="_blank" rel="noopener noreferrer">
              Kenneth V Domingo
            </a>
            .
          </p>
        </div>
      </Footer>
    );
  }
}
