import './App.css'
import Header from './components/Layout/Header/Header'
import NavBar from './components/Layout/NavBar/NavBar'
import Footer from './components/Layout/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {


  return (
    <>
    <Header/>
    <NavBar/>
    <Outlet />
    <Footer />
    <Analytics/>
    <SpeedInsights />
    </>
  )
}

export default App
