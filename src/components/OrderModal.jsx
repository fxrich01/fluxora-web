import { useState } from 'react'
import { Check, Close, ExternalLink, Shield, WhatsApp } from './icons.jsx'
import { templatesData } from './ModelWebsite.jsx'
import './OrderModal.css'

export default function OrderModal({ template, onClose }) {
  const currentTemplate = template || templatesData[0]

  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [agency, setAgency] = useState('')
  const [city, setCity] = useState('')
  const [domainWish, setDomainWish] = useState('')

  const handleOrder = (e) => {
    e.preventDefault()
    if (!name || !whatsapp) {
      alert('Mohon isi nama dan nomor WhatsApp Anda.')
      return
    }

    const message = `Halo Admin WebProperti,%0A%0ASaya ingin memesan Website Properti Model:*%0A` +
      `📌 *Model:* ${encodeURIComponent(currentTemplate.name)}%0A` +
      `💰 *Harga:* ${encodeURIComponent(currentTemplate.price)}%0A%0A` +
      `*Data Pemesan:*%0A` +
      `- Nama: ${encodeURIComponent(name)}%0A` +
      `- WhatsApp: ${encodeURIComponent(whatsapp)}%0A` +
      `- Broker/Kantor: ${encodeURIComponent(agency || '-')}%0A` +
      `- Area: ${encodeURIComponent(city || '-')}%0A` +
      `- Usulan Domain: ${encodeURIComponent(domainWish || '-')}%0A%0A` +
      `Mohon info rekening pembayaran dan kelengkapan data listingnya. Terima kasih!`;

    const waNumber = '6281280008899'
    window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank')
    onClose()
  }

  return (
    <div className="order-modal-backdrop" onClick={onClose}>
      <div className="order-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="order-modal__close" onClick={onClose} aria-label="Tutup">
          <Close />
        </button>

        <div className="order-modal__header">
          <span className="order-modal__badge">Formulir Pemesanan Langsung</span>
          <h2 className="order-modal__title">Konfirmasi Model Website</h2>
        </div>

        <div className="order-modal__summary">
          <img src={currentTemplate.thumbnail} alt={currentTemplate.name} className="order-modal__thumb" />
          <div className="order-modal__info">
            <span className="order-modal__cat">{currentTemplate.category}</span>
            <h3 className="order-modal__name">{currentTemplate.name}</h3>
            <div className="order-modal__price-row">
              <span className="order-modal__price">{currentTemplate.price}</span>
              <span className="order-modal__note">Sekali bayar • Sudah include Domain & Hosting</span>
            </div>
            <a 
              href={currentTemplate.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="order-modal__demo-link"
            >
              <ExternalLink style={{ width: 14, height: 14 }} />
              <span>Lihat Demo Live ({currentTemplate.demoUrl})</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleOrder} className="order-modal__form">
          <div className="form-group">
            <label>Nama Lengkap Agen *</label>
            <input
              type="text"
              required
              placeholder="Contoh: Budi Santoso"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Nomor WhatsApp *</label>
              <input
                type="tel"
                required
                placeholder="0812xxxxxxx"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Kantor Broker / Agensi</label>
              <input
                type="text"
                placeholder="Ray White / ERA / Brighton / dll"
                value={agency}
                onChange={(e) => setAgency(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Kota / Area Listing</label>
              <input
                type="text"
                placeholder="Contoh: BSD / Gading Serpong"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Usulan Nama Domain (.com / .id)</label>
              <input
                type="text"
                placeholder="namaanda-properti.com"
                value={domainWish}
                onChange={(e) => setDomainWish(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="btn btn--flame order-modal__btn">
            <WhatsApp style={{ width: 20, height: 20 }} />
            <span>Kirim Pesanan ke WhatsApp Admin</span>
          </button>

          <div className="order-modal__trust">
            <Shield style={{ width: 16, height: 16, color: '#ff8a1f' }} />
            <span>Garansi pengerjaan 24 - 48 jam & bimbingan penggunaan</span>
          </div>
        </form>
      </div>
    </div>
  )
}
