import React, { useState } from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import axios from 'axios';
import dayjs from 'dayjs';

const ReserveForm = ({token, restaurantId}) => {

  const [reservation, setReservation] = useState({
    restaurant: restaurantId,
    customer_name: '',
    table: '',
    guests: 0,
  })

  const [date, setDate] = useState(dayjs('2022-04-17'))
  const [time, setTime] = useState(dayjs('2022-04-17T15:30'))

  const handleSubmit = async (e) => {
    e.preventDefault()
    const dateString = date ?   date.toISOString().split('T')[0] : '';
    const timeString = time ? time.format('HH:mm') : '';
    setReservation({...reservation, date: dateString, time: timeString})
    
    await axios.post('http://127.0.0.1:8000/api/reservations/', reservation, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })

  }


  return (
    <form className='w-1/3 mx-auto mt-9' onSubmit={handleSubmit}>
        <h2 className='text-center text-lg font-bold p-5'>Reserve a Table</h2>
        <Box
          display='grid'
          gap='20px'
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        >
          <TextField 
            label='Customer Name'
            variant='outlined'
            sx={{
              gridColumn: 'span 4'
            }}
            value={reservation.customer_name}
            onChange={(e) => setReservation({...reservation, customer_name: e.target.value})}
          />
          <FormControl sx={{gridColumn: 'span 2'}}>
            <InputLabel>Table</InputLabel>
            <Select
              label='Table'
              value={reservation.table}
              onChange={(e) => setReservation({...reservation, table: e.target.value})}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>

          <TextField 
            label='Guests'
            type='number'
            sx={{
              gridColumn: 'span 2'
            }}
            value={reservation.guests}
            onChange={(e) => setReservation({...reservation, guests: e.target.value})}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']} sx={{ gridColumn: 'span 2' }}>
                  <DatePicker
                    label="Date"
                    value={date}
                    onChange={(value) => setDate(value)}
                  />
                </DemoContainer>

                <DemoContainer components={['TimePicker']} sx={{ gridColumn: 'span 2' }}>
                  <TimePicker
                    label="Time"
                    value={time}
                    onChange={(value) => setTime(value)}
                  />
                </DemoContainer>
          </LocalizationProvider>

        </Box>
        <Button variant="contained" type='submit'  sx={{width: '50%', mt:'20px', ml:'25%',  backgroundColor: '#272627', "&.MuiButtonBase-root:hover": {bgcolor: '#272627'}, boxShadow: 'none'}}>Reserve</Button>
    </form>
  )
}

export default ReserveForm