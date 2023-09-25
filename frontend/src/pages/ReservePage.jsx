import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import RestaurantBanner from '../components/RestaurantBanner'
import ReserveForm from '../components/ReserveForm'

const ReservePage = ({token, setToken}) => {

  const params = useParams()

  const [restaurant, setRestaurant] = useState({})

  useEffect(() => {
    const fetchRestaurantById = async () => {
      await axios.get(`http://127.0.0.1:8000/api/restaurants/${params.resId}/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        setRestaurant(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }

    fetchRestaurantById()
  }, [token])

  
  if(!token) {
    return (
      <div className='py-[30vh]'>
        <LoginForm  setToken={setToken} />
      </div>
    )
  }

  return (
    <>
      <RestaurantBanner image={restaurant.image} name={restaurant.name}/>
      <ReserveForm token={token} restaurantId={params.resId}/>
    </>
  )
}

export default ReservePage