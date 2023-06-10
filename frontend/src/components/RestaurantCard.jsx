import React from 'react'
import { Card,  Text, Image, Group, Button, rem, createStyles } from'@mantine/core'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import StarIcon from '@mui/icons-material/Star';

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

const RestaurantCard = ({ card }) => {
    const { classes } = useStyles()

  return (
    <Card key={card.name} withBorder className={classes.card}>
            <Card.Section className={classes.imageSection}>
                <Image src={card.image} height={150} />
            </Card.Section>
            <Card.Section className={classes.label}>
                <Text>{card.name}</Text>
                <Text className='text-[#66948C]'>{card.city}</Text>
            </Card.Section>
            <Card.Section className={classes.info}>
                <Group>
                    <LocationOnOutlinedIcon sx={{color: '#DEE2E6', width: '25px'}} />
                    <Text>{card.address}</Text>
                </Group>
                <Group>
                    <LocalPhoneOutlinedIcon sx={{color: '#DEE2E6', width: '25px'}}/>
                    <Text>{card.phone}</Text>
                </Group>
            </Card.Section>
            <Card.Section className={classes.footer}>
                <Group sx={{ color: '#F9AF00', gap: '2px' }}>
                    <StarIcon />
                    <Text>{card.rating}</Text>
                </Group>
                <Button variant='filled' className={classes.button}>Reserve</Button>
            </Card.Section>
        </Card>
  )
}

export default RestaurantCard