import React from "react";
import "./About.css";
import {
  FaLaptopCode,
  FaUniversity,
  FaTools,
  FaProjectDiagram,
  FaRocket,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">
        <FaRocket /> Hakkımda
      </h1>

      <p className="about-intro fade-in">
        Merhaba! Ben <strong>İbrahim Ethem ÖZTÜRK</strong>, teknolojiye olan
        tutkum sayesinde yazılım geliştirme alanında geniş bir bilgi birikimine
        sahip bir geliştiriciyim. Frontend odaklı projelerle başladım, ancak
        zamanla backend teknolojileriyle de ilgilenmeye başladım. Kullanıcı
        odaklı, erişilebilir ve sürdürülebilir çözümler üretmeyi hedefliyorum.
        <br />
        <br />
        Günümüzde teknoloji hızla değişiyor ve ben de bu değişimi takip ederek
        kendimi sürekli olarak geliştiriyorum. Modern JavaScript kütüphaneleri
        ve framework'leri, backend teknolojileri ve veritabanı yönetim
        sistemleri konusunda  bilgi sahibiyim. Web uygulamaları ve
        yazılım çözümleri geliştirmede React, Node.js, Express ve MongoDB gibi
        teknolojilerle projeler üretmekten keyif alıyorum.
        <br />
        <br />
        İşin teknik kısmının yanı sıra, kullanıcı deneyimi (UX) ve kullanıcı
        arayüzü (UI) tasarımı da benim için büyük bir öncelik. Kullanıcıların
        rahatça etkileşimde bulunabileceği, modern ve estetik arayüzler
        tasarlamayı seviyorum.
        <br />
        <br />
        İleriye dönük olarak, daha fazla full-stack proje geliştirmeyi ve
        yazılım mühendisliği alanında derinleşmeyi planlıyorum. Her zaman yeni
        teknolojileri öğrenmeye ve uygulamaya açık bir yazılımcı olarak, iş
        dünyasında kendimi daha da ileriye taşımayı hedefliyorum.
      </p>

      <section className="about-section fade-in">
        <h2>
          <FaUniversity /> Eğitim
        </h2>
        <div className="card">
          Çanakkale 18 Mart Üniversitesi – Bilgisayar Mühendisliği (2021 - Devam
          ediyor)
        </div>
      </section>

      <section className="about-section fade-in">
        <h2>
          <FaLaptopCode /> Staj
        </h2>
        <div className="card">
          <strong>Çanakkale Bilgi İşlem Daire Başkanlığı</strong> – Frontend &
          Backend Developer Stajyeri (07/2024 - 08/2024)
          <ul>
            <li>React & Node.js ile full-stack geliştirme</li>
            <li>Ubuntu sunucu yönetimi, domain yönlendirme</li>
            <li>Git ve GitHub ile sürüm kontrolü</li>
          </ul>
        </div>
      </section>

      <section className="about-section fade-in">
        <h2>
          <FaTools /> Yetenekler
        </h2>
        <div className="skills-grid">
          <SiReact title="React" />
          <SiTailwindcss title="Tailwind CSS" />
          <SiNodedotjs title="Node.js" />
          <SiMongodb title="MongoDB" />
          <SiExpress title="Express.js" />
          <SiHtml5 title="HTML5" />
          <SiCss3 title="CSS3" />
          <SiJavascript title="JavaScript" />
        </div>
      </section>

      <section className="about-section fade-in">
        <h2>
          <FaProjectDiagram /> Projeler
        </h2>
        <div className="card-grid">
          <div className="card">
            <strong>Shop AI</strong> – Yapay zeka destekli e-ticaret uygulaması
            <br />
            <a href="https://shop.iethem.com" target="_blank" rel="noreferrer">
              shop.iethem.com
            </a>
          </div>
          <div className="card">
            <strong>Notdefteri App</strong> – Local storage ile basit not
            uygulaması
          </div>
          <div className="card">
            <strong>Instagram Clone</strong> – Sosyal medya klonu (giriş,
            paylaşım, yorum vs.)
          </div>
          <div className="card">
            <strong>iethem.com</strong> – Kendi portfolyo web sitem
          </div>
          <div className="card">
            <strong>News App</strong> – Haber API'si kullanarak haber uygulaması
          </div>
          <div className="card">
            <strong>Weather App</strong> – Hava durumu verilerini API ile
            gösteren uygulama
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
