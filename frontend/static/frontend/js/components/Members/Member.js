import React, { Component } from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import {
    MDBCard as Card,
    MDBRow as Row,
    MDBCol as Col,
    MDBTypography as Type,
    MDBCardBody as CardBody,
    MDBContainer as Container,
    MDBIcon as Icon,
} from 'mdbreact';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import Loading from '../Loading';


const client = new ApolloClient({
    uri: `${window.location.origin}/api/`,
});

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        `
    }

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
                `
            })
            .then(res => {
                console.log(res);
                this.setState({ ...res });
            });
    }

    render() {
        if (this.state.loading) return <Loading />
        else return (
            <Container fluid>
                <Row>
                    <Col md='3'>
                        <Link href='/members' className='btn indigo text-light btn-sm'>
                            <i className='material-icons left'>keyboard_arrow_left</i>
                        </Link>
                        <div className='my-4 d-flex align-items-stretch'>
                            <Card style={{
                                    position: 'sticky',
                                    top: 20,
                                }}>
                                <div className='view overlay'>
                                    <Image
                                        cloudName='kdphotography-assets'
                                        className='card-img-top'
                                        publicId={`upirisorg/web/static/web/media/members/${this.state.data.member.pictureUrl}`}
                                        secure
                                        responsive
                                        responsiveUseBreakpoints
                                        dpr='auto'
                                        width='auto'
                                        aspectRatio={0.8}
                                        crop='fill'
                                        gravity='face'
                                        />
                                    <div className='mask rgba-white-slight' />
                                </div>
                                <CardBody>
                                    <Type tag='h1' variant='h4-responsive'>
                                        {this.state.data.member.firstName} {this.state.data.member.lastName}
                                    </Type>
                                    <p className='card-text'>
                                        {this.state.data.member.course
                                            ? this.state.data.member.year
                                                ? `${this.state.data.member.year} - ${this.state.data.member.course}`
                                                : this.state.data.member.course
                                            : null
                                        }
                                        <ul className='list-unstyled mt-2'>
                                            {this.state.data.member.facebook
                                                ? <li>
                                                    <a href={`https://www.facebook.com/${this.state.data.member.facebook}`}>
                                                        <Icon fab icon='facebook-square' className='mr-1' />
                                                        /{this.state.data.member.facebook}
                                                    </a>
                                                </li>
                                                : null
                                            }
                                            {this.state.data.member.twitter
                                                ? <li>
                                                    <a href={`https://www.twitter.com/${this.state.data.member.twitter}`}>
                                                        <Icon fab icon='twitter' className='mr-1' />
                                                        @{this.state.data.member.twitter}
                                                    </a>
                                                </li>
                                                : null
                                            }
                                            {this.state.data.member.instagram
                                                ? <li>
                                                    <a href={`https://www.instagram.com/${this.state.data.member.instagram}`}>
                                                        <Icon fab icon='instagram' className='mr-1' />
                                                        @{this.state.data.member.instagram}
                                                    </a>
                                                </li>
                                                : null
                                            }
                                            {this.state.data.member.website
                                                ? <li>
                                                    <a href={this.state.data.member.website}>
                                                        <Icon fas icon='globe' className='mr-1' />
                                                        {this.state.data.member.firstName} {this.state.data.member.lastName} Photography
                                                    </a>
                                                </li>
                                                : null
                                            }
                                        </ul>
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col md='9' className='pl-md-5 mb-5'>
                        <div className='text-center'>
                            <Type tag='h2' variant='display-5'>No photos uploaded yet.</Type>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
