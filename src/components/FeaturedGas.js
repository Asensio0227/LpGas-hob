import React from 'react'
import Title from './Title'
import Gallery from './Gallery'
import { useGlobalContext } from '../context'
import Loading from './Loading'

const FeaturedGas = () => {
  const { isLoading, featured } = useGlobalContext();

  return (
    <article className="Featured-gas">
      <Title title="Featured Gas installation" />
      <div className="featured-gas-center">
        {
          isLoading ? (
            <Loading/>
          ) : (
              featured.map((items) => {
            return <Gallery key={items.id} items={items}/>
          })
          )
        }
      </div>
    </article>
  )
}

export default FeaturedGas
