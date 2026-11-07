import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ModelWebsite from './components/ModelWebsite.jsx'
import CaraBeli from './components/CaraBeli.jsx'
import BlogSection from './components/BlogSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import OrderModal from './components/OrderModal.jsx'
import { WhatsApp } from './components/icons.jsx'

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template)
    setIsOrderModalOpen(true)
  }

  const handleOpenGeneralOrder = (template = null) => {
    setSelectedTemplate(template)
    setIsOrderModalOpen(true)
  }

  return (
    <>
      <a className="skip-link" href="#main">Lewati ke konten utama</a>
      
      <Navbar onOpenOrder={handleOpenGeneralOrder} />
      
      <main id="main">
        <Hero />
        <ModelWebsite onSelectTemplate={handleSelectTemplate} />
        <CaraBeli onOpenOrder={handleOpenGeneralOrder} />
        <BlogSection />
        <ContactSection selectedTemplate={selectedTemplate} />
      </main>

      <Footer />

      {/* Interactive Order Modal */}
      {isOrderModalOpen && (
        <OrderModal 
          template={selectedTemplate} 
          onClose={() => setIsOrderModalOpen(false)} 
        />
      )}

      {/* Floating WhatsApp Quick Action Button */}
      <aside className="floating-wa" aria-label="Bantuan WhatsApp">
        <a
          href="https://wa.me/628119191175?text=Halo%20Admin%20WebProperti%2C%20saya%20ingin%20tanya%20seputar%20pembuatan%20website%20agen%20properti"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-wa__btn"
          title="Chat WhatsApp dengan Admin"
        >
          <WhatsApp className="floating-wa__icon" />
          <span className="floating-wa__text">Tanya Admin</span>
        </a>
      </aside>
    </>
  )
}
