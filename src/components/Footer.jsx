import { Globe, House, Logo, Mail, Phone, WhatsApp } from './icons.jsx'
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
              Solusi pembuatan website eksklusif khusus Solo Agen (Rp 1,5 Jt/thn) dan Kantor Agency (Rp 2,25 Jt/thn). Mendukung listing Rumah, Ruko, Apartemen, Kavling, Tanah, hingga Gudang.
            </p>
            <div className="footer__socials">
              <a 
                href="https://wa.me/6281280008899?text=Halo%20Admin%20WebProperti" 
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
            <h4 className="footer__heading">Kategori Paket</h4>
            <ul>
              <li><a href="#model-website">Paket Solo Agen (Rp 1,5 Jt/thn)</a></li>
              <li><a href="#model-website">Paket Kantor Agency (Rp 2,25 Jt/thn)</a></li>
              <li><a href="#model-website">Listing Rumah & Ruko</a></li>
              <li><a href="#model-website">Listing Apartemen & Penthouse</a></li>
              <li><a href="#model-website">Listing Tanah, Kavling & Gudang</a></li>
            </ul>
          </div>

          <div className="footer__contact-col">
            <h4 className="footer__heading">Konsultasi Pemesanan</h4>
            <p className="footer__contact-info">
              Tanyakan ketersediaan nama domain pilihan Anda atau konsultasikan kebutuhan website kantor agensi Anda dengan tim kami.
            </p>
            <a 
              href="https://wa.me/6281280008899?text=Halo%20Admin%20WebProperti%2C%20saya%20ingin%20tanya%20paket%20Solo%20Agen%20dan%20Kantor%20Agency" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn--flame footer__wa-cta"
            >
              <WhatsApp style={{ width: 17, height: 17 }} />
              <span>Chat WhatsApp Admin</span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} WebProperti. Seluruh Hak Cipta Dilindungi. Platform Website No. 1 Agen & Broker Properti Indonesia.</p>
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
