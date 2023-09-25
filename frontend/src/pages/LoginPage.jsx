import React from 'react'
import LoginForm from '../components/LoginForm'

const LoginPage = ({ setToken, token }) => {

    if(token) {
        return (
            <div className='py-[30vh]'>
                <h1 className='text-center font-bold text-3xl'>Welcome {JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).username}</h1>
            </div>
        )
    }

  return (
    <div className='py-[30vh]'>
        <LoginForm  setToken={setToken} />
    </div>
  )
}

export default LoginPage