import React, { Component } from "react";
import { MDBContainer as Container, MDBTypography as Type, MDBIcon as Icon } from "mdbreact";
import { Helmet } from "react-helmet";

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container className="my-5">
        <Helmet>
          <title>Contact | UP Iris</title>
        </Helmet>

        <Type tag="h1" variant="display-4 mb-4">
          Contact us
        </Type>
        <a href="https://facebook.com/upiris">
          <Icon fab icon="facebook" className="mr-3 text-primary" size="3x" />
        </a>
        <a href="https://m.me/upiris">
          <Icon fab icon="facebook-messenger" className="mr-3 text-primary" size="3x" />
        </a>
        <a href="https://twitter.com/upirisofficial">
          <Icon fab icon="twitter" className="mr-3 text-primary" size="3x" />
        </a>
        <a href="https://instagram.com/upirisofficial">
          <Icon fab icon="instagram" className="mr-3 text-primary" size="3x" />
        </a>

        <form
          action="mailto:upiris.org@gmail.com"
          className="my-5"
          method="post"
          encType="text/plain"
          name="Contact Us"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="form-control"
              value={this.state.message}
              onChange={this.handleChange}
              required
            />
          </div>
          <input type="submit" value="Submit" name="submit" className="btn deep-orange text-white ml-0" />
        </form>
      </Container>
    );
  }
}
