import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage/HomePage'
import Admission from './pages/Admission/Admission.jsx'
// import Notices from './pages/Notices/Notices.jsx'
// import About from './pages/About/About.jsx'
// import Contact from './pages/Contact/Contact.jsx'
// import NotFound from './pages/NotFound/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/admission" element={<Admission />} />
          {/* <Route path="/notices" element={<Notices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
