import React from "react";
import { Banner } from "../comps/Banner";
import { Categories } from "../comps/Categories";
import Footer from "../comps/Footer";
import Newsletter from "../comps/Newsletter";
import Navbar from "../comps/Navbar";
import Products from "../comps/Products";
import { Slider } from "../comps/Slider";

const Home = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
