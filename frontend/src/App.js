import './App.css';
import HeaderMenu from './components/HeaderMenu';
import HistoryPage from './pages/HistoryPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import {BrowserRouter, Routes,Route } from "react-router-dom"
import useToken from './app/useToken';
import ReservePage from './pages/ReservePage';

function App() {
  const {token, setToken} = useToken()
  return (
    <>
      <HeaderMenu token={token} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/history' element={<HistoryPage setToken={setToken} token={token} />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/reserve' element={<ReservePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
