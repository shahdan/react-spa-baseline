import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>
        <NavBar location={location}/>
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>React SPA Baseline</h1>
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
