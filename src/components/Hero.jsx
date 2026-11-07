import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Globe, partners } from './icons.jsx'
import './Hero.css'

const stats = [
  { value: '350+', label: 'Agen Properti Bergabung' },
  { value: '24 Jam', label: 'Website Langsung Online' },
]

const bars = [34, 52, 44, 70, 88]

export default function Hero() {
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const play = video.play()
    if (play?.catch) play.catch(() => {})

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      setReady(true)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero__media">
        <video
          ref={videoRef}
          className={`hero__video ${ready ? 'is-ready' : ''}`}
          src="/hero-loop.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onCanPlay={() => setReady(true)}
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__rules" aria-hidden="true">
          <span /><span /><span />
        </div>
      </div>

      <div className="hero__inner">
        <div className="hero__lead">
          <p className="hero__note">
            <Globe className="hero__note-icon" />
            <span>Platform Pembuatan Website Khusus<br />Agen & Broker Properti Indonesia</span>
          </p>

          <h1 className="hero__title">
            Website Eksklusif<br />
            Khusus Agen Properti<br />
            Bukan Sekadar <em>Brosur</em>
          </h1>

          <p className="hero__sub">
            Tingkatkan kredibilitas personal branding Anda, pamerkan listing rumah & apartemen secara elegan, dan terima prospek pembeli terverifikasi langsung ke WhatsApp Anda 24/7.
          </p>

          <div className="hero__cta">
            <a className="btn btn--flame hero__go" href="#model-website">
              Pilih Model Website
              <span className="hero__go-dot" aria-hidden="true"><ArrowRight /></span>
            </a>

            <div className="hero__proof">
              <div className="hero__faces" aria-hidden="true">
                <i style={{ '--a': '#ff7a3d', '--b': '#ffb27a' }} />
                <i style={{ '--a': '#6f4bd8', '--b': '#a98cff' }} />
                <i style={{ '--a': '#1f9ea8', '--b': '#63d6df' }} />
                <i style={{ '--a': '#d8434b', '--b': '#ff8a8f' }} />
              </div>
              <span className="hero__proof-text">
                <strong>350+ Agen Properti Aktif</strong>
                Terintegrasi Chat WhatsApp
              </span>
            </div>
          </div>

          <ul className="hero__stats">
            {stats.map((stat) => (
              <li key={stat.label} className="stat">
                <span className="stat__mark" aria-hidden="true">*</span>
                <span className="stat__value">{stat.value}</span>
                <span className="stat__label">{stat.label}</span>
                <span className="stat__rule" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero__ghost" aria-hidden="true">
          <div className="ghost__row">
            <div className="ghost__bars">
              {bars.map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <p className="ghost__kpi"><strong>+68%</strong>Konversi Leads<br />Prospek Survey</p>
          </div>
          <h2 className="ghost__title">Lebih Kredibel & Cepat Closing</h2>
          <p className="ghost__copy">
            Calon buyer lebih yakin bertransaksi properti bernilai miliaran ketika Anda memiliki website berdomain profesional sendiri.
          </p>
        </aside>
      </div>

      <div className="hero__foot">
        <span className="hero__watermark" aria-hidden="true">ESTATE</span>
        <div className="hero__partners">
          <span className="hero__partners-label">Dipercaya Agen dari Jaringan</span>
          <ul>
            {partners.map((partner) => (
              <li key={partner.name}>
                {partner.mark}
                <span>{partner.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
