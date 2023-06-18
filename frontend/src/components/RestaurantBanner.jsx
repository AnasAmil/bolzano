import React from 'react'
import { Image } from '@mantine/core'

const RestaurantBanner = ({image, name}) => {
  return (
    <div className='relative'>
        <Image src={image} height='35vh'/>
        <h1 className='absolute top-[40%] right-[40%] text-white font-bold text-6xl'>{name}</h1>
      </div>
  )
}

export default RestaurantBanner