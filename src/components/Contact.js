import React from 'react';
import styled from 'styled-components';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <Wrapper >
      <div className='section section-center page-100'>
        <h3>Contact us
        </h3>
        <div className="content">
          <p>Thank you for considering The LpGas installer for all of your gas-related needs. We are here to help with all of your gas installation, repair, and product needs.

            If you have any questions or need assistance, please don't hesitate to contact us. Here are a few ways to get in touch:
          <br/>
          <a href="tel:+27767510000">
                <AiOutlinePhone />
              <span>0633033071</span>
            </a>
            <br/>
          <a href="http://wa.me/0633033071" target="_blank">
              <BsWhatsapp />
              <span>whatsApp us</span>
        </a>
          </p>
          <form
            action="https://formspree.io/f/xoqzqrlb"
            method="POST"
            className="contact-form"
          >
            <input
              type="email"
              placeholder='enter email'
              className="form-input"
              name='_replyto'
            />
            <button className="submit-btn" type='submit'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
margin: 3rem auto;
padding: 5rem 0;
h3 {
  text-transform: none;
}
p {
  line-height: 2;
  max-width: 45em;
  color: var(--clr-grey-5);
  a {
    color: var(--clr-lime);
    animation: hamburger_puls 3s ease-in-out infinite;
    span {
      margin-left: 1rem;
    }
    &:hover{
      color: var(--clr-black);
      transition: var(--transition);
    }
  }
}
.contact-form {
  width: 90vw;
  max-width: 500px;
  display: grid;
  grid-template-columns: 1fr auto;
}
.form-input,
.submit-btn {
  font-size: 1rem;
  padding: .5rem 1rem;
  border: 2px solid var(clr-lime);
}
.form-input {
  border-right: none;
  color: var(--clr-grey-3);
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}
.submit-btn {
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}
.form-input::placeholder {
  color: var(--clr-black);
  text-transform: capitalize;
}
.submit-btn {
  background: var(--clr-primary-5);
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  cursor: pointer;
  transition:var(--transition);
  color: var(--clr-black);
}
.submit-btn:hover {
  color: var(--clr-white);
}
@media (min-width: 776px){
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 8rem;
    margin-top: 2rem;
  }
  p {
    margin-bottom: 0;
  }
}
@media (min-width: 1280px){
  padding: 15rem 0;
}
@keyframes hamburger_puls {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 2;
    transform: scale(1.4);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
`;

export default Contact


