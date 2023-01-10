import React from 'react';
import Gallery from './Gallery';

const GalleryList = ({ gas }) => {
  if (gas.length === 0) {
    <div className="empty-search">
      <h3>
        unfortunately no gas matched your search criteria.
      </h3>
    </div>
  }
  
  return (
    <section className="gasList">
      <div className="gasList-center">
        {
          gas.map((items) => {
            return <Gallery key={items.id} items={items}/>
          })
        }
      </div>
    </section>
  )
}

export default GalleryList