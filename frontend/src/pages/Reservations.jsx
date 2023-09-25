import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TableCard from '../components/TableCard'
import { Container, SimpleGrid, Text } from'@mantine/core'
import AdminReserveCard from '../components/AdminReserveCard'

const Reservations = () => {

  const [reservations, setReservations] = useState([])

  useEffect(() => {
    const getReservations = async () => {
      await axios.get('http://127.0.0.1:8000/api/reservations/')
            .then((res) => {
              setReservations(res.data)
            }).catch((err) => {
              console.log(err)
            })
    }

    getReservations()
  }, [])
  

  const cards = reservations.map((reservation) => (
      <AdminReserveCard reservation={reservation}/>
  ))

  return (
    <Container my='md' maw={1200} py='10vh'>
      <Text className='font-bold pb-4'>Reservations</Text>
      <SimpleGrid 
          cols={2}

      >
          {cards}
      </SimpleGrid>
    </Container>
  )
}

export default Reservations