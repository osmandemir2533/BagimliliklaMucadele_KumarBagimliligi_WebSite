import React from "react";

const About = () => {
  return (
    <div
      style={{
        padding: "30px",
        margin: "20px auto",
        maxWidth: "900px",
        backgroundColor: "#f4f4f9",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#2c3e50",
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "20px"
        }}
      >
        Hakkımızda
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#34495e",
          textAlign: "justify",
          marginBottom: "20px",
        }}
      >
        Merhaba! Biz, Erzurum Teknik Üniversitesi Bilgisayar Mühendisliği
        bölümü son sınıf öğrencileri <strong>Emre Meral</strong> ve{" "}
        <strong>Osman Demir</strong>. Kumar bağımlılığı gibi önemli bir toplumsal
        soruna dikkat çekmek ve bireylerin bu bağımlılıkla mücadele etmelerine
        yardımcı olmak için bu platformu geliştirdik. Projemiz, sosyal
        sorumluluk bilinciyle hayata geçirilmiş ve bağımlılık konusunda farkındalık
        yaratmayı hedefleyen bir girişimdir.
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#34495e",
          textAlign: "justify",
          marginBottom: "20px",
        }}
      >
        Kumar bağımlılığı, yalnızca bireyi değil, aynı zamanda ailesini ve yakın
        çevresini de derinden etkileyen bir problemdir. Biz, teknolojiyi ve
        mühendislik yeteneklerimizi kullanarak bu soruna çözüm odaklı bir yaklaşım
        sunmak istedik. Platformumuz, kumar bağımlılığı hakkında detaylı bilgiler,
        destek grupları ve bireylerin bağımlılıkla başa çıkmalarına yardımcı olacak
        kaynaklar sunmaktadır.
      </p>
      <h2
        style={{
          fontSize: "2rem",
          color: "#2c3e50",
          marginTop: "30px",
          marginBottom: "15px",
          borderBottom: "2px solid #3498db",
          display: "inline-block",
        }}
      >
        Vizyonumuz
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#34495e",
          textAlign: "justify",
          marginBottom: "20px",
        }}
      >
        Toplumdaki bireylerin kumar bağımlılığı gibi zararlı alışkanlıklardan uzak
        durmalarını sağlayarak, sağlıklı ve bağımsız bir yaşam sürmelerine destek
        olmak. Ayrıca, teknolojiyi sosyal sorunlara çözüm aracı olarak kullanarak
        daha bilinçli bir toplum inşa etmek.
      </p>
      <h2
        style={{
          fontSize: "2rem",
          color: "#2c3e50",
          marginTop: "30px",
          marginBottom: "15px",
          borderBottom: "2px solid #3498db",
          display: "inline-block",
        }}
      >
        Misyonumuz
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#34495e",
          textAlign: "justify",
          marginBottom: "20px",
        }}
      >
        Kumar bağımlılığı konusunda farkındalık yaratmak, bireyleri bu konuda
        bilinçlendirmek ve bağımlılıkla mücadelede yanlarında olmak. Eğitim, bilgi ve
        destek araçlarıyla bağımlı bireylerin hayatlarına pozitif bir etki bırakmak.
      </p>
      <h2
        style={{
          fontSize: "2rem",
          color: "#2c3e50",
          marginTop: "30px",
          marginBottom: "15px",
          borderBottom: "2px solid #3498db",
          display: "inline-block",
        }}
      >
        Ekibimiz
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#34495e",
          textAlign: "justify",
          marginBottom: "20px",
        }}
      >
        Bu proje, iki genç mühendis adayı tarafından tasarlanıp hayata geçirildi.
        <ul
          style={{
            marginLeft: "20px",
            listStyleType: "square",
            color: "#34495e",
          }}
        >
          <li>
            <strong>Emre Meral:</strong> Yazılım geliştirme ve proje yönetimi
            konusunda uzmanlık.
          </li>
          <li>
            <strong>Osman Demir:</strong> Kullanıcı arayüzü tasarımı ve veri
            analitiği alanında uzmanlık.
          </li>
        </ul>
        Birlikte çalışarak, toplumsal sorunlara teknoloji odaklı çözümler
        üretmeye devam edeceğiz.
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#34495e",
          textAlign: "justify",
          marginBottom: "20px",
        }}
      >
        Destek ve geri bildirimleriniz için bizimle iletişime geçmekten çekinmeyin.
        Birlikte daha güzel bir gelecek inşa edebiliriz!
      </p>
    </div>
  );
};

export default About;