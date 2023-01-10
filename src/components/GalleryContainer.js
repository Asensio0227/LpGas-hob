import React from 'react'
import GalleryFilter from './GalleryFilter';
import GalleryList from './GalleryList';
import { useGlobalContext } from '../context';
import Loading from './Loading';

const GalleryContainer = () => {
  const { isLoading, sorted, gas } = useGlobalContext();
  console.log(sorted);

  if (isLoading) {
    return <Loading/>
  }

  console.log(gas);

  return (
    <>
      <GalleryFilter gas={gas} />
      <GalleryList gas={sorted}/>
    </>
  )
}

export default GalleryContainer