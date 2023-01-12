import React,{useState,useEffect} from 'react'
import { StyledHero, Banner,GasImages } from "../components";
import { useParams, useNavigate,Link } from 'react-router-dom'
import defaultImg from "../images/default";
import { useGlobalContext } from '../context';
import styled from 'styled-components'

const SingleHob = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [defaultImage, setDefaultImage] = useState(defaultImg);
  const { getGas,isError } = useGlobalContext();
  const venom = getGas(id);
  
  useEffect(() => {
    getGas(id)
    // eslint-disable-next-line 
  }, [id]);
  
  useEffect(() => {
    if (isError) {
      setTimeout(() => {
       navigate('/')
     },4000)
   }
  }, [navigate,isError]);
  
  if (!venom) {
    return (
      <section className="error">
        <h3>
          No such gas installation found
        </h3>
        <Link
          to="/gallery"
          className="btn-primary"
        >
          back to gallery
        </Link>
      </section>
    )
  }
  

  const {
    text,
    images,
    name
  } = venom;
  console.log(images)
  const [main, ...defaultImages] = images;

  return (
    <Wrapper>
      <StyledHero img={main || defaultImage}>
        <Banner
          title="Gas"
        >
          <Link
            to="/gallery"
            className="btn-primary"
          >
            back to gallery
          </Link>
        </Banner>
      </StyledHero>
      <article className="section section-center page">

      <section className="product-center">
        <GasImages images={images} />
        <div className="">
          <article className="desc">
            <h3>details</h3>
            <h5>{name}</h5>
            <p className="desc">
              {text}
            </p>
          </article>
        </div>
      </section>
      </article>
    </Wrapper>
  )
};


const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
`;


export default SingleHob
