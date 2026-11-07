import { useState } from 'react'
import { ArrowRight, Close, Sparkles } from './icons.jsx'
import './BlogSection.css'

export const blogArticles = [
  {
    id: 'alasan-agen-punya-website',
    title: '5 Alasan Mengapa Agen Properti Modern Wajib Punya Website Sendiri di 2026',
    date: '7 November 2026',
    category: 'Strategi Digital',
    readTime: '4 menit baca',
    snippet: 'Mengapa mengandalkan media sosial atau portal umum saja tidak cukup untuk closing properti bernilai miliaran rupiah?',
    image: '/images/cliff-ocean.webp',
    content: `
      <p>Banyak agen properti bertanya: <em>"Saya sudah punya Instagram, TikTok, dan pasang iklan di portal properti umum, apakah masih butuh website sendiri?"</em> Jawabannya adalah <strong>sangat butuh</strong>, terutama jika Anda ingin membidik segmen pembeli rumah primer, secondary mewah, maupun investor.</p>
      
      <h3>1. Kredibilitas & Kepercayaan di Mata Buyer High-End</h3>
      <p>Membeli rumah adalah keputusan finansial terbesar dalam hidup seseorang. Calon pembeli yang ingin mengeluarkan dana 1 milyar hingga puluhan milyar rupiah selalu mencari bukti bahwa agen yang mereka hubungi adalah profesional berlisensi dan terpercaya. Website berdomain resmi (contoh: <em>namaagen.com</em>) langsung membedakan Anda dari agen amatir.</p>

      <h3>2. Bebas dari Iklan Kompetitor</h3>
      <p>Saat Anda membagikan tautan portal publik kepada prospek, di samping dan bawah listing Anda terdapat puluhan rekomendasi listing dari agen lain. Di website pribadi Anda, 100% perhatian calon buyer hanya tertuju pada listing dan nomor WhatsApp Anda.</p>

      <h3>3. Menjadi Rumah untuk Seluruh Portofolio Anda</h3>
      <p>Bio media sosial hanya menyediakan satu link. Dengan website, Anda dapat mengorganisir listing berdasarkan lokasi (misal: BSD, Gading Serpong, Bali, Surabaya), rentang harga, dan status (Jual / Sewa) secara rapi.</p>

      <h3>4. Menangkap Prospek Organik dari Google</h3>
      <p>Orang yang berniat serius membeli properti sering kali mencari lewat Google: <em>"Rumah 2 lantai siap huni Gading Serpong"</em>. Website yang teroptimasi SEO lokal akan menampilkan listing Anda di halaman depan pencarian Google tanpa Anda harus terus-menerus membayar biaya iklan harian.</p>

      <h3>5. Meningkatkan Nilai Tawar di Mata Pemilik Rumah (Vendor/Owner)</h3>
      <p>Saat Anda ingin mendapatkan titip jual (exclusive listing) dari pemilik properti, Anda bisa menunjukkan bahwa Anda memiliki kanal pemasaran website eksklusif sendiri. Pemilik rumah akan jauh lebih percaya menitipkan properti mewahnya kepada Anda!</p>
    `,
  },
  {
    id: 'trik-closing-survey-lokasi',
    title: 'Cara Praktis Mengubah Pengunjung Website Menjadi Buyer yang Siap Survey Lokasi',
    date: '3 November 2026',
    category: 'Tips Closing',
    readTime: '5 menit baca',
    snippet: 'Langkah taktis mendesain halaman listing properti agar pengunjung tergerak langsung menghubungi Anda via WhatsApp.',
    image: '/images/hero-villa.webp',
    content: `
      <p>Trafik pengunjung yang banyak tidak ada artinya jika tidak terjadi kontak. Tujuan utama website properti bukanlah sekadar etalase cantik, melainkan <strong>mesin konversi janji temu survey lokasi</strong>.</p>
      
      <h3>1. Pasang Tombol WhatsApp Mengambang (Floating Action Button)</h3>
      <p>Pastikan tombol chat WhatsApp selalu terlihat di sudut kanan bawah layar ponsel pengunjung. Berdasarkan data, lebih dari 78% calon buyer di Indonesia lebih memilih bertanya langsung lewat chat santai dibanding mengisi form panjang.</p>

      <h3>2. Tampilkan Format Pesan Otomatis yang Spesifik</h3>
      <p>Ketika tombol chat diklik, buat pesan pembuka otomatis seperti: <em>"Halo Pak Budi, saya tertarik dengan listing [Nama Properti] harga [Harga]. Apakah unitnya masih tersedia untuk jadwal survey?"</em>. Ini mempermudah calon pembeli memulai obrolan tanpa ragu.</p>

      <h3>3. Sertakan Informasi Vital: SHM & Simulasi KPR</h3>
      <p>Dua pertanyaan paling sering diajukan pembeli adalah status sertifikat tanah dan estimasi angsuran per bulan. Menyediakan kalkulator KPR dan kejelasan legalitas di halaman listing akan menyaring prospek yang benar-benar siap secara finansial.</p>

      <h3>4. Foto Berkualitas Tinggi & Denah Tata Ruang</h3>
      <p>Gunakan foto sudut lebar (wide-angle) yang terang dan denah tata ruang (floor plan). Pembeli ingin membayangkan alur ruangan sebelum mereka meluangkan waktu datang ke lokasi fisik.</p>
    `,
  },
  {
    id: 'seo-lokal-listing-properti',
    title: 'Panduan SEO Lokal: Agar Listing Rumah Anda Muncul di Halaman Pertama Google',
    date: '28 Oktober 2026',
    category: 'Digital Marketing',
    readTime: '6 menit baca',
    snippet: 'Strategi mudah memenangkan pencarian Google lokal di area spesialisasi wilayah properti Anda.',
    image: '/images/jakson-house.webp',
    content: `
      <p>Search Engine Optimization (SEO) lokal adalah senjata rahasia agen properti top producer untuk mendapatkan aliran pembeli tanpa bergantung pada promosi berbayar tanpa henti.</p>

      <h3>1. Judul Listing yang Menjawab Niat Pencarian (Search Intent)</h3>
      <p>Hindari judul generik seperti "Dijual Rumah Cantik". Gunakan pola berbasis lokasi dan spesifikasi: <strong>[Jenis Properti] + [Karakteristik Unik] + [Kawasan/Cluster] + [Kota]</strong>, contoh: <em>"Dijual Rumah Hook Minimalis 2 Lantai Dekat Akses Tol BSD City"</em>.</p>

      <h3>2. Kecepatan Loading di Perangkat Mobile</h3>
      <p>Google memprioritaskan website mobile yang terbuka dalam waktu di bawah 2 detik. Template kami dibangun dengan kode ultra-ringan (Next.js & Vite) sehingga calon buyer tidak bosan menunggu dan langsung melihat gambar properti Anda.</p>

      <h3>3. Tautkan dengan Google Maps & Fasilitas Sekitar</h3>
      <p>Pembeli rumah membeli lingkungannya juga! Cantumkan jarak tempuh ke pintu tol terdekat, rumah sakit, sekolah favorit, dan pusat perbelanjaan di deskripsi listing Anda.</p>
    `,
  },
]

