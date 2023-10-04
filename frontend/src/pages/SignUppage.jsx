import React from 'react'
import SignUpForm from '../components/SignUpForm'
import SnackbarProvider from 'react-simple-snackbar'

const SignUppage = () => {



  return (
    <div className='h-[92vh] flex flex-col justify-center'>
      <SnackbarProvider>
        <SignUpForm  />
      </SnackbarProvider>     
    </div>
  )
}

export default SignUppage