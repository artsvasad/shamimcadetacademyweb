import './App.css'
import Header from './components/Layout/Header/Header'
import NavBar from './components/Layout/NavBar/NavBar'
import Footer from './components/Layout/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
    <Header/>
    <NavBar/>
    <Outlet />
    <Footer />
    </>
  )
}

export default App
