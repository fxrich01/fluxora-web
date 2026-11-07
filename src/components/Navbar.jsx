import { useEffect, useState } from 'react'
import { Chevron, Close, Logo, Menu, WhatsApp } from './icons.jsx'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Model Website', href: '#model-website' },
  { label: 'Cara Beli', href: '#cara-beli' },
  { label: 'Blog', href: '#blog' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Navbar({ onOpenOrder }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a className="nav__brand" href="#home">
        <Logo className="nav__logo" />
        <span className="nav__brand-text">
          WebProperti<span className="nav__brand-badge">Agent</span>
        </span>
      </a>

      <nav className="nav__pill" aria-label="Primary">
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav__actions">
        <a 
          className="btn btn--light nav__cta" 
          href="#model-website"
        >
          Lihat Model
        </a>
        <button
          className="btn btn--flame nav__cta-order"
          onClick={() => onOpenOrder && onOpenOrder(null)}
          type="button"
        >
          <WhatsApp style={{ width: 16, height: 16 }} />
          <span>Pesan Website</span>
        </button>
        <button
          className="nav__burger"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="nav__sheet">
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__sheet-actions">
            <button 
              className="btn btn--flame nav__sheet-cta" 
              type="button"
              onClick={() => {
                setOpen(false)
                if (onOpenOrder) onOpenOrder(null)
              }}
            >
              <WhatsApp style={{ width: 18, height: 18 }} />
              <span>Pesan Website Sekarang</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
