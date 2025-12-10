import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/featured-posts";

function HomePage(){
  return (
    <Fragment>
     <Hero />
     <FeaturedPost />
    </Fragment>
  );
}

export default HomePage;