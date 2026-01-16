import HomePage from '@/pages/app/home/Index'
import AboutPage from '@/pages/app/about/Index'
import ArticlesPage from '@/pages/app/articles/Index'
import ContactPage from '@/pages/app/contact/Index'
import GalleryPage from '@/pages/app/gallery/Index'
import CareersPage from '@/pages/app/careers/Index'
import ServicesPage from '@/pages/app/services/Index'
import LegalPage from '@/pages/app/legal/Index'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/privacy-policy" element={<LegalPage />} />
      <Route path="/terms-and-conditions" element={<LegalPage />} />
      <Route path="/disclaimer" element={<LegalPage />} />
    </Routes>
  )
}

export default App
