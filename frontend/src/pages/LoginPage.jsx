import React from 'react'
import LoginForm from '../components/LoginForm'

const LoginPage = ({ setToken, token }) => {

    if(token) {
        return (
            <div className='h-[92vh] flex flex-col justify-center'>
                <h1 className='text-center font-bold text-3xl'>Welcome {JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).username}</h1>
            </div>
        )
    }

  return (
    <div className='h-[92vh] flex flex-col justify-center'>
        <LoginForm  setToken={setToken} />
    </div>
  )
}

export default LoginPage