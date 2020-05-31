import React, { Component } from 'react';
import {
    MDBCard as Card,
    MDBBtn as Button,
} from 'mdbreact';
import { LoremIpsum as Lipsum } from 'react-lorem-ipsum';


export default class Home extends Component {
    render() {
        return (
            <Card
                className='card-image cover-photo'
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/kdphotography-assets/image/upload/v1/upirisorg/web/static/web/media/cover-wide.gif')"
                }}>
                <div className='text-white text-center rgba-stylish-strong py-5 px-4 pt-5'>
                    <div className='py-5 pt-5 mt-5'>
                        <h2 className="card-title h2 my-4 py-2"><Lipsum p={1} avgWordsPerSentence={4} avgSentencesPerParagraph={1} /></h2>
                        <div className="container">
                            <p className="mb-4 pb-2 px-md-5 mx-md-5"><Lipsum p={1} /></p>
                        </div>
                        <Button className="peach-gradient"><i className="fas fa-clone left"></i>&nbsp; View gallery</Button>
                    </div>
                </div>
            </Card>
        );
    }
}
