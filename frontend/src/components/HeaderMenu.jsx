import {
    createStyles,
    Header,
    Group,
    Button,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    Code,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  
  const useStyles = createStyles((theme) => ({
    link: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: 'none',
      color: 'white',
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
      borderBottom: `${rem(3)} solid transparent`,
      transition: 'border-color 100ms ease, color 100ms ease',
  
      [theme.fn.smallerThan('sm')]: {
        height: rem(42),
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      },

      ...theme.fn.hover({
        borderBottomColor: 'white',
      })
  
    },

    authButtons: {
        color: 'white',
        ...theme.fn.hover({
            color: 'black'
        })
    },
  
  
    hiddenMobile: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    hiddenDesktop: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  }));
  
  
const HeaderMenu = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const { classes, theme } = useStyles();
  
    
  
    return (
      <Box pb={120}>
        <Header height={60} px="md" sx={{ backgroundColor: '#272627' }}>
          <Group position="apart" sx={{ height: '100%' }}>
            <Code>Logo</Code>
  
            <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
              <a href="/" className={classes.link}>
                Home
              </a>
              <a href="/history" className={classes.link}>
                History
              </a>
              <a href="/about" className={classes.link}>
                About
              </a>
            </Group>
  
            <Group className={classes.hiddenMobile}>
              <Button variant="default" className={classes.authButtons} >Log in</Button>
              <Button variant="default" className={classes.authButtons}>Sign up</Button>
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} color='white' />
          </Group>
        </Header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Bolzano"
          className={classes.hiddenDesktop}
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md" sx={{ backgroundColor: '#272627' }}>
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
  
            <a href="/" className={classes.link}>
              Home
            </a>
            <a href="/history" className={classes.link}>
              History
            </a>
            <a href="/about" className={classes.link}>
              About
            </a>
  
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
  
            <Group position="center" grow pb="xl" px="md">
              <Button variant="default" className={classes.authButtons}>Log in</Button>
              <Button variant="default" className={classes.authButtons}>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }

  export default HeaderMenu