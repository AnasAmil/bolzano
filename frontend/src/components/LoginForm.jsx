import { useState } from 'react'
import { TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios'

const LoginForm = ({ setToken }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [credentials, setCredentials] = useState({
      username: '',
      password: '',
    })

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLoginUser = async (e) => {
      e.preventDefault()
      await axios.post('http://127.0.0.1:8000/api/auth/', credentials)
                  .then((res) => {
                    setToken(res.data)
                  }).catch(e => {
                    console.log(e)
                  })

      await axios.get(`http://127.0.0.1:8000/api/accounts/${credentials.username}`)
        .then((res) => {
          localStorage.setItem('user', JSON.stringify(res.data))
        }).catch((err) => {
          console.log(err)
        })
    }

  return (
    <form className='flex flex-col w-1/4 gap-5 m-auto' onSubmit={handleLoginUser}>
        <TextField 
          label="Username" 
          variant="outlined"
          value={credentials.username}
          onChange={(e) => setCredentials({...credentials, username: e.target.value})}
        />
        <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          />
        </FormControl>

        <Button variant="contained" type='submit' sx={{width: '50%', mx: 'auto', backgroundColor: '#272627', "&.MuiButtonBase-root:hover": {bgcolor: '#272627'}, boxShadow: 'none'}}>Login</Button>
    </form>
  )
}


export default LoginForm