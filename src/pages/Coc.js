import React, { useState } from 'react'
import styled from "styled-components";
import { placement, lpGasRegulator } from '../data'
import { Placement } from "../components";

const Coc = () => {
  const [regulation, setRegulation] = useState(lpGasRegulator);
  const [place, setPlace] = useState(placement);

  console.log(regulation);
  console.log(place);

  return (
    <Wrapper>
      <section className="section section-center page">
        <div className="section-title">
          <h2>Lp Gas Regulation</h2>
          <div></div>
        </div>
        {
          place.map((items) => {
            
            return (
              <Placement key={items.id} {...items}/>
            )
          })
        }

        <div className="section-title">
          <h2>Cylinder Placement</h2>
          <div></div>
       </div>
        {
          regulation.map((items) => {
            const { id, name, img } = items;
            return (
              <article className='product-center' key={id}>
                <img src={img} alt={name} />
                <div>
                <h5>{name} </h5>
                </div>
              </article>
            )
          })
        }
       </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
.title {
  text-align: center;
}
.title .underline {
  width: 6rem;
  height: 0.25rem;
  background: #49a6e9;
  background: var(--clr-primary-5);
  margin-left: auto;
  margin-right: auto;
}
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  button {
    background:transparent;
    border: transparent;
    text-transform: uppercase;
    color: #28cab2;
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
`;


export default Coc
