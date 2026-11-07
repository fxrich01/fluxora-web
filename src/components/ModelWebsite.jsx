import { useState } from 'react'
import { ArrowRight, Check, ExternalLink, House, Sparkles, WhatsApp } from './icons.jsx'
import './ModelWebsite.css'

export const templatesData = [
  // --- SOLO AGEN TIER (Rp 1.500.000 / tahun) ---
  {
    id: 'solo-estate-prime',
    name: 'Estate Prime (Rent H&U)',
    tier: 'Solo Agen',
    tierBadge: '👤 Khusus Solo Agen',
    categoryBadge: '⭐ Desain Terpopuler',
    tagline: 'Desain visual memukau dengan hero video/foto dinamis, fokus pada personal branding 1 agen profesional.',
    thumbnail: '/images/hero-villa.webp',
    demoUrl: 'https://website-properti.netlify.app/',
    price: 'Rp 1.500.000',
    pricePeriod: '/ tahun',
    target: '1 Agen Mandiri / Personal Broker',
    features: [
      'Bisa untuk Rumah, Ruko, Apartemen, Tanah/Kavling, Gudang & Properti lainnya',
      'Personal Branding: Profil, Sertifikasi & 1 Nomor WhatsApp Utama Anda',
      'Form Jadwal Survey Lokasi & Booking Properti langsung ke WhatsApp',
      'Kalkulator Simulasi KPR & Estimasi Angsuran Buyer',
      'Gratis Domain (.com / .id) + Cloud Hosting Cepat selama 1 Tahun',
      'Panduan Video Tambah & Edit Listing Mandiri',
    ],
  },
  {
    id: 'solo-modern-minimalist',
    name: 'Modern Minimalist',
    tier: 'Solo Agen',
    tierBadge: '👤 Khusus Solo Agen',
    categoryBadge: '💎 Clean & Elegant',
    tagline: 'Layout bersih bergaya luxury modern yang menonjolkan foto properti dengan spesifikasi jelas.',
    thumbnail: '/images/cliff-ocean.webp',
    demoUrl: 'https://website-properti.netlify.app/',
    price: 'Rp 1.500.000',
    pricePeriod: '/ tahun',
    target: '1 Agen Mandiri / Personal Broker',
    features: [
      'Bisa untuk Rumah, Ruko, Apartemen, Tanah/Kavling, Gudang & Properti lainnya',
      'Filter Tipe Properti, Wilayah/Kota & Rentang Harga Interaktif',
      'Integrasi Google Maps & Peta Fasilitas Sekitar (Tol, Mall, Sekolah)',
      'Detail Sertifikat (SHM, HGB), Luas Tanah/Bangunan & IMB',
      'Gratis Domain (.com / .id) + Cloud Hosting Cepat selama 1 Tahun',
      'Tombol Chat WhatsApp Mengambang (Floating Action Button)',
    ],
  },
  {
    id: 'solo-executive-portfolio',
    name: 'Executive Portfolio',
    tier: 'Solo Agen',
    tierBadge: '👤 Khusus Solo Agen',
    categoryBadge: '🏆 Top Producer Choice',
    tagline: 'Tampilan portofolio berkelas untuk agen spesialis properti secondary mewah dan listing eksklusif.',
    thumbnail: '/images/ocean-breeze.webp',
    demoUrl: 'https://website-properti.netlify.app/',
    price: 'Rp 1.500.000',
    pricePeriod: '/ tahun',
    target: '1 Agen Mandiri / Personal Broker',
    features: [
      'Bisa untuk Rumah, Ruko, Apartemen, Tanah/Kavling, Gudang & Properti lainnya',
      'Bagian Testimoni Klien Puas & Portofolio Listing Terjual (SOLD)',
      'Tombol Download E-Brochure PDF & Pricelist ke WhatsApp',
      'Kartu Nama Digital (VCard) & Integrasi Akun Medsos Agen',
      'Gratis Domain (.com / .id) + Cloud Hosting Cepat selama 1 Tahun',
      'Optimasi SEO Google Lokal (Mudah ditemukan buyer sekitar)',
    ],
  },

  // --- KANTOR AGENCY TIER (Rp 2.250.000 / tahun) ---
  {
    id: 'agency-grand-brokerage',
    name: 'Grand Brokerage Office',
    tier: 'Kantor Agency',
    tierBadge: '🏢 Khusus Kantor Agency',
    categoryBadge: '🔥 Best Seller Kantor',
    tagline: 'Portal agensi lengkap dengan manajemen multi-listing dan direktori kontak dari banyak agen tim kantor.',
    thumbnail: '/images/jakson-house.webp',
    demoUrl: 'https://website-properti.netlify.app/',
    price: 'Rp 2.250.000',
    pricePeriod: '/ tahun',
    target: 'Kantor Broker / Agensi dengan Banyak Agen',
    features: [
      'Bisa untuk Rumah, Ruko, Apartemen, Tanah/Kavling, Gudang & Properti lainnya',
      'Multi-Agen System: Setiap listing menampilkan foto & kontak agen penanggung jawab',
      'Halaman Direktori Tim Marketing / Profil Agen Kantor lengkap',
      'Tombol Survey & Chat langsung ke masing-masing Agen terkait atau Admin Kantor',
      'Gratis Domain Resmi Kantor (.com / .id) + Hosting Performa Tinggi 1 Tahun',
      'Dashboard & Akses Tambah/Kelola Listing Seluruh Tim',
    ],
  },
  {
    id: 'agency-metropolitan',
    name: 'Metropolitan Realty Portal',
    tier: 'Kantor Agency',
    tierBadge: '🏢 Khusus Kantor Agency',
    categoryBadge: '🏙️ Multi-Listing Portal',
    tagline: 'Desain portal properti komprehensif untuk kantor agensi yang memasarkan ratusan unit primer & secondary.',
    thumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://website-properti.netlify.app/',
    price: 'Rp 2.250.000',
    pricePeriod: '/ tahun',
    target: 'Kantor Broker / Agensi dengan Banyak Agen',
    features: [
      'Bisa untuk Rumah, Ruko, Apartemen, Tanah/Kavling, Gudang & Properti lainnya',
      'Pencarian Canggih: Filter Kategori Jual/Sewa, Kota, Area, dan Nama Agen',
      'Tampilan Profil Kantor, Legalitas, dan Penghargaan Kantor Agency',
      'Sistem Distribusi Leads Pembeli ke Agen yang Bersangkutan',
      'Gratis Domain Resmi Kantor (.com / .id) + Hosting Performa Tinggi 1 Tahun',
      'Garansi Pemeliharaan Sistem & Backup Data Rutin',
    ],
  },
  {
    id: 'agency-corporate',
    name: 'Corporate Property Agency',
    tier: 'Kantor Agency',
    tierBadge: '🏢 Khusus Kantor Agency',
    categoryBadge: '💼 Full Office Suite',
    tagline: 'Tampilan kredibel untuk kantor cabang broker nasional (Ray White, ERA, Brighton, Century 21, dll).',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://website-properti.netlify.app/',
    price: 'Rp 2.250.000',
    pricePeriod: '/ tahun',
    target: 'Kantor Broker / Agensi dengan Banyak Agen',
    features: [
      'Bisa untuk Rumah, Ruko, Apartemen, Tanah/Kavling, Gudang & Properti lainnya',
      'Integrasi Branding Resmi Kantor / Logo Franchise Agency Anda',
      'Fitur Rekrutmen Agen Baru (Form Bergabung Bersama Kami)',
      'Manajemen Listing Kolaboratif untuk Seluruh Agen Kantor',
      'Gratis Domain Resmi Kantor (.com / .id) + Hosting Performa Tinggi 1 Tahun',
      'Bimbingan Training Penggunaan untuk Admin / Secretary Kantor',
    ],
  },
]

