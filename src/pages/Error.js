import React from 'react'
import { Hero, Banner } from "../components"
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <>
      <Hero>
        <Banner
          title="404"
          subTitle="page not found"
        >
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
    </>
  )
}

export default Error
