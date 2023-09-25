import React from 'react'
import { Card,  Text,  Button, rem, createStyles } from'@mantine/core'

const useStyles = createStyles((theme) => ({
    card: {
      border: `${rem(1)} dashed black`,
      padding: '30px'
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

const AdmineReserveCard = ({ reservation }) => {
    const { classes } = useStyles()

  return (
    <Card  className={classes.card}>
            <Card.Section className='p-2'>
                <Button className={classes.button}>incoming</Button>
            </Card.Section>
            
        </Card>
  )
}

export default AdmineReserveCard