const categories = ['Semua Model', 'Solo Agen (Rp 1,5 Jt/thn)', 'Kantor Agency (Rp 2,25 Jt/thn)']

export default function ModelWebsite({ onSelectTemplate }) {
  const [activeCategory, setActiveCategory] = useState('Semua Model')

  const filtered = activeCategory === 'Semua Model'
    ? templatesData
    : activeCategory.includes('Solo Agen')
      ? templatesData.filter((t) => t.tier === 'Solo Agen')
      : templatesData.filter((t) => t.tier === 'Kantor Agency')

  return (
    <section className="models-section" id="model-website">
      <div className="models__container">
        <div className="models__header">
          <div className="models__tag">
            <Sparkles style={{ width: 15, height: 15 }} />
            <span>Katalog Model Website Properti</span>
          </div>
          <h2 className="models__title">
            Pilihan Model Website Khusus<br />
            <span>Solo Agen & Kantor Agency</span>
          </h2>
          <p className="models__desc">
            Seluruh model memiliki spesifikasi lengkap yang sama: dapat digunakan untuk memasarkan <strong>Rumah, Ruko, Apartemen, Kavling, Tanah, Gudang, hingga Properti Komersial</strong>. Yang membedakan adalah fitur single-agent vs multi-agent kantor.
          </p>

          {/* Unified Property Capability Banner */}
          <div className="models__spec-banner">
            <div className="models__spec-icon">
              <House style={{ width: 22, height: 22 }} />
            </div>
            <div className="models__spec-text">
              <strong>Semua Model Fleksibel untuk Segala Kategori Properti:</strong>
              <span>Rumah Tinggal • Ruko & Rukan • Apartemen & Penthouse • Kavling Siap Bangun • Tanah & Lahan Luas • Gudang & Pabrik • Properti Komersial</span>
            </div>
          </div>

          {/* Tier Switcher Pills */}
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

        {/* Pricing Comparison Quick Banner */}
        <div className="models__pricing-summary">
          <div className="pricing-pill">
            <span className="pricing-pill__badge">Paket Solo Agen</span>
            <span className="pricing-pill__price">Rp 1.500.000 <small>/ tahun</small></span>
            <span className="pricing-pill__desc">Khusus 1 Agen • Direct WA • Domain & Hosting</span>
          </div>
          <div className="pricing-pill pricing-pill--agency">
            <span className="pricing-pill__badge">Paket Kantor Agency</span>
            <span className="pricing-pill__price">Rp 2.250.000 <small>/ tahun</small></span>
            <span className="pricing-pill__desc">Khusus Kantor • Listing Multi-Agen • Direktori Tim</span>
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
                <div className="template-card__badge">{item.categoryBadge}</div>
                <div className={`template-card__tier-tag ${item.tier === 'Kantor Agency' ? 'tier-tag--agency' : 'tier-tag--solo'}`}>
                  {item.tierBadge}
                </div>
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
                <div className="template-card__cat">{item.target}</div>
                <h3 className="template-card__title">{item.name}</h3>
                <p className="template-card__tagline">{item.tagline}</p>

                <div className="template-card__price-box">
                  <span className="template-card__price-label">Biaya Paket ({item.tier}):</span>
                  <div className="template-card__prices">
                    <span className="template-card__price-current">{item.price}</span>
                    <span className="template-card__price-period">{item.pricePeriod}</span>
                  </div>
                  <span className="template-card__price-note">Sudah termasuk Nama Domain .com + Cloud Hosting 1 Tahun</span>
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
            💡 <strong>Butuh konsultasi perbedaan Solo Agen vs Kantor Agency?</strong> Hubungi tim konsultan kami secara langsung via WhatsApp untuk rekomendasi paket terbaik bagi Anda. <a href="#kontak">Konsultasi Gratis Sekarang →</a>
          </p>
        </div>
      </div>
    </section>
  )
}
