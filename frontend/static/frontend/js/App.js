import React, { Component, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Routes from "./components/Routes";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <main>
          <Suspense fallback={<Loading />}>
            <Routes />
          </Suspense>
        </main>
        <Footer />
      </Router>
    );
  }
}
