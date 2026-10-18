import Navbar from "./components/Navbar";
import MenuSection from "./components/MenuSection";
import FaqSection from "./components/FaqSection";

const stats = [
  { value: "7+", label: "Daerah Asal Kopi" },
  { value: "50+", label: "Menu Racikan" },
  { value: "3", label: "Tahun Beroperasi" },
];

export default function Home() {
  return (
    <>
      <header className="student-banner text-center">
        <h1>Jessica Jeslyn Sutanto</h1>
        <p>NIM: 535250093</p>
      </header>

      <Navbar />

      <section id="beranda" className="hero text-center">
        <div className="container">
          <div className="mx-auto hero-text">
            <h2 className="display-5">
              Secangkir Nusantara,
              <br />
              Diseduh dengan Cerita
            </h2>
            <p className="lead my-4">
              Kedai kopi rumahan yang mengangkat biji kopi asli daerah. Diseduh hangat, disajikan dekat dengan rumahmu.
            </p>
            <a href="#menu" className="btn btn-caramel btn-lg">
              Lihat Menu
            </a>
          </div>
        </div>
      </section>

      <main>
        <MenuSection />

        <section id="tentang" className="about-section py-5">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <h2>Cerita Kami</h2>
                <p className="text-justify">
                  Kopi Nusantara dimulai dari dapur rumah kecil dengan satu mesin seduh manual. Kami percaya kopi terbaik datang dari biji yang jujur dan proses yang sabar. Setiap cangkir yang kami sajikan membawa cerita petani kopi dari berbagai daerah di Indonesia.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="row g-2 text-center">
                  {stats.map((s) => (
                    <div className="col-4" key={s.label}>
                      <div className="stat">
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection />
      </main>

      <footer id="kontak" className="site-footer pt-5 pb-3">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h3>Kopi Nusantara</h3>
              <p>Kedai kopi rumahan, dekat dengan rasa dan rumahmu.</p>
            </div>
            <div className="col-md-4">
              <h3>Kontak</h3>
              <p>WhatsApp: 0812-3456-7890</p>
              <p>Email: ngopi@kopinusantara.id</p>
            </div>
            <div className="col-md-4">
              <h3>Jam Buka</h3>
              <p>Setiap hari, Pukul 08.00 - 21.00 WIB</p>
            </div>
          </div>
          <p className="copyright">© 2026 Kopi Nusantara</p>
        </div>
      </footer>
    </>
  );
}
