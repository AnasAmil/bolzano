import React from 'react'
import { Container, SimpleGrid } from'@mantine/core'

import RestaurantCard from './RestaurantCard';



const mockData = [
    {
        name: "Rick's Café",
        address: '248 Bd Sour Jdid',
        phone: '05222-74207',
        city: 'Casablanca',
        image: 'https://static01.nyt.com/images/2018/07/02/world/00rickscafe-dispatch1/merlin_139818486_910435ea-c418-4418-8bfa-f28bb0a446ce-superJumbo.jpg',
        rating: 4.2
    },
    {
        name: 'La Sqala',
        address: 'Bd des Almohades',
        phone: '05222-60960',
        city: 'Casablanca',
        image: 'https://api.madein.city/img/places/7/14614/5d63a9472caa3993675902.jpg',
        rating: 4.2
    },
    {
        name: 'SKY28',
        address: 'Bd Mohamed Zerktouni',
        phone: '05229-78000',
        city: 'Casablanca',
        image: 'https://recettechirurgicale.org/wp-content/uploads/2019/05/WhatsApp-Image-2019-05-29-at-19.50.27-860x485.jpeg',
        rating: 4.1
    },
    {
        name: 'Nori Sushi',
        address: "8 Rue d'Ifrane",
        phone: '05223-95555',
        city: 'Casablanca',
        image: 'https://d2fdt3nym3n14p.cloudfront.net/venue/3238/gallery/10167/conversions/84787452_106505234267187_2240735398110167040_o-big.jpg',
        rating: 4.1
    }
]



const RestaurantsGrid = () => {
    const cards = mockData.map((card) => (
        <RestaurantCard key={card.name} card={card}/>
    ))

  return (
    <Container my='md' maw={1200}>
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