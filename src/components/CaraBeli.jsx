import { ArrowRight, Check, Clock, House, Shield, WhatsApp } from './icons.jsx'
import './CaraBeli.css'

const steps = [
  {
    num: '01',
    title: 'Pilih Paket & Model',
    desc: 'Tentukan paket kebutuhan Anda: Solo Agen (Rp 1,5 Jt/thn) atau Kantor Agency (Rp 2,25 Jt/thn). Seluruh model bisa untuk listing Rumah, Ruko, Apartemen, Tanah, Kavling, maupun Gudang.',
    detail: 'Bisa live preview langsung dari smartphone Anda sebelum memesan.',
  },
  {
    num: '02',
    title: 'Kirim Data Profil & Listing',
    desc: 'Kirimkan data dasar: Nama Anda/Kantor, foto profil/tim, logo broker (Ray White, ERA, Brighton, dll), nomor WhatsApp, serta listing properti pertama Anda.',
    detail: 'Bisa dikirim secara mudah dan praktis via chat WhatsApp admin.',
  },
  {
    num: '03',
    title: 'Setup Domain & Sistem Kilat',
    desc: 'Tim kami mengonfigurasi nama domain (.com / .id), cloud hosting performa tinggi, SSL keamanan, integrasi WhatsApp CRM, dan kalkulator KPR.',
    detail: 'Dikerjakan langsung secara profesional oleh tim developer.',
  },
  {
    num: '04',
    title: 'Website Online & Siap Closing',
    desc: 'Dalam 24-48 jam website Anda langsung live di internet. Pasang link di bio Instagram, TikTok, status WhatsApp, dan kartu nama Anda!',
    detail: 'Siap menerima leads prospek pembeli terverifikasi setiap hari.',
  },
]

export default function CaraBeli({ onOpenOrder }) {
  return (
    <section className="steps-section" id="cara-beli">
      <div className="steps__container">
        <div className="steps__header">
          <div className="steps__tag">
            <Clock style={{ width: 15, height: 15 }} />
            <span>Alur Pemesanan Sangat Praktis</span>
          </div>
          <h2 className="steps__title">
            Cara Mudah Memiliki Website<br />
            <span>Agen & Kantor Agency Properti</span>
          </h2>
          <p className="steps__desc">
            Anda tidak perlu repot coding atau paham teknis. Cukup pilih paketnya (Solo Agen Rp 1,5 Jt/thn atau Kantor Agency Rp 2,25 Jt/thn), tim kami yang akan mengerjakan semuanya hingga online.
          </p>
        </div>

        <div className="steps__grid">
          {steps.map((st) => (
            <div key={st.num} className="step-card">
              <div className="step-card__num">{st.num}</div>
              <h3 className="step-card__title">{st.title}</h3>
              <p className="step-card__desc">{st.desc}</p>
              <div className="step-card__detail">
                <Check className="step-card__check" />
                <span>{st.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="steps__guarantee">
          <div className="steps__guarantee-icon">
            <Shield style={{ width: 28, height: 28 }} />
          </div>
          <div className="steps__guarantee-text">
            <h4>Garansi Pelayanan & Bimbingan Kelola Listing</h4>
            <p>
              Setiap pemesanan website sudah termasuk <strong>Panduan Video Menambah & Mengedit Listing Baru</strong> secara mandiri dan dukungan konsultasi teknis via WhatsApp.
            </p>
          </div>
          <button 
            type="button" 
            className="btn btn--flame steps__guarantee-cta"
            onClick={() => onOpenOrder && onOpenOrder(null)}
          >
            <WhatsApp style={{ width: 17, height: 17 }} />
            <span>Pesan Website Sekarang</span>
          </button>
        </div>
      </div>
    </section>
  )
}
