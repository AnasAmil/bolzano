import './App.css';
import HeaderMenu from './components/HeaderMenu';
import HistoryPage from './pages/HistoryPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import {BrowserRouter, Routes,Route } from "react-router-dom"
import useToken from './app/useToken';
import ReservePage from './pages/ReservePage';
import LoginPage from './pages/LoginPage';
import NavbarAdmin from './components/NavbarAdmin';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Reservations from './pages/Reservations';
import Waiters from './pages/Waiters';
import Menu from './pages/Menu';
import SignUppage from './pages/SignUppage';

function App() {
  const {token, setToken} = useToken()
  const [active, setActive] = useState(0);

  console.log('token ==>', token)

  if (!localStorage.getItem('user')  || JSON.parse(localStorage.getItem('user')).is_staff === false) {
    return (
      <>
        <HeaderMenu token={token} />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage token={token} />}/>
            <Route path='/history' element={<HistoryPage setToken={setToken} token={token} />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/:resId/reserve' element={<ReservePage token={token} setToken={setToken} />}/>
            <Route path='/login' element={<LoginPage setToken={setToken} token={token} />}/>
            <Route path='/register' element={<SignUppage  />}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  } else {
    return (
      <div className='flex'>
        <NavbarAdmin user={JSON.parse(localStorage.getItem('user'))} active={active} setActive={setActive} token={token} />
        {
          active === 0 &&
          <Dashboard />
        }
        {
          active === 1 &&
          <Tables />
        }
        {
          active === 2 &&
          <Reservations />
        }
  
        {
          active === 3 &&
          <Waiters />
        }
  
        {
          active === 4 &&
          <Menu />
        }
      </div>
    );
  }

}

export default App;
