import React,{memo} from 'react'
import { Link } from "react-router-dom";
import defaultImg from "../images/gas-1"
import PropTypes from 'prop-types'

const Gallery = memo(({ items }) => {
  const { images, name, id } = items;
  return (
    <article className="gallery">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="featured products image" />
        <Link
          to={`/gallery/${id}`}
          className="btn-primary gas-link"
        >
          features
        </Link>
      </div>
      <p className="gas-info">
        {name}
      </p>
    </article>
  )
});

Gallery.propTypes = {
  venom: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  })
};

export default Gallery