export default function BlogSection() {
  const [activeArticle, setActiveArticle] = useState(null)

  return (
    <section className="blog-section" id="blog">
      <div className="blog__container">
        <div className="blog__header">
          <div className="blog__tag">
            <Sparkles style={{ width: 15, height: 15 }} />
            <span>Edukasi & Strategi Agen Properti</span>
          </div>
          <h2 className="blog__title">
            Wawasan & Tips Digital Marketing<br />
            <span>Untuk Melejitkan Penjualan Properti</span>
          </h2>
          <p className="blog__desc">
            Pelajari strategi terbaru seputar personal branding, teknik closing survey lokasi, dan optimasi digital khusus agen properti Indonesia.
          </p>
        </div>

        <div className="blog__grid">
          {blogArticles.map((article) => (
            <article key={article.id} className="blog-card">
              <div className="blog-card__media">
                <img src={article.image} alt={article.title} className="blog-card__img" loading="lazy" />
                <span className="blog-card__cat">{article.category}</span>
              </div>
              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="blog-card__title">{article.title}</h3>
                <p className="blog-card__snippet">{article.snippet}</p>
                <button
                  type="button"
                  className="blog-card__btn"
                  onClick={() => setActiveArticle(article)}
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight style={{ width: 15, height: 15 }} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeArticle && (
        <div className="blog-modal-backdrop" onClick={() => setActiveArticle(null)}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="blog-modal__close"
              onClick={() => setActiveArticle(null)}
              aria-label="Tutup Artikel"
            >
              <Close />
            </button>

            <div className="blog-modal__header">
              <div className="blog-modal__meta">
                <span className="blog-modal__badge">{activeArticle.category}</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <h2 className="blog-modal__title">{activeArticle.title}</h2>
            </div>

            <div className="blog-modal__media">
              <img src={activeArticle.image} alt={activeArticle.title} />
            </div>

            <div 
              className="blog-modal__content"
              dangerouslySetInnerHTML={{ __html: activeArticle.content }}
            />

            <div className="blog-modal__foot">
              <p>💡 <em>Ingin memiliki website profesional seperti yang dibahas di artikel ini?</em></p>
              <a href="#model-website" className="btn btn--flame" onClick={() => setActiveArticle(null)}>
                Pilih Model Website Anda Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
