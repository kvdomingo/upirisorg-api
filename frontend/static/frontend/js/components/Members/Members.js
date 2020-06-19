import React, { Component } from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import {
    MDBCard as Card,
    MDBRow as Row,
    MDBCol as Col,
    MDBTypography as Type,
    MDBCardBody as CardBody,
    MDBContainer as Container,
} from 'mdbreact';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import Loading from '../Loading';
import './Member.css';


const styles = {
    killShadow: {
        boxShadow: 'none',
        border: '1px solid #ddd',
    },
};

const client = new ApolloClient({
    uri: `${window.location.origin}/api/`,
});

export default class Members extends Component {
    constructor(props) {
        super(props);
        this.state = {
            execomm: [],
            loading: true,
        };
    }

    fragments = {
        membersPageDetails: gql`
            fragment membersPageDetails on MemberType {
                id
                slug
                firstName
                lastName
                pictureUrl
                year
                course
            }
        `
    }

    componentDidMount() {
        client
            .query({
                query: gql`
                    {
                        president: member(id: 18) { ...membersPageDetails },
                        vpExte: member(id: 36) { ...membersPageDetails },
                        vpInte: member(id: 35) { ...membersPageDetails },
                        secgen: member(id: 15) { ...membersPageDetails },
                        promos: member(id: 8) { ...membersPageDetails },
                        log: member(id: 5) { ...membersPageDetails },
                        fin: member(id: 27) { ...membersPageDetails },
                        exteComm: committeeMembers(committee: "E") { ...membersPageDetails },
                        inteComm: committeeMembers(committee: "I") { ...membersPageDetails },
                        promosComm: committeeMembers(committee: "P") { ...membersPageDetails },
                        logComm: committeeMembers(committee: "L") { ...membersPageDetails },
                        finComm: committeeMembers(committee: "F") { ...membersPageDetails }
                    }
                    ${this.fragments.membersPageDetails}
                `
            })
            .then(res => this.setState({ ...res }));
    }

    render() {
        let ecOrder = ['president', 'vpExte', 'vpInte', 'secgen', 'promos', 'log', 'fin'],
            ecFull = {
                president: 'President',
                vpExte: 'Vice President for External Affairs',
                vpInte: 'Vice President for Internal Affairs',
                secgen: 'Secretary-General',
                promos: 'Executive Officer for Promotions and Documentation',
                log: 'Executive Officer for Logistics',
                fin: 'Chancellor of the Exchequer'
            },
            commOrder = ['exteComm', 'inteComm', 'promosComm', 'logComm', 'finComm'],
            commFull = {
                exteComm: 'Externals Committee',
                inteComm: 'Internals Committee',
                promosComm: 'Promotions and Documentation Committee',
                logComm: 'Logistics Committee',
                finComm: 'Finance Committee'
            };

        if (this.state.loading) return <Loading />
        else return (
            <div>
                <Helmet>
                    <title>Members | UP Iris</title>
                </Helmet>
                <Card className='card-image cover-photo'>
                    <div className='text-white text-center rgba-stylish-strong py-5 px-4'>
                        <Type tag='h1' className="card-title h2 my-4 py-2 text-uppercase">Members</Type>
                    </div>
                </Card>
                <hr className='clearfix w-75 my-5' />
                <Container fluid className='my-5'>
                    <Type tag='h2' className='text-uppercase text-center mb-5'>Executive Committee</Type>
                    <Row className='row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 '>
                        {ecOrder.map((ec, i) => (
                            <Col key={this.state.data[ec].id} className='mb-4 d-flex align-items-stretch'>
                                <Card style={styles.killShadow}>
                                    <div className='view overlay'>
                                        <Image
                                            className='card-img-top'
                                            cloudName='kdphotography-assets'
                                            publicId={`upirisorg/web/static/web/media/members/${this.state.data[ec].pictureUrl}`}
                                            secure
                                            responsive
                                            responsiveUseBreakpoints
                                            dpr='auto'
                                            width='auto'
                                            aspectRatio={0.8}
                                            crop='fill'
                                            gravity='face'
                                            />
                                        <Link to={`/members/${this.state.data[ec].slug}`}>
                                            <div className='mask rgba-white-slight' />
                                        </Link>
                                    </div>
                                    <CardBody>
                                        <Type tag='h3' variant='h4-responsive'>{this.state.data[ec].firstName} {this.state.data[ec].lastName}</Type>
                                        <p className='card-text'>
                                            <b>{ecFull[ec]}</b><br />
                                            {this.state.data[ec].course
                                                ? this.state.data[ec].year
                                                    ? `${this.state.data[ec].year} - ${this.state.data[ec].course}`
                                                    : this.state.data[ec].course
                                                : null
                                            }
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <hr className='clearfix w-75 my-5' />

                    {commOrder.map((comm, i) => (
                        <React.Fragment key={i}>
                            <Type tag='h2' className='text-uppercase text-center mb-5'>{commFull[comm]}</Type>
                            <Row className='row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 '>
                                {this.state.data[comm].map((mem, i) => (
                                    <Col key={this.state.data[comm][i].id} className='mb-4 d-flex align-items-stretch'>
                                        <Card style={styles.killShadow}>
                                            <div className='view overlay'>
                                                <Image
                                                    className='card-img-top'
                                                    cloudName='kdphotography-assets'
                                                    publicId={`upirisorg/web/static/web/media/members/${this.state.data[comm][i].pictureUrl}`}
                                                    secure
                                                    responsive
                                                    responsiveUseBreakpoints
                                                    dpr='auto'
                                                    width='auto'
                                                    aspectRatio={0.8}
                                                    crop='fill'
                                                    gravity='face'
                                                    />
                                                <Link to={`/members/${this.state.data[comm][i].slug}`}>
                                                    <div className='mask rgba-white-slight' />
                                                </Link>
                                            </div>
                                            <CardBody>
                                                <Type tag='h3' variant='h4-responsive'>{this.state.data[comm][i].firstName} {this.state.data[comm][i].lastName}</Type>
                                                <p className='card-text'>
                                                    {this.state.data[comm][i].course
                                                        ? this.state.data[comm][i].year
                                                            ? `${this.state.data[comm][i].year} - ${this.state.data[comm][i].course}`
                                                            : this.state.data[comm][i].course
                                                        : null
                                                    }
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                            <hr className='clearfix w-75 my-5' />
                        </React.Fragment>
                    ))}
                </Container>
            </div>
        );
    }
}
