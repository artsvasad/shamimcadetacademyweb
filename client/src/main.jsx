import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage/HomePage'
import Admission from './pages/Admission/Admission.jsx'
import NoticeBoard from './pages/NoticeBoard/NoticeBoard.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'
import NotFound from './pages/404/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/notices" element={<NoticeBoard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
