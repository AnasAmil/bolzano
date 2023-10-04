import React, {useEffect, useState} from 'react'
import { Container, SimpleGrid } from'@mantine/core'
import axios from 'axios'
import RestaurantCard from './RestaurantCard';

const RestaurantsGrid = ({token}) => {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
       const fetchRestaurants = async () => {
            await axios.get('http://127.0.0.1:8000/api/restaurants/')
            .then((res) => {
                setRestaurants(res.data)
            }).catch((err) => {
                console.log(err)
            })
       }

       fetchRestaurants()
    }, [])
    
      
    const cards = restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
    ))

  return (
    <Container my='md' maw={1200} py='20vh'>
        <SimpleGrid 
            cols={4}
            breakpoints={[
                { maxWidth: '62rem', cols: 3, spacing: 'md' },
                { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                { maxWidth: '36rem', cols: 1, spacing: 'sm' },
              ]}
        >
            {cards}
        </SimpleGrid>
    </Container>
  )
}

export default RestaurantsGrid