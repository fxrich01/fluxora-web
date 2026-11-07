import { useState } from 'react'
import { ArrowRight, Check, ExternalLink, Sparkles, WhatsApp } from './icons.jsx'
import './ModelWebsite.css'

export const templatesData = [
  {
    id: 'rent-hu',
    name: 'Rent H&U — Luxury Villa & Vacation Rental',
    category: 'Villa & Vacation',
    badge: '⭐ Pilihan Favorit',
    tagline: 'Desain ultra-modern untuk sewa villa, cottage liburan, dan apartemen mewah.',
    thumbnail: '/images/hero-villa.webp',
    demoUrl: 'https://website-properti.netlify.app/',
    price: 'Rp 950.000',
    originalPrice: 'Rp 1.800.000',
    features: [
      'Fitur Jadwal Survey & Booking Online',
      'Galeri Foto HD & Spesifikasi Kamar Lengkap',
      'Filter Lokasi Wilayah Strategis',
      'Tombol Chat WhatsApp Mengambang (Floating)',
      'Gratis Domain .com + Cloud Hosting 1 Tahun',
    ],
  },
  {
    id: 'sovereign-estate',
    name: 'Sovereign Estate — Listing Rumah Mewah',
    category: 'Rumah Mewah & Secondary',
    badge: '💎 Luxury Edition',
    tagline: 'Katalog eksklusif untuk agen properti yang fokus pada rumah premium & secondary.',
    thumbnail: '/images/cliff-ocean.webp',
    demoUrl: 'https://website-properti.netlify.app/',
    price: 'Rp 1.150.000',
    originalPrice: 'Rp 2.200.000',
    features: [
      'Kalkulator Simulasi KPR Otomatis',
      'Integrasi Video Tour & YouTube Listing',
      'Detail Sertifikat (SHM), IMB & Luas Tanah/Bangunan',
      'Form Request Pricelist & E-Brochure',
      'Gratis Setup Domain & Optimasi SEO Lokal',
    ],
  },
  {
    id: 'grand-cluster',
    name: 'Grand Cluster — Landing Page Perumahan Baru',
    category: 'Perumahan & Developer',
    badge: '🔥 Best Seller',
    tagline: 'Dirancang khusus untuk promosi proyek cluster baru dan pre-launching developer.',
    thumbnail: '/images/jakson-house.webp',
    demoUrl: 'https://website-properti.netlify.app/',
    price: 'Rp 850.000',
    originalPrice: 'Rp 1.500.000',
    features: [
      'Pilihan Tipe Unit (Tipe 36, 45, 70+)',
      'Banner Promo Diskon & NUP Terbatas',
      'Download Brosur PDF Otomatis ke WhatsApp',
      'Peta Fasilitas Sekitar (Tol, Mall, Rumah Sakit)',
      'Siap Digunakan untuk Iklan Facebook & Google Ads',
    ],
  },
  {
    id: 'agent-pro',
    name: 'Agent Pro — Personal Branding Top Agent',
    category: 'Personal Branding',
    badge: '✨ Rekomendasi Broker',
    tagline: 'Tingkatkan reputasi Anda sebagai Top Producer dengan website portofolio profesional.',
    thumbnail: '/images/ocean-breeze.webp',
    demoUrl: 'https://website-properti.netlify.app/',
    price: 'Rp 750.000',
    originalPrice: 'Rp 1.400.000',
    features: [
      'Profil, Prestasi & Sertifikasi Agen',
      'Testimoni Klien Puas & Bukti Closing',
      'Listing Pilihan Terbaik yang Sedang Dipasarkan',
      'Kartu Nama Digital (VCard) & Kontak Cepat',
      'Terhubung ke Akun Instagram, TikTok & LinkedIn',
    ],
  },
  {
    id: 'urban-living',
    name: 'Urban Living — Apartemen & High-Rise',
    category: 'Apartemen & Studio',
    badge: '🏙️ High-Rise Series',
    tagline: 'Template vertikal modern untuk penjualan & sewa unit apartemen dan penthouse.',
    thumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://website-properti.netlify.app/',
    price: 'Rp 950.000',
    originalPrice: 'Rp 1.750.000',
    features: [
      'Viewer Denah Lantai (Floor Plan)',
      'Tampilan Fasilitas Gedung (Pool, Gym, Lounge)',
      'Kalkulasi Estimasi Rental Yield / Pasif Income',
      'Tombol Survey Unit & Tanya Unit Kosong',
      'Mobile-First Design sangat ringan di smartphone',
    ],
  },
  {
    id: 'prime-office',
    name: 'Prime Brokerage — Kantor Agen Multi-Listing',
    category: 'Kantor & Multi-Listing',
    badge: '🏢 Solusi Tim Kantor',
    tagline: 'Portal lengkap untuk kantor agensi properti dengan banyak agen dan listing.',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://website-properti.netlify.app/',
    price: 'Rp 1.450.000',
    originalPrice: 'Rp 2.800.000',
    features: [
      'Pencarian Listing Berdasarkan Kota, Harga & Tipe',
      'Direktori Marketing & Kontak Tiap Agen',
      'Form Konsultasi Jual/Beli/Sewa Properti',
      'Dashboard Sederhana Pengelolaan Listing',
      'Termasuk Panduan Video Update Konten Sendiri',
    ],
  },
]

