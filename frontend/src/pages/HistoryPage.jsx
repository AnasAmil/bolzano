import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm'
import { Container, SimpleGrid, Text } from'@mantine/core'
import axios from 'axios'
import ReserveCard from '../components/ReserveCard'

const HistoryPage = ({setToken, token}) => {

  const [reservations, setReservations] = useState([])

  useEffect(() => {
    const fetchReservations = async () => {
         await axios.get('http://127.0.0.1:8000/api/reservations/')
         .then((res) => {
             setReservations(res.data)
         }).catch((err) => {
             console.log(err)
         })
    }

    fetchReservations()
 }, [token])

  const cards = reservations.filter(reservation => JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).username === reservation.customer_name : '').map(filtredReservation => (
    <ReserveCard key={filtredReservation.id} reservation={filtredReservation} token={token} /> 
  ))


  if(!token) {
    return (
      <div className='py-[30vh]'>
        <LoginForm  setToken={setToken} />
      </div>
    )
  }

  return (
    <Container my='md' maw={1200} py='10vh'>
      <Text className='text-center font-bold text-xl pb-4'>Reservation History</Text>
      <SimpleGrid
        cols={1}
      >
        {cards}
      </SimpleGrid>
    </Container>
  )
}

export default HistoryPage