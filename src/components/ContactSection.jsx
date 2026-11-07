import { useState } from 'react'
import { ChevronDown, Clock, House, Mail, MapPin, Phone, Shield, Sparkles, WhatsApp } from './icons.jsx'
import { templatesData } from './ModelWebsite.jsx'
import './ContactSection.css'

const faqs = [
  {
    q: 'Apakah semua model bisa digunakan untuk Rumah, Ruko, Apartemen, Kavling, Tanah, dan Gudang?',
    a: 'Ya, 100% bisa! Semua model memiliki spesifikasi lengkap yang sama. Anda bebas memasukkan berbagai kategori properti: rumah tinggal, ruko bisnis, apartemen, tanah kavling, pergudangan, hingga villa dengan foto, denah, spesifikasi, dan harga masing-masing.',
  },
  {
    q: 'Apa perbedaan mendasar antara Paket Solo Agen dan Kantor Agency?',
    a: 'Paket Solo Agen (Rp 1.500.000/tahun) ditujukan untuk 1 agen personal dengan 1 nomor WhatsApp langsung dan branding pribadi. Sedangkan Paket Kantor Agency (Rp 2.250.000/tahun) dikhususkan untuk kantor broker/agensi yang memiliki banyak agen marketing; setiap listing dapat mencantumkan foto & kontak WhatsApp agen penanggung jawab masing-masing, serta dilengkapi direktori tim kantor.',
  },
  {
    q: 'Berapa biaya langganan dan apa saja yang sudah termasuk?',
    a: 'Biaya bersifat tahunan: Rp 1.500.000/tahun untuk Solo Agen dan Rp 2.250.000/tahun untuk Kantor Agency. Biaya ini sudah ALL-IN, mencakup gratis sewa nama domain (.com/.id), cloud hosting kecepatan tinggi, SSL keamanan, perawatan server, dan bantuan teknis selama 1 tahun penuh.',
  },
  {
    q: 'Apakah saya bisa menambah atau mengubah listing sendiri?',
    a: 'Sangat bisa! Kami memberikan panduan video tutorial praktis yang mudah diikuti. Anda bisa menambah listing baru, mengedit harga diskon, mengganti foto, atau menandai unit yang sudah TERJUAL (SOLD) kapan saja.',
  },
  {
    q: 'Berapa lama proses pembuatan hingga website aktif?',
    a: 'Website Anda akan selesai dan online dalam waktu 24 hingga 48 jam kerja setelah data informasi agen/kantor dan listing awal kami terima.',
  },
]

