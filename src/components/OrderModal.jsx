import { useState } from 'react'
import { Check, Close, ExternalLink, House, Shield, WhatsApp } from './icons.jsx'
import { templatesData } from './ModelWebsite.jsx'
import './OrderModal.css'

export default function OrderModal({ template, onClose }) {
  const currentTemplate = template || templatesData[0]

  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [agency, setAgency] = useState('')
  const [city, setCity] = useState('')
  const [domainWish, setDomainWish] = useState('')
  const [selectedModelId, setSelectedModelId] = useState(currentTemplate.id)

  const activeTemplate = templatesData.find((t) => t.id === selectedModelId) || currentTemplate

  const handleOrder = (e) => {
    e.preventDefault()
    if (!name || !whatsapp) {
      alert('Mohon isi nama dan nomor WhatsApp Anda.')
      return
    }

    const message = `Halo Admin WebProperti,%0A%0ASaya ingin memesan Website Properti:%0A%0A` +
      `📌 *Paket:* ${encodeURIComponent(activeTemplate.tier)} (${encodeURIComponent(activeTemplate.price)} ${encodeURIComponent(activeTemplate.pricePeriod)})%0A` +
      `🎨 *Pilihan Model:* ${encodeURIComponent(activeTemplate.name)}%0A` +
      `🏡 *Spesifikasi:* Semua jenis properti (Rumah, Ruko, Apartemen, Tanah/Kavling, Gudang)%0A%0A` +
      `*Data Pemesan:*%0A` +
      `- Nama: ${encodeURIComponent(name)}%0A` +
      `- WhatsApp: ${encodeURIComponent(whatsapp)}%0A` +
      `- Broker / Kantor Agency: ${encodeURIComponent(agency || '-')}%0A` +
      `- Kota / Area: ${encodeURIComponent(city || '-')}%0A` +
      `- Usulan Domain: ${encodeURIComponent(domainWish || '-')}%0A%0A` +
      `Mohon info rekening pembayaran dan format pengiriman data listing. Terima kasih!`;

    const waNumber = '628119191175'
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
          <span className="order-modal__badge">Formulir Pemesanan Resmi</span>
          <h2 className="order-modal__title">Pemesanan Website Properti</h2>
        </div>

        <div className="order-modal__summary">
          <img src={activeTemplate.thumbnail} alt={activeTemplate.name} className="order-modal__thumb" />
          <div className="order-modal__info">
            <div className="order-modal__tier-row">
              <span className={`order-modal__tier-tag ${activeTemplate.tier === 'Kantor Agency' ? 'tag--agency' : 'tag--solo'}`}>
                {activeTemplate.tier}
              </span>
              <span className="order-modal__cat">{activeTemplate.target}</span>
            </div>
            <h3 className="order-modal__name">{activeTemplate.name}</h3>
            <div className="order-modal__price-row">
              <span className="order-modal__price">{activeTemplate.price}</span>
              <span className="order-modal__period">{activeTemplate.pricePeriod}</span>
            </div>
            <span className="order-modal__note">
              Sudah termasuk Nama Domain .com + Cloud Hosting selama 1 Tahun
            </span>
            <div className="order-modal__spec-note">
              <House style={{ width: 14, height: 14, color: '#ff8a1f' }} />
              <span>Bisa listing Rumah, Ruko, Apartemen, Kavling, Tanah, Gudang, dll.</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleOrder} className="order-modal__form">
          <div className="form-group">
            <label>Model Template & Paket yang Dipilih</label>
            <select
              value={selectedModelId}
              onChange={(e) => setSelectedModelId(e.target.value)}
              className="order-modal__select"
            >
              <optgroup label="Paket Solo Agen (Rp 1.500.000 / tahun)">
                {templatesData.filter((t) => t.tier === 'Solo Agen').map((t) => (
                  <option key={t.id} value={t.id}>
                    [Solo Agen] {t.name} — Rp 1.500.000 / thn
                  </option>
                ))}
              </optgroup>
              <optgroup label="Paket Kantor Agency (Rp 2.250.000 / tahun)">
                {templatesData.filter((t) => t.tier === 'Kantor Agency').map((t) => (
                  <option key={t.id} value={t.id}>
                    [Kantor Agency] {t.name} — Rp 2.250.000 / thn
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          <div className="form-group">
            <label>Nama Lengkap Pemesan *</label>
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
            <span>Garansi pengerjaan 24 - 48 jam & bimbingan kelola listing mandiri</span>
          </div>
        </form>
      </div>
    </div>
  )
}
