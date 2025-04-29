import React from 'react';
import './About.css';
import { FaLaptopCode, FaUniversity, FaTools, FaProjectDiagram, FaRocket } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from 'react-icons/si';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title"><FaRocket /> Hakkımda</h1>

      <p className="about-intro fade-in">
        Selam! Ben <strong>İbrahim Ethem ÖZTÜRK</strong>, kullanıcı odaklı arayüzler geliştiriyor; modern teknolojilerle performanslı uygulamalar üretiyorum. Frontend dışında backend'e de ilgim büyük!
      </p>

      <section className="about-section fade-in">
        <h2><FaUniversity /> Eğitim</h2>
        <div className="card">
          Çanakkale 18 Mart Üniversitesi – Bilgisayar Mühendisliği (2021 - Devam ediyor)
        </div>
      </section>

      <section className="about-section fade-in">
        <h2><FaLaptopCode /> Staj</h2>
        <div className="card">
          <strong>Çanakkale Bilgi İşlem Daire Başkanlığı</strong> – Frontend & Backend Developer Stajyeri (07/2024 - 08/2024)
          <ul>
            <li>React & Node.js ile full-stack geliştirme</li>
            <li>Ubuntu sunucu yönetimi, domain yönlendirme</li>
            <li>Git ve GitHub ile sürüm kontrolü</li>
          </ul>
        </div>
      </section>

      <section className="about-section fade-in">
        <h2><FaTools /> Yetenekler</h2>
        <div className="skills-grid">
          <SiReact title="React" />
          <SiTailwindcss title="Tailwind CSS" />
          <SiNodedotjs title="Node.js" />
          <SiMongodb title="MongoDB" />
        </div>
      </section>

      <section className="about-section fade-in">
        <h2><FaProjectDiagram /> Projeler</h2>
        <div className="card-grid">
          <div className="card">
            <strong>Shop AI</strong> – Yapay zeka destekli e-ticaret uygulaması  
            <br />
            <a href="https://shop.iethem.com" target="_blank" rel="noreferrer">shop.iethem.com</a>
          </div>
          <div className="card">
            <strong>Notdefteri App</strong> – Local storage ile basit not uygulaması
          </div>
          <div className="card">
            <strong>Instagram Clone</strong> – Sosyal medya klonu (giriş, paylaşım, yorum vs.)
          </div>
          <div className="card">
            <strong>iethem.com</strong> – Kendi portfolyo web sitem
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
