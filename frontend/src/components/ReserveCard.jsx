import React from 'react'
import { Card,  Text, Image, Group,  rem, createStyles } from'@mantine/core'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Button } from '@mui/material';


const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      display: 'flex',
      gap: '100px',
      alignItems: 'center'
    },
  
  
    label: {
      padding: theme.spacing.xs,
      lineHeight: 1,
      fontWeight: 700,
      fontSize: '15px',
      letterSpacing: rem(-0.25),
      
    },
  
    section: {
      padding: theme.spacing.md,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  
    icon: {
      marginRight: rem(5),
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },

    info: {
        paddingLeft: theme.spacing.xs,
        fontSize: '10px',
    },

    footer: {
        padding: theme.spacing.xs,
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px'
    },

    button: {
        backgroundColor: '#66948C !important',
        ...theme.fn.hover({
            backgroundColor: '#29948C !important'
        })
    }
  }));

const ReserveCard = ({reservation}) => {

    const {classes} = useStyles()

  return (
        <Card  withBorder className={classes.card} p={30}>
            <Card.Section>
              <Image src={reservation.restaurant.image} height={90}/>
            </Card.Section>
            <Card.Section>
              <Text className='font-bold text-lg'>{reservation.restaurant.name}</Text>
              <Text className='font-semibold text-base text-[#29948C]'>{reservation.restaurant.city}</Text>
            </Card.Section>
            <Card.Section className={classes.info}>
                <Group>
                    <LocationOnOutlinedIcon sx={{color: '#DEE2E6', width: '25px'}} />
                    <Text>{reservation.restaurant.address}</Text>
                </Group>
                <Group>
                    <LocalPhoneOutlinedIcon sx={{color: '#DEE2E6', width: '25px'}}/>
                    <Text>{reservation.restaurant.phone}</Text>
                </Group>
            </Card.Section>
            <Card.Section>
              <Text className='font-bold text-lg'>Table:</Text>
              <Text className='text-center font-bold text-[#29948C] text-lg'>{reservation.table}</Text>
            </Card.Section>
            <Card.Section className={classes.info}>
                <Group>
                  <DateRangeOutlinedIcon sx={{color: '#DEE2E6', width: '25px'}} />
                  <Text>{reservation.date}</Text>
                </Group>

                <Group>
                  <AccessTimeOutlinedIcon sx={{color: '#DEE2E6', width: '25px'}} />
                  <Text>{reservation.time}</Text>
                </Group>
            </Card.Section>

            <Card.Section>
                <Text className='font-bold text-lg'>Made By:</Text>
                <Text className='text-center font-bold text-[#29948C] text-lg'>{reservation.customer_name}</Text>
            </Card.Section>

            <Card.Section>
              <Button variant='outlined' color='error' className=''>Delete</Button>
            </Card.Section>
        </Card>
  )
}

export default ReserveCard