export default function ContactSection({ selectedTemplate }) {
  const defaultModel = selectedTemplate 
    ? `[${selectedTemplate.tier}] ${selectedTemplate.name} — ${selectedTemplate.price}${selectedTemplate.pricePeriod}`
    : `[Solo Agen] Estate Prime (Rent H&U) — Rp 1.500.000 / tahun`

  const [formData, setFormData] = useState({
    name: '',
    agency: '',
    whatsapp: '',
    city: '',
    tier: 'Solo Agen (Rp 1.500.000/tahun)',
    model: defaultModel,
    notes: '',
  })

  const [activeFaq, setActiveFaq] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSendWhatsApp = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.whatsapp) {
      alert('Mohon isi nama dan nomor WhatsApp Anda terlebih dahulu.')
      return
    }

    const message = `Halo Admin WebProperti,%0A%0ASaya ingin memesan / konsultasi Website Properti:%0A%0A` +
      `*Nama Pemesan:* ${encodeURIComponent(formData.name)}%0A` +
      `*No. WhatsApp:* ${encodeURIComponent(formData.whatsapp)}%0A` +
      `*Kantor Broker / Agency:* ${encodeURIComponent(formData.agency || '-')}%0A` +
      `*Kota / Area Fokus:* ${encodeURIComponent(formData.city || '-')}%0A` +
      `*Kategori Paket:* ${encodeURIComponent(formData.tier)}%0A` +
      `*Model Pilihan:* ${encodeURIComponent(formData.model)}%0A` +
      `*Catatan / Usulan Domain:* ${encodeURIComponent(formData.notes || '-')}%0A%0A` +
      `Mohon panduan pendaftaran dan nomor rekening pembayarannya. Terima kasih!`;

    const waNumber = '6281280008899'
    window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section className="contact-section" id="kontak">
      <div className="contact__container">
        <div className="contact__header">
          <div className="contact__tag">
            <WhatsApp style={{ width: 15, height: 15 }} />
            <span>Formulir Pemesanan & Konsultasi</span>
          </div>
          <h2 className="contact__title">
            Pemesanan Website Properti<br />
            <span>Pilih Paket Solo Agen atau Kantor Agency</span>
          </h2>
          <p className="contact__desc">
            Seluruh model mendukung semua kategori properti (Rumah, Ruko, Apartemen, Tanah, Gudang). Pilih paket yang sesuai kebutuhan Anda dan tim kami akan segera menghubungi via WhatsApp.
          </p>
        </div>

        <div className="contact__grid">
          {/* Form Side */}
          <div className="contact__form-card">
            <h3 className="contact__form-title">Formulir Pesanan Website</h3>
            <p className="contact__form-subtitle">
              Pilih model favorit Anda dan kami akan langsung hubungi via WhatsApp untuk konfirmasi data.
            </p>

            <form onSubmit={handleSendWhatsApp} className="contact__form">
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap Pemesan *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="whatsapp">Nomor WhatsApp Aktif *</label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="0812xxxxxxx"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="agency">Kantor Broker / Agensi</label>
                  <input
                    id="agency"
                    name="agency"
                    type="text"
                    placeholder="Ray White / ERA / Brighton / Independent"
                    value={formData.agency}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="tier">Pilihan Kategori Paket</label>
                  <select
                    id="tier"
                    name="tier"
                    value={formData.tier}
                    onChange={handleChange}
                  >
                    <option value="Solo Agen (Rp 1.500.000/tahun)">
                      Solo Agen — Rp 1.500.000 / tahun
                    </option>
                    <option value="Kantor Agency (Rp 2.250.000/tahun)">
                      Kantor Agency — Rp 2.250.000 / tahun
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="model">Model Template</label>
                  <select
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                  >
                    <optgroup label="Model Solo Agen (Rp 1.500.000 / thn)">
                      {templatesData.filter((t) => t.tier === 'Solo Agen').map((t) => (
                        <option key={t.id} value={`[Solo Agen] ${t.name} — ${t.price}/thn`}>
                          {t.name} (Solo Agen)
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Model Kantor Agency (Rp 2.250.000 / thn)">
                      {templatesData.filter((t) => t.tier === 'Kantor Agency').map((t) => (
                        <option key={t.id} value={`[Kantor Agency] ${t.name} — ${t.price}/thn`}>
                          {t.name} (Kantor Agency)
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="city">Area Fokus Listing Properti</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Contoh: BSD City, Gading Serpong, Jakarta Selatan, Bali"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="notes">Catatan & Usulan Nama Domain (.com / .id)</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="Contoh: Saya ingin domain budiproperti.com, spesialisasi rumah & kavling BSD."
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn--flame contact__submit-btn">
                <WhatsApp style={{ width: 20, height: 20 }} />
                <span>Kirim Pesanan via WhatsApp Sekarang</span>
              </button>

              <p className="contact__privacy-note">
                🔒 Data Anda aman dan hanya digunakan untuk proses setup website serta komunikasi resmi via WhatsApp.
              </p>
            </form>
          </div>

          {/* Info & FAQ Side */}
          <div className="contact__info-col">
            <div className="contact__direct-card">
              <h4>Perbandingan Singkat Paket</h4>
              <p>
                Semua paket sudah termasuk domain, hosting, kalkulator KPR, dan support segala jenis properti:
              </p>
              <div className="contact__channels">
                <div className="contact__chan-item">
                  <div className="contact__chan-icon">
                    👤
                  </div>
                  <div>
                    <strong>Solo Agen — Rp 1.500.000 / tahun</strong>
                    <span>Khusus 1 agen, nomor WA langsung, branding personal mandiri</span>
                  </div>
                </div>
                <div className="contact__chan-item">
                  <div className="contact__chan-icon">
                    🏢
                  </div>
                  <div>
                    <strong>Kantor Agency — Rp 2.250.000 / tahun</strong>
                    <span>Khusus kantor agensi, listing multi-agen, direktori tim marketing</span>
                  </div>
                </div>
                <div className="contact__chan-item">
                  <div className="contact__chan-icon">
                    <House />
                  </div>
                  <div>
                    <strong>Support Semua Jenis Properti</strong>
                    <span>Rumah, Ruko, Apartemen, Kavling, Tanah, Gudang, dll</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="faq-box">
              <h3 className="faq-box__title">Tanya Jawab (FAQ)</h3>
              <div className="faq-list">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className={`faq-item ${activeFaq === idx ? 'is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className="faq-icon" />
                    </button>
                    {activeFaq === idx && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
