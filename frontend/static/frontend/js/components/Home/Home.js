import React, { Component } from "react";
import {
  MDBCard as Card,
  MDBContainer as Container,
  MDBRow as Row,
  MDBCol as Col,
  MDBTypography as Type,
  MDBBtn as Button,
  MDBIcon as Icon,
} from "mdbreact";
import { LoremIpsum as Lipsum } from "react-lorem-ipsum";
import { Helmet } from "react-helmet";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>UP Iris</title>
        </Helmet>
        <Card
          className="card-image cover-photo"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/kdphotography-assets/image/upload/v1/upirisorg/web/static/web/media/cover-wide.gif')",
          }}
        >
          <div className="text-white text-center rgba-stylish-strong py-5 px-4 pt-5">
            <div className="py-5 pt-5 mt-5">
              <h2 className="card-title h2 my-4 py-2">
                <Lipsum p={1} avgWordsPerSentence={4} avgSentencesPerParagraph={1} startWithLoremIpsum={false} />
              </h2>
              <div className="container">
                <div className="mb-4 pb-2 px-md-5 mx-md-5">
                  <Lipsum p={1} startWithLoremIpsum={false} />
                </div>
              </div>
              <Link to="/gallery" className="btn deep-orange">
                <Icon fas icon="clone" className="left" />
                &nbsp; View gallery
              </Link>
            </div>
          </div>
        </Card>

        <Container fluid className="p-5">
          <Row>
            <Col className="ml-md-5">
              <Type tag="h2" variant="h1-responsive">
                <Lipsum p={1} avgWordsPerSentence={4} avgSentencesPerParagraph={1} startWithLoremIpsum={false} />
              </Type>
              <Button color="deep-orange" className="ml-0 my-4">
                <Icon fas icon="clone" className="left" />
                &nbsp; View gallery
              </Button>
            </Col>
            <Col className="mr-md-5">
              <Lipsum p={1} startWithLoremIpsum={false} />
            </Col>
          </Row>
        </Container>

        <Container fluid className="blue darken-4 py-5 text-white">
          <Row className="pb-5 mb-5">
            <Col className="ml-md-5">
              <Image
                cloudName="kdphotography-assets"
                publicId="upirisorg/web/static/web/media/private/index-block1"
                secure
                responsive
                responsiveUseBreakpoints
                width="auto"
                dpr="auto"
                crop="scale"
                style={{
                  maxWidth: "90%",
                  height: "auto",
                }}
              />
            </Col>
            <Col className="mr-md-5">
              <Type tag="h2" variant="h1-responsive">
                <Lipsum p={1} avgWordsPerSentence={4} avgSentencesPerParagraph={1} startWithLoremIpsum={false} />
              </Type>
              <p className="mt-5">
                <Lipsum p={1} startWithLoremIpsum={false} />
              </p>
              <Button color="deep-orange" className="ml-0 my-4">
                <Icon fas icon="clone" className="left" />
                &nbsp; View gallery
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="ml-md-5">
              <Type tag="h2" variant="h1-responsive">
                <Lipsum p={1} avgWordsPerSentence={4} avgSentencesPerParagraph={1} startWithLoremIpsum={false} />
              </Type>
              <p className="mt-5">
                <Lipsum p={1} startWithLoremIpsum={false} />
              </p>
              <Button color="deep-orange" className="ml-0 my-4">
                <Icon fas icon="clone" className="left" />
                &nbsp; View gallery
              </Button>
            </Col>
            <Col className="ml-md-5">
              <Image
                cloudName="kdphotography-assets"
                publicId="upirisorg/web/static/web/media/private/index-block2"
                secure
                responsive
                responsiveUseBreakpoints
                width="auto"
                dpr="auto"
                crop="scale"
                style={{
                  maxWidth: "90%",
                  height: "auto",
                }}
              />
            </Col>
          </Row>
        </Container>

        <Container fluid className="p-5">
          <blockquote className="blockquote">
            <Type tag="h2" variant="h2-responsive" className="mb-0 mr-md-5 pr-md-5">
              <Lipsum p={1} startWithLoremIpsum={false} />
            </Type>
            <footer className="blockquote-footer mb-3">
              Some wise guy, <cite>Some New York Times bestseller</cite>
            </footer>
          </blockquote>
          <div className="text-center cl">
            <Image
              cloudName="kdphotography-assets"
              publicId="upirisorg/web/static/web/media/private/index-block3"
              secure
              responsive
              responsiveUseBreakpoints
              width="auto"
              dpr="auto"
              crop="scale"
              style={{
                maxWidth: "90%",
                height: "auto",
              }}
            />
          </div>
        </Container>
      </div>
    );
  }
}
