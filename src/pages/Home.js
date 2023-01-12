import React from 'react'
import {
  Hero,
  Banner,
  Services,
  FeaturedGas
} from '../components';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Certified"
          subTitle="LPG Gas Installers"
        >
          <Link to="/gallery" className="btn-primary">
            our gallery
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedGas />
      
    </>
  )
}

export default Home