const categories = ['Semua', 'Villa & Vacation', 'Rumah Mewah & Secondary', 'Perumahan & Developer', 'Personal Branding', 'Apartemen & Studio', 'Kantor & Multi-Listing']

export default function ModelWebsite({ onSelectTemplate, onOpenPreview }) {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const filtered = activeCategory === 'Semua' 
    ? templatesData 
    : templatesData.filter((t) => t.category === activeCategory)

  return (
    <section className="models-section" id="model-website">
      <div className="models__container">
        <div className="models__header">
          <div className="models__tag">
            <Sparkles style={{ width: 15, height: 15 }} />
            <span>Katalog Model Website Properti</span>
          </div>
          <h2 className="models__title">
            Pilihan Model Template Website<br />
            <span>Siap Pakai untuk Agen Properti</span>
          </h2>
          <p className="models__desc">
            Seluruh model dirancang khusus untuk meningkatkan rasa percaya calon pembeli. Cepat dibuka di ponsel, sudah termasuk domain .com, hosting, dan langsung terhubung ke WhatsApp Anda.
          </p>

          <div className="models__categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`models__cat-btn ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="models__grid">
          {filtered.map((item) => (
            <article key={item.id} className="template-card">
              <div className="template-card__media">
                <img 
                  src={item.thumbnail} 
                  alt={item.name} 
                  className="template-card__img" 
                  loading="lazy"
                />
                <div className="template-card__badge">{item.badge}</div>
                <div className="template-card__overlay">
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--light template-card__quick-preview"
                    title="Buka Preview Website"
                  >
                    <ExternalLink style={{ width: 16, height: 16 }} />
                    <span>Lihat Live Preview</span>
                  </a>
                </div>
              </div>

              <div className="template-card__body">
                <div className="template-card__cat">{item.category}</div>
                <h3 className="template-card__title">{item.name}</h3>
                <p className="template-card__tagline">{item.tagline}</p>

                <div className="template-card__price-box">
                  <span className="template-card__price-label">Harga Pembuatan Lengkap:</span>
                  <div className="template-card__prices">
                    <span className="template-card__price-current">{item.price}</span>
                    <span className="template-card__price-orig">{item.originalPrice}</span>
                    <span className="template-card__price-badge">Hemat 50%</span>
                  </div>
                  <span className="template-card__price-note">Sekali bayar • Sudah termasuk Domain & Hosting</span>
                </div>

                <ul className="template-card__features">
                  {item.features.map((feat, idx) => (
                    <li key={idx}>
                      <Check className="template-card__check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="template-card__actions">
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline template-card__btn-preview"
                  >
                    <ExternalLink style={{ width: 16, height: 16 }} />
                    <span>Preview</span>
                  </a>
                  <button
                    type="button"
                    className="btn btn--flame template-card__btn-order"
                    onClick={() => onSelectTemplate(item)}
                  >
                    <WhatsApp style={{ width: 16, height: 16 }} />
                    <span>Pesan Model Ini</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="models__footer-note">
          <p>
            💡 <strong>Ingin fitur kustom khusus untuk kantor broker Anda?</strong> Tim kami siap membantu membuatkan layout sesuai permintaan. <a href="#kontak">Hubungi kami untuk konsultasi gratis →</a>
          </p>
        </div>
      </div>
    </section>
  )
}
