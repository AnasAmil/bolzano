import React from 'react'
import { useParams } from 'react-router-dom'

const ReservePage = () => {

  const params = useParams()

  return (
    <div>{params.resName}</div>
  )
}

export default ReservePage