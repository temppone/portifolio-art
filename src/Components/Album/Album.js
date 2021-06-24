import React from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../Carousel'

const Album = () => {

  const params = useParams();
  console.log(params)

  return (
    <>
     <Carousel/> 
    </>
  )
}

export default Album
