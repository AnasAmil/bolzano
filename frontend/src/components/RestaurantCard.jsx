import React from 'react'
import { Card,  Text, Image, Group, Button, rem, createStyles } from'@mantine/core'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
  
    imageSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
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

const RestaurantCard = ({ restaurant }) => {
    const { classes } = useStyles()

  return (
    <Card  withBorder className={classes.card}>
            <Card.Section className={classes.imageSection}>
                <Image src={restaurant.image} height={150} />
            </Card.Section>
            <Card.Section className={classes.label}>
                <Text>{restaurant.name}</Text>
                <Text className='text-[#66948C]'>{restaurant.city}</Text>
            </Card.Section>
            <Card.Section className={classes.info}>
                <Group>
                    <LocationOnOutlinedIcon sx={{color: '#DEE2E6', width: '25px'}} />
                    <Text>{restaurant.address}</Text>
                </Group>
                <Group>
                    <LocalPhoneOutlinedIcon sx={{color: '#DEE2E6', width: '25px'}}/>
                    <Text>{restaurant.phone}</Text>
                </Group>
            </Card.Section>
            <Card.Section className={classes.footer}>
                <Group sx={{ color: '#F9AF00', gap: '2px' }}>
                    <StarIcon />
                    <Text>{restaurant.rating}</Text>
                </Group>
                <Link to={'/'+restaurant.id+'/reserve'}><Button variant='filled' className={classes.button}>Reserve</Button></Link>
            </Card.Section>
        </Card>
  )
}

export default RestaurantCard