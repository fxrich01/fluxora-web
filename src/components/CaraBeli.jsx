import { ArrowRight, Check, Clock, Shield, WhatsApp } from './icons.jsx'
import './CaraBeli.css'

const steps = [
  {
    num: '01',
    title: 'Pilih Model Template',
    desc: 'Tentukan model website dari katalog kami yang paling sesuai dengan spesialisasi listing Anda (Villa, Cluster, Rumah Mewah, atau Profil Agen).',
    detail: 'Bisa live preview langsung dari ponsel Anda sebelum memutuskan.',
  },
  {
    num: '02',
    title: 'Kirim Data & Listing Anda',
    desc: 'Kirimkan data dasar: Nama Anda, foto profil, logo kantor broker (ERA, Ray White, Brighton, dll), nomor WhatsApp, serta listing pertama.',
    detail: 'Bisa dikirim dengan mudah via chat WhatsApp admin kami.',
  },
  {
    num: '03',
    title: 'Setup Domain & Integrasi',
    desc: 'Tim kami mengonfigurasi nama domain pilihan (.com / .id), cloud hosting super cepat, SSL keamanan, SEO Google, dan tombol survey WA.',
    detail: 'Dikerjakan langsung oleh tim web developer berpengalaman.',
  },
  {
    num: '04',
    title: 'Website Online & Siap Closing',
    desc: 'Dalam 24-48 jam website Anda siap digunakan. Pasang link di bio Instagram, TikTok, Google Maps, dan bagikan ke calon buyer!',
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
            <span>Agen Properti Profesional</span>
          </h2>
          <p className="steps__desc">
            Anda tidak perlu repot coding atau paham teknis. Cukup pilih modelnya, tim kami yang akan mengerjakan semuanya hingga website Anda aktif dan siap dipakai promosi.
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
            <h4>Garansi Pelayanan & Bimbingan Penggunaan</h4>
            <p>
              Setiap pemesanan website sudah termasuk <strong>Panduan Video Menambah Listing Baru</strong> secara mandiri dan dukungan konsultasi teknis via WhatsApp.
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
