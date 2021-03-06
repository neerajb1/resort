import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import StyledHero from "../components/StyledHero";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting from $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
