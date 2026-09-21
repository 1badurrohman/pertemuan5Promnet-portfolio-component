function App() {
  const colors = {
    text: "#292626",
    brown: "#7A5230",
    beige: "#B9AC96",
    red: "#8F2929",
  };

  const projectData = [
    { image: "/poster open po lanyard.jpg.jpeg", title: "Open PO Lanyard" },
    { image: "/poster open po kemeja.jpg.jpeg", title: "Open PO Kemeja" },
    { image: "/poster open po kemeja dan kahim.jpeg", title: "Open PO Kemeja & Kahim" },
    { image: "/poster open po snack.jpg.jpeg", title: "Open PO Snack" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url('/background megamendung.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", 
        color: colors.text,
        fontFamily: "Arial, sans-serif",
      }}
    >

      <nav
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "20px 7%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: `1px solid ${colors.beige}`,
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "22px",
            fontWeight: "bold",
            color: colors.brown,
          }}
        >
          Ihda Ibadurrohman
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <button onClick={() => scrollToSection("home")} style={navStyle(colors)}>
            Home
          </button>
          <button onClick={() => scrollToSection("about")} style={navStyle(colors)}>
            About
          </button>
          <button onClick={() => scrollToSection("projects")} style={navStyle(colors)}>
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} style={navStyle(colors)}>
            Contact
          </button>
        </div>
      </nav>

      <section
        id="home"
        style={{
          minHeight: "650px",
          padding: "70px 8%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "80px",
        }}
      >
        <div
          style={{
            width: "42%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: "10px",
              border: `2px solid ${colors.brown}`,
              borderRadius: "50%",
              backgroundColor: "transparent", 
            }}
          >
            <img
              src="/Foto Profile Ihda Ibadurrohman nobackground.png"
              alt="Foto Ihda Ibadurrohman"
              style={{
                width: "330px",
                height: "330px",
                objectFit: "cover",
                borderRadius: "50%",
                display: "block",
              }}
            />
          </div>
        </div>

        <div style={{ width: "50%", textAlign: "left" }}>
          <p
            style={{
              margin: "0 0 8px",
              color: colors.brown,
              fontSize: "20px",
              letterSpacing: "3px",
              fontWeight: "bold",
            }}
          >
            HELLO, I'M
          </p>
          <h1
            style={{
              margin: 0,
              fontFamily: "Georgia, serif",
              fontSize: "72px",
              lineHeight: "0.95",
              color: colors.red,
              letterSpacing: "2px",
            }}
          >
            IHDA
          </h1>
          <h2
            style={{
              margin: "5px 0 20px",
              fontFamily: "Georgia, serif",
              fontSize: "38px",
              lineHeight: "1",
              color: colors.brown,
              letterSpacing: "1px",
            }}
          >
            IBADURROHMAN
          </h2>
          <p style={{ fontSize: "20px", marginBottom: "30px", color: colors.text }}>
            Computer Science Education Student
          </p>
          <button
            onClick={() => scrollToSection("projects")}
            style={{
              padding: "14px 25px",
              backgroundColor: colors.red,
              color: "#FFFFFF",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
              letterSpacing: "1px",
              borderRadius: "50px",
            }}
          >
            VIEW MY PROJECTS →
          </button>
        </div>
      </section>

      <section id="about" style={{ padding: "90px 8%", backgroundColor: "transparent" }}>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>

          <p
            style={{
              margin: 0,
              color: colors.red,
              fontSize: "14px",
              fontWeight: "bold",
              letterSpacing: "3px",
            }}
          >
            ABOUT ME
          </p>
          <h2
            style={{
              margin: "10px 0 40px",
              fontFamily: "Georgia, serif",
              fontSize: "45px",
              color: colors.brown,
            }}
          >
            Tentang Saya
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "60px",
              alignItems: "flex-start",
            }}
          >
            <div style={{ width: "65%", lineHeight: "1.8", fontSize: "16px" }}>
              <p style={{ marginTop: 0 }}>
                Saya adalah seorang mahasiswa Pendidikan Ilmu Komputer
                yang memiliki ketertarikan besar terhadap dunia teknologi
                sekaligus bisnis. Selain menjalani perkuliahan, saya aktif
                dalam Himpunan Mahasiswa Program Studi melalui divisi
                Business Development, di mana saya berkontribusi dalam
                mengembangkan dan mempromosikan produk himpunan melalui
                desain poster yang menarik.
              </p>
              <p>
                Saat ini, saya juga sedang membangun bisnis bersama teman
                yang bergerak di bidang top up game, aplikasi premium,
                serta berbagai kebutuhan digital.
              </p>
              <p>
                Ketertarikan saya terhadap bisnis dan teknologi menjadi
                salah satu alasan saya memilih Pendidikan Ilmu Komputer,
                karena saya percaya bahwa terdapat tiga bidang yang akan
                selalu dibutuhkan dan terus berkembang, yaitu kesehatan,
                teknologi, dan pendidikan.
              </p>
              <p>
                Bagi saya, mempelajari ilmu komputer bukan hanya tentang
                memahami teknologi, tetapi juga bagaimana memanfaatkannya
                untuk menciptakan peluang, menyelesaikan masalah, dan
                membangun sesuatu yang memiliki nilai.
              </p>
            </div>

            <div
              style={{
                width: "35%",
                borderLeft: `2px solid ${colors.beige}`,
                paddingLeft: "30px",
              }}
            >
              <InfoRow label="NAME" value="Ihda Ibadurrohman" colors={colors} />
              <InfoRow label="PROGRAM STUDI" value="Pendidikan Ilmu Komputer" colors={colors} />
              <InfoRow label="UNIVERSITAS" value="Universitas Pendidikan Indonesia" colors={colors} />
              <InfoRow label="ANGKATAN" value="2025" colors={colors} />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" style={{ padding: "90px 7%", backgroundColor: "transparent" }}>
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <p
            style={{
              margin: 0,
              color: colors.red,
              fontSize: "14px",
              fontWeight: "bold",
              letterSpacing: "3px",
            }}
          >
            MY WORK
          </p>
          <h2
            style={{
              margin: "10px 0 40px",
              fontFamily: "Georgia, serif",
              fontSize: "45px",
              color: colors.brown,
            }}
          >
            Projects
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "25px",
              justifyContent: "space-between",
            }}
          >
            {projectData.map((project, index) => (
              <div
                key={index}
                style={{
                  width: "23%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "340px", 
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "24px", 
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />

                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      color: colors.red,
                      letterSpacing: "1px",
                    }}
                  >
                    PROJECT 0{index + 1}
                  </p>
                  <h3
                    style={{
                      margin: "7px 0 0",
                      fontFamily: "Georgia, serif",
                      color: colors.brown,
                      fontSize: "18px",
                      lineHeight: "1.4",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 7%", backgroundColor: "transparent" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            gap: "30px",
          }}
        >
          <div id="organization" style={{ flex: 1, padding: "35px" }}>
            <p style={{ color: colors.red, fontSize: "13px", letterSpacing: "2px" }}>
              EXPERIENCE
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", color: colors.brown, fontSize: "32px" }}>
              Organization
            </h2>
            <h3>BEM Kemakom</h3>
            <p style={{ lineHeight: "1.7" }}>
              Pengalaman berkontribusi dalam organisasi mahasiswa
              dan kegiatan kepanitiaan sebagai bagian dari proses
              belajar, bekerja sama, dan mengembangkan kemampuan.
            </p>
            <button onClick={() => scrollToSection("contact")} style={outlineButton(colors)}>
              Lihat Selengkapnya →
            </button>
          </div>

          <div id="business" style={{ flex: 1, padding: "35px" }}>
            <p style={{ color: colors.red, fontSize: "13px", letterSpacing: "2px" }}>
              SIDE PROJECT
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", color: colors.brown, fontSize: "32px" }}>
              Business
            </h2>
            <h3>Digital Business</h3>
            <p style={{ lineHeight: "1.7" }}>
              Membangun bisnis bersama teman yang bergerak di bidang
              top up game, aplikasi premium, dan berbagai kebutuhan
              digital.
            </p>
            <button onClick={() => scrollToSection("contact")} style={outlineButton(colors)}>
              Lihat Selengkapnya →
            </button>
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          padding: "80px 7%",
          backgroundColor: "transparent",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: colors.red,
            fontSize: "13px",
            letterSpacing: "3px",
            fontWeight: "bold",
          }}
        >
          GET IN TOUCH
        </p>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            color: colors.brown,
            fontSize: "45px",
            margin: "10px 0 15px",
          }}
        >
          Let's Connect
        </h2>
        <p>Temukan saya melalui media sosial.</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "30px",
          }}
        >
          <a
            href="https://wa.me/+6282129385856"
            target="_blank"
            rel="noreferrer"
            style={socialStyle(colors)}
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/i.ihdaa_/"
            target="_blank"
            rel="noreferrer"
            style={socialStyle(colors)}
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@1badurrohman"
            target="_blank"
            rel="noreferrer"
            style={socialStyle(colors)}
          >
            TikTok
          </a>
        </div>
      </section>

      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: colors.brown,
          color: "#FFFFFF",
          fontSize: "13px",
        }}
      >
        © 2026 Ihda Ibadurrohman
      </footer>

    </div>
  );
}

function InfoRow({ label, value, colors }) {
  return (
    <div style={{ marginBottom: "25px" }}>
      <p
        style={{
          margin: "0 0 5px",
          color: colors.red,
          fontSize: "11px",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        {label}
      </p>
      <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.5" }}>
        {value}
      </p>
    </div>
  );
}

function navStyle(colors) {
  return {
    border: "none",
    background: "transparent",
    color: colors.brown,
    cursor: "pointer",
    fontSize: "14px",
    padding: "5px",
  };
}

function outlineButton(colors) {
  return {
    padding: "10px 18px",
    border: `1px solid ${colors.brown}`,
    background: "transparent",
    color: colors.brown,
    cursor: "pointer",
    fontSize: "13px",
    borderRadius: "50px", 
  };
}

function socialStyle(colors) {
  return {
    color: colors.red,
    textDecoration: "none",
    fontWeight: "bold",
    borderBottom: `1px solid ${colors.red}`,
    paddingBottom: "4px",
  };
}

export default App;