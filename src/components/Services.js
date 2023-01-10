import React, {useState} from 'react'
import Title from './Title';
import { services } from "../data";

const Services = () => {
  const [list, setList] = useState(services);

  return (
    <section className='services'>
      <Title title="services"/>
      <p>
        Welcome to The LpGas Installers, your go-to source for affordable and professional gas installations services in Johannesburg. With more than 10 years of experience and expertise in the industry, we are equipped to handle a wide range of residential gas installations for a variety of gas-powered appliances, including,
      </p>
      <ul>
        <li>
          Gas hobs, Gas Stoves, Gas fireplaces,  Gas geysers/Water heater
        </li>
        <li>
          A Certificate of conformity (CoC) will be issued with each and every new gas installation.
        </li>
      </ul>
      <div className="services-center">
        {
          list.map((item, index) => {
            const { icon, title, info } = item;
            return (
              <div className = "service" key={index}>
                <span>{icon}</span>
                <h6>{title}</h6>
                <p>{info}</p>
              </div>
          )
          })
        }
      </div>
        <p>
          A list of basic gas Installation kits we offer can be found below.
        </p>
    </section>
  )
}

export default Services
