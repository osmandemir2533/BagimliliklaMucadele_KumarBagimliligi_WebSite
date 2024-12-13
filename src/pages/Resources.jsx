import React from "react";

const Resources = () => {
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
          marginTop: "20px",
        }}
      >
        Kaynaklar
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
        Projemiz kapsamında, kumar bağımlılığı ve bu bağımlılıkla mücadele konularında çeşitli kaynaklardan faydalandık. Aşağıda, kullandığımız akademik makaleler, kitaplar, raporlar ve çevrimiçi platformların bir listesi yer almaktadır. 
      </p>
      <ul
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#34495e",
          listStyleType: "square",
          marginLeft: "20px",
          marginBottom: "20px",
        }}
      >
        <li>
          <strong>Griffiths, M. D. (2015).</strong> *Gambling addiction: Issues, trends, and controversies*. Annual Review of Clinical Psychology.
        </li>
        <li>
          <strong>APA (2021).</strong> *DSM-5 Diagnostic Criteria for Gambling Disorder*. American Psychiatric Association.
        </li>
        <li>
          <strong>National Council on Problem Gambling (NCPG).</strong> Resmi web sitesi:{" "}
          <a
            href="https://www.ncpgambling.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3498db", textDecoration: "none" }}
          >
            ncpgambling.org
          </a>
        </li>
        <li>
          <strong>WHO (2020).</strong> *Global Report on Behavioral Addictions*.
        </li>
        <li>
          <strong>Online Terapi ve Destek Platformları:</strong>{" "}
          <a
            href="https://www.gamblingtherapy.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3498db", textDecoration: "none" }}
          >
            gamblingtherapy.org
          </a>
        </li>
        <li>
          <strong>Türkiye’de Bağımlılıkla Mücadele Raporları:</strong> Yeşilay Vakfı’nın ilgili raporları ve kampanyaları.
        </li>
        <li>
          <strong>Kumar Bağımlılığı İstatistikleri:</strong> TÜİK (Türkiye İstatistik Kurumu) verileri.
        </li>
      </ul>
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
        Ek Kaynaklar
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
        Ek olarak, kullanıcılarımızın bağımlılıkla mücadele etmelerine destek olacak çevrimiçi araçlar ve rehberler de önerilmektedir. Daha fazla bilgi için kaynaklarımıza göz atabilirsiniz:
      </p>
      <ul
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#34495e",
          listStyleType: "circle",
          marginLeft: "20px",
          marginBottom: "20px",
        }}
      >
        <li>
          <a
            href="https://www.responsiblegambling.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3498db", textDecoration: "none" }}
          >
            Responsible Gambling Council
          </a>
        </li>
        <li>
          <a
            href="https://www.addictioncenter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3498db", textDecoration: "none" }}
          >
            Addiction Center
          </a>
        </li>
        <li>
          <a
            href="https://www.psychologytoday.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3498db", textDecoration: "none" }}
          >
            Psychology Today: Gambling Addiction Articles
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Resources;
