import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem, Code, Text } from '@mantine/core';
import {
  IconGauge,
  IconLayoutGrid,
  IconToolsKitchen2,
  IconBookmarkPlus,
  IconUser,
  IconSettings,
  IconLogout,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    opacity: 0.85,

    '&:hover': {
      opacity: 1,
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.1
      ),
    },
  },

  active: {
    opacity: 1,
    '&, &:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.15
      ),
    },
  },
}));


function NavbarLink({ icon: Icon, label, active, onClick }) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconGauge, label: 'Dashboard'},
  { icon: IconLayoutGrid, label: 'Tables'},
  { icon: IconBookmarkPlus, label: 'Reservations'},
  { icon: IconUser, label: 'Waiters'},
  { icon: IconToolsKitchen2, label: 'Menu'},
  { icon: IconSettings, label: 'Settings'},
];
const NavbarAdmin = ({user, active, setActive}) =>  {

    const LogoutUser = () => {
        sessionStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location.reload(true)
      } 


  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));


  return (
    <Navbar
      height='100vh'
      width={{ base: 80 }}
      p="md"
      sx={(theme) => ({
        backgroundColor: '#272627'
      })}
    >
      <Center>
        <Code>Logo</Code>
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <Text className='text-white font-bold text-base'>{user.username}</Text>
          <NavbarLink icon={IconLogout} label="Logout" onClick={LogoutUser} />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}

export default NavbarAdmin