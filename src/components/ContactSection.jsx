import { useState } from 'react'
import { ChevronDown, Clock, Mail, MapPin, Phone, Shield, Sparkles, WhatsApp } from './icons.jsx'
import { templatesData } from './ModelWebsite.jsx'
import './ContactSection.css'

const faqs = [
  {
    q: 'Apakah harga sudah termasuk nama domain .com dan cloud hosting?',
    a: 'Ya, sudah lengkap! Seluruh paket sudah termasuk gratis nama domain (.com / .id) selama 1 tahun, cloud hosting performa tinggi dengan SSL (https) aman, dan konfigurasi teknis hingga website aktif.',
  },
  {
    q: 'Apakah saya bisa menambah, mengedit, atau menghapus listing properti sendiri?',
    a: 'Tentu saja! Kami menyediakan panduan video singkat dan mudah dipahami sehingga Anda bisa menambahkan listing baru, mengganti harga properti, atau menandai properti yang sudah TERJUAL / SOLD.',
  },
  {
    q: 'Apakah ada biaya langganan bulanan?',
    a: 'Tidak ada biaya bulanan sama sekali! Anda hanya membayar biaya pembuatan satu kali di awal. Untuk tahun kedua dan seterusnya, Anda hanya cukup memperpanjang sewa domain dan hosting tahunan dengan biaya sangat terjangkau (sekitar Rp 350.000 / tahun).',
  },
  {
    q: 'Berapa lama proses pembuatan sampai website saya online?',
    a: 'Rata-rata proses pengerjaan membutuhkan waktu 24 hingga maksimal 48 jam kerja setelah data listing dan informasi agen kami terima lengkap.',
  },
  {
    q: 'Bagaimana jika saya agen independen dan belum punya logo resmi kantor?',
    a: 'Tidak masalah! Tim kami siap membantu membuatkan logo teks inisial agen yang bersih, elegan, dan profesional tanpa tambahan biaya.',
  },
]

export default function ContactSection({ selectedTemplate, onClearSelectedTemplate }) {
  const [formData, setFormData] = useState({
    name: '',
    agency: '',
    whatsapp: '',
    city: '',
    model: selectedTemplate ? selectedTemplate.name : templatesData[0].name,
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

    const message = `Halo Admin WebProperti,%0A%0ASaya ingin memesan / konsultasi pembuatan Website Agen Properti:%0A%0A` +
      `*Nama Agen:* ${encodeURIComponent(formData.name)}%0A` +
      `*Kantor / Broker:* ${encodeURIComponent(formData.agency || '-')}%0A` +
      `*No. WhatsApp:* ${encodeURIComponent(formData.whatsapp)}%0A` +
      `*Area Fokus Listing:* ${encodeURIComponent(formData.city || '-')}%0A` +
      `*Pilihan Model Website:* ${encodeURIComponent(formData.model)}%0A` +
      `*Catatan Tambahan:* ${encodeURIComponent(formData.notes || '-')}%0A%0A` +
      `Mohon info langkah selanjutnya dan estimasi pengerjaannya. Terima kasih!`;

    // Direct WhatsApp dispatch (default number can be configured, using standard admin number)
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
            Mulai Buat Website Properti Anda<br />
            <span>Tingkatkan Kredibilitas & Closing</span>
          </h2>
          <p className="contact__desc">
            Isi formulir di bawah ini untuk pemesanan model website atau hubungi tim konsultan kami secara langsung via chat WhatsApp.
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
                <label htmlFor="name">Nama Lengkap Agen *</label>
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
                    placeholder="Ray White / ERA / Independent"
                    value={formData.agency}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">Area Fokus Listing</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Contoh: BSD City, Gading Serpong, Bali"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="model">Model Template Pilihan</label>
                  <select
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                  >
                    {templatesData.map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.name} ({t.price})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="notes">Catatan atau Usulan Nama Domain (.com / .id)</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="Contoh: Saya ingin domain budisanto-properti.com dan fokus listing rumah secondary mewah."
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn--flame contact__submit-btn">
                <WhatsApp style={{ width: 20, height: 20 }} />
                <span>Kirim Pesanan via WhatsApp Sekarang</span>
              </button>

              <p className="contact__privacy-note">
                🔒 Data Anda aman dan hanya digunakan untuk keperluan pembuatan website serta komunikasi langsung dengan Anda.
              </p>
            </form>
          </div>

          {/* Info & FAQ Side */}
          <div className="contact__info-col">
            <div className="contact__direct-card">
              <h4>Konsultasi Cepat dengan Tim Ahli</h4>
              <p>
                Punya pertanyaan seputar kustomisasi fitur, integrasi CRM, atau ingin melihat demo langsung di smartphone Anda?
              </p>
              <div className="contact__channels">
                <div className="contact__chan-item">
                  <div className="contact__chan-icon">
                    <WhatsApp />
                  </div>
                  <div>
                    <strong>Chat WhatsApp Admin</strong>
                    <span>Respon cepat dalam hitungan menit</span>
                  </div>
                </div>
                <div className="contact__chan-item">
                  <div className="contact__chan-icon">
                    <Clock />
                  </div>
                  <div>
                    <strong>Waktu Pengerjaan Kilat</strong>
                    <span>Online dalam 24 - 48 jam</span>
                  </div>
                </div>
                <div className="contact__chan-item">
                  <div className="contact__chan-icon">
                    <Shield />
                  </div>
                  <div>
                    <strong>Garansi & Panduan Lengkap</strong>
                    <span>Termasuk panduan kelola listing mandiri</span>
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
