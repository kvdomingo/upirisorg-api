import React from "react";
import { MDBCard as Card, MDBContainer as Container, MDBTypography as Type } from "mdbreact";
import { LoremIpsum as Lipsum } from "react-lorem-ipsum";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About | UP Iris</title>
      </Helmet>
      <Card className="card-image cover-photo">
        <div className="text-white text-center rgba-stylish-strong py-5 px-4">
          <Type tag="h1" className="card-title h2 my-4 py-2 text-uppercase">
            About
          </Type>
        </div>
      </Card>

      <Container>
        <hr className="clearfix w-100 my-5" />
      </Container>

      <Container className="my-5">
        <p>
          <b>UP Iris</b> is a university-wide photography organization based in the College of Fine Arts, University of
          the Philippines, Diliman, founded in November 20, 1998. We are a group of passionate and committed students
          from all over UP Diliman who share a love of photography. Through our knowledge, integrity, and sheer creative
          ability as an organization, we aim to be the authority on photography in the university.
        </p>
        <Lipsum p={5} avgWordsPerSentence={15} avgSentencesPerParagraph={10} startWithLoremIpsum={false} />
      </Container>
    </div>
  );
}
