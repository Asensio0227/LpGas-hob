import React from 'react'
import Title from './Title'
import { useGlobalContext } from "../context";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const GalleryFilter = ({gas}) => {
  const { 
    type,
    handleChange
  } = useGlobalContext();

  let types = getUnique(gas, type);
  types = ["all", ...types];
  types.map((item, index) => {
    <option key={index} value={item}>
      {item}
    </option>
  })

  return (
    <section className="filter-container">
      <Title title="Search for your installation kit" />
      <form className="filter-gas">
        <div className="form-group">
          <label htmlFor="type">
            gas type
          </label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
            className="form-control"
          >
            {types}
          </select>
        </div>
      </form>
    </section>
  )
}

export default GalleryFilter