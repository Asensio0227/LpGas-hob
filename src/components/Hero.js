import React from 'react'

const Hero = ({hero,children}) => {
  return (
    <section className={hero}>
      {children}
    </section>
  )
}

Hero.defaultProps = {
  hero:"defaultHero"
}

export default Hero