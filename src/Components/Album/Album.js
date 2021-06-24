import React from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../Carousel'

const Album = () => {

  const params = useParams();



  return (
    <>
     <Carousel/> 
    </>
  )
}

export default Album
