import React from 'react'
import RestaurantsGrid from '../components/RestaurantsGrid'

const HomePage = ( {token} ) => {
  return (
    <RestaurantsGrid token={token} />
  )
}

export default HomePage