import React from 'react'
import { Hero, Banner, GalleryContainer } from "../components";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <>
      <Hero hero="gasHero">
        <Banner
          title="our Installations"
        >
          <Link
            to="/"
            className='btn-primary'
          >
            return home
          </Link>
        </Banner>
      </Hero>
      <GalleryContainer/>
    </>
  )
}

export default Gallery
