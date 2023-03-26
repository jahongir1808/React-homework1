import React, { Component } from "react";
import Navbar from "./../components/navbar2";
import Carousel from "./../components/carousel";
import Company from "./../components/company";
import Sertificate from "../components/sertificate";
import OurProduction from "../components/ourProduction";
import About from "./../components/about";

export default class Homework extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main>
          <Carousel />
          <Company />
          <Sertificate />
          <OurProduction />
          <About />
        </main>
      </>
    );
  }
}
