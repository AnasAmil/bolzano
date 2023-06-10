import React from 'react'
import LoginForm from '../components/LoginForm'
import useToken from '../app/useToken'

const HistoryPage = () => {

  const {token, setToken} = useToken()

  if(!token) {
    return <LoginForm setToken={setToken} />
  }

  return (
    <div>HistoryPage</div>
  )
}

export default HistoryPage