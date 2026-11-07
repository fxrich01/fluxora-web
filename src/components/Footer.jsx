import { Globe, Logo, Mail, Phone, WhatsApp } from './icons.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand-col">
            <a href="#home" className="footer__brand">
              <Logo className="footer__logo" />
              <span>WebProperti</span>
            </a>
            <p className="footer__tagline">
              Solusi digitalisasi dan pembuatan website eksklusif khusus Agen & Broker Properti Indonesia. Desain mewah, loading kilat, dan terintegrasi WhatsApp CRM.
            </p>
            <div className="footer__socials">
              <a 
                href="https://wa.me/6281280008899?text=Halo%20WebProperti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="WhatsApp"
              >
                <WhatsApp />
              </a>
              <a 
                href="#kontak" 
                className="footer__social-btn"
                aria-label="Hubungi Kami"
              >
                <Phone />
              </a>
              <a 
                href="mailto:halo@webproperti.id" 
                className="footer__social-btn"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </div>

          <div className="footer__nav-col">
            <h4 className="footer__heading">Menu Utama</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#model-website">Model Website</a></li>
              <li><a href="#cara-beli">Cara Beli</a></li>
              <li><a href="#blog">Blog & Edukasi</a></li>
              <li><a href="#kontak">Kontak Pemesanan</a></li>
            </ul>
          </div>

          <div className="footer__models-col">
            <h4 className="footer__heading">Model Populer</h4>
            <ul>
              <li><a href="#model-website">Rent H&U (Luxury Villa)</a></li>
              <li><a href="#model-website">Sovereign Estate (Rumah Mewah)</a></li>
              <li><a href="#model-website">Grand Cluster (Perumahan Baru)</a></li>
              <li><a href="#model-website">Agent Pro (Personal Branding)</a></li>
              <li><a href="#model-website">Urban Living (Apartemen)</a></li>
            </ul>
          </div>

          <div className="footer__contact-col">
            <h4 className="footer__heading">Hubungi Tim Kami</h4>
            <p className="footer__contact-info">
              Konsultasi gratis mengenai nama domain, pemilihan template, dan integrasi listing properti Anda.
            </p>
            <a 
              href="https://wa.me/6281280008899?text=Halo%20Admin%20WebProperti%2C%20saya%20ingin%20konsultasi%20website%20agen%20properti" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn--flame footer__wa-cta"
            >
              <WhatsApp style={{ width: 17, height: 17 }} />
              <span>Chat WhatsApp Kami</span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} WebProperti. Seluruh Hak Cipta Dilindungi. Dibuat khusus untuk kemajuan Agen Properti Indonesia.</p>
          <div className="footer__bottom-links">
            <a href="#home">Syarat & Ketentuan</a>
            <span>•</span>
            <a href="#home">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
