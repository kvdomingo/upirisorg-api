import React, { Component } from "react";
import ApolloClient, { gql } from "apollo-boost";
import {
  MDBCard as Card,
  MDBRow as Row,
  MDBCol as Col,
  MDBTypography as Type,
  MDBCardBody as CardBody,
  MDBContainer as Container,
  MDBIcon as Icon,
} from "mdbreact";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";
import { Image } from "cloudinary-react";
import Masonry from "masonry-layout/masonry";
import imagesLoaded from "imagesloaded/imagesloaded";
import { SRLWrapper } from "simple-react-lightbox";
import Loading from "../Loading";
import "./Member.css";

const client = new ApolloClient({
  uri: `${window.location.origin}/api/`,
});

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: true,
    };
  }

  fragments = {
    memberDetails: gql`
      fragment memberDetails on MemberType {
        id
        slug
        firstName
        lastName
        pictureUrl
        year
        course
        facebook
        twitter
        instagram
        website
      }
    `,
  };

  componentDidMount() {
    client
      .query({
        query: gql`
                    {
                        member(slug: "${this.props.match.params.memberSlug}") {
                            ...memberDetails
                        }
                    }
                    ${this.fragments.memberDetails}
                `,
      })
      .then(res => {
        this.setState({ ...res });
      });

    this.handlePhotos();
  }

  handlePhotos = () => {
    let { memberSlug } = this.props.match.params;
    fetch(`/api/member/${memberSlug}`)
      .then(res => res.json())
      .then(images => {
        this.setState({ images: images.data });
        const grid = document.querySelector(".grid");
        const msnry = new Masonry(grid, {
          itemSelector: ".grid-item",
          columnWidth: ".grid-sizer",
          percentPosition: true,
        });
        const imgLoad = new imagesLoaded(grid);
        imgLoad.on("progress", () => {
          msnry.layout();
          this.setState({ isLoaded: true });
        });
        imgLoad.on("done", () => {
          msnry.layout();
        });
        imgLoad.on("always", () => {
          msnry.layout();
        });
      });
  };

  render() {
    if (this.state.loading) return <Loading />;
    else
      return (
        <Container fluid>
          <Helmet>
            <title>
              {this.state.data.member.firstName} {this.state.data.member.lastName} | Members | UP Iris
            </title>
          </Helmet>
          <Row>
            <Col md="3">
              <a href="/members" className="btn indigo text-light btn-sm">
                <i className="material-icons left">keyboard_arrow_left</i>
              </a>
              <div
                className="my-4 d-flex align-items-stretch"
                style={{
                  position: "sticky",
                  top: "20px",
                }}
              >
                <Card>
                  <div className="view overlay">
                    <Image
                      cloudName="kdphotography-assets"
                      className="card-img-top"
                      publicId={`upirisorg/web/static/web/media/members/${this.state.data.member.pictureUrl}`}
                      secure
                      responsive
                      responsiveUseBreakpoints
                      dpr="auto"
                      width="auto"
                      aspectRatio={0.8}
                      crop="fill"
                      gravity="face"
                    />
                    <div className="mask rgba-white-slight" />
                  </div>
                  <CardBody>
                    <Type tag="h1" variant="h4-responsive">
                      {this.state.data.member.firstName} {this.state.data.member.lastName}
                    </Type>
                    <p className="card-text">
                      {this.state.data.member.course
                        ? this.state.data.member.year
                          ? `${this.state.data.member.year} - ${this.state.data.member.course}`
                          : this.state.data.member.course
                        : null}
                      <ul className="list-unstyled mt-2">
                        {this.state.data.member.facebook ? (
                          <li>
                            <a href={`https://www.facebook.com/${this.state.data.member.facebook}`}>
                              <Icon fab icon="facebook-square" className="mr-1" />/{this.state.data.member.facebook}
                            </a>
                          </li>
                        ) : null}
                        {this.state.data.member.twitter ? (
                          <li>
                            <a href={`https://www.twitter.com/${this.state.data.member.twitter}`}>
                              <Icon fab icon="twitter" className="mr-1" />@{this.state.data.member.twitter}
                            </a>
                          </li>
                        ) : null}
                        {this.state.data.member.instagram ? (
                          <li>
                            <a href={`https://www.instagram.com/${this.state.data.member.instagram}`}>
                              <Icon fab icon="instagram" className="mr-1" />@{this.state.data.member.instagram}
                            </a>
                          </li>
                        ) : null}
                        {this.state.data.member.website ? (
                          <li>
                            <a href={this.state.data.member.website}>
                              <Icon fas icon="globe" className="mr-1" />
                              {this.state.data.member.firstName} {this.state.data.member.lastName} Photography
                            </a>
                          </li>
                        ) : null}
                      </ul>
                    </p>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col md="9" className="pl-md-5 mb-5">
              <SRLWrapper>
                <div className="grid text-center">
                  <div className="grid-sizer" />
                  {this.state.images.map((pid, i) => (
                    <div className="grid-item px-1 py-0 mx-0" key={i}>
                      <Image
                        cloudName="kdphotography-assets"
                        className="img-fluid mb-2"
                        publicId={pid}
                        secure
                        responsive
                        responsiveUseBreakpoints
                        width="auto"
                        dpr="auto"
                        crop="scale"
                      />
                    </div>
                  ))}
                </div>
              </SRLWrapper>
            </Col>
          </Row>
        </Container>
      );
  }
}

export default withRouter(Member);
