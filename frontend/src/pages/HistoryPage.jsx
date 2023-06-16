import React from 'react'
import LoginForm from '../components/LoginForm'

const HistoryPage = ({setToken, token}) => {


  if(!token) {
    return <LoginForm setToken={setToken} />
  }

  return (
    <div>HistoryPage</div>
  )
}

export default HistoryPage