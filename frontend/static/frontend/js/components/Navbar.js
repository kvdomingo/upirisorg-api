import React, { Component } from "react";
import {
  MDBNavbar as Navbar,
  MDBNavbarBrand as NavbarBrand,
  MDBNavbarNav as NavbarNav,
  MDBNavLink as NavLink,
  MDBNavItem as NavItem,
  MDBNavbarToggler as NavbarToggler,
  MDBCollapse as Collapse,
} from "mdbreact";
import { Image } from "cloudinary-react";
import { Link, withRouter } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      navAlpha: 0,
      navDark: true,
      navFixed: "fixed-top",
      navLogo: "-white",
    };
  }

  componentDidMount() {
    this.navHandler();
    document.addEventListener("scroll", this.navHandler);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.navHandler();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.navHandler);
  }

  navHandler = () => {
    if (this.props.location.pathname === "/") {
      if (window.scrollY > 30) {
        this.setState({
          navAlpha: 1,
          navDark: false,
          navFixed: "fixed-top",
          navLogo: "",
        });
      } else {
        this.setState({
          navAlpha: 0,
          navDark: true,
          navFixed: "fixed-top",
          navLogo: "-white",
        });
      }
    } else {
      this.setState({
        navAlpha: 1,
        navDark: false,
        navFixed: "",
        navLogo: "",
      });
    }
  };

  toggleCollapse = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <Navbar
        light={!this.state.navDark}
        dark={this.state.navDark}
        expand="md"
        className={`kill-shadow ${this.state.navFixed}`}
        style={{
          background: `rgba(255, 255, 255, ${this.state.navAlpha})`,
          transition: "background 300ms linear",
        }}
      >
        <NavbarBrand>
          <Link to="/">
            <Image
              cloudName="kdphotography-assets"
              publicId={`upirisorg/web/static/web/media/private/logo${this.state.navLogo}`}
              secure
              width={100}
            />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleCollapse} />
        <Collapse id="collapse" isOpen={this.state.isOpen} navbar>
          <NavbarNav className="text-uppercase" right>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/members">Members</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/alumni">Alumni</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/gallery">Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
