import React from 'react'
import GalleryList from './GalleryList';
import { useGlobalContext } from '../context';
import Loading from './Loading';

const GalleryContainer = () => {
  const { isLoading,  gas } = useGlobalContext();

  if (isLoading) {
    return <Loading/>
  }


  return (
    <>
      <GalleryList gas={gas}/>
    </>
  )
}

export default GalleryContainer