import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaCopy, FaFilePdf, FaDownload,  FaReact, FaPython, FaDatabase, FaDocker, FaGitAlt  } from "react-icons/fa";
import { SiHackerrank, SiDjango, SiJavascript, SiGraphql, SiGooglecloud } from "react-icons/si";
import ReactCountryFlag from "react-country-flag";
import { toast } from "react-toastify";


  const iconMap = {
    React: <FaReact />,
    Python: <FaPython />,
    JavaScript: <SiJavascript />,
    Django: <SiDjango />,
    SQL: <FaDatabase />,
    Docker: <FaDocker />,
    Git: <FaGitAlt />,
    GraphQL: <SiGraphql />,
    "Google Cloud": <SiGooglecloud />,
  };


export default function Header() {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);

  const email = "nicolas.caicedo.leon@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = ["frontend", "backend", "database", "tools"];
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null); // se cierra SOLO si se vuelve a clickear
    } else {
      setActiveCategory(category);
    }
  };
    const certificates = [
    {
      id: 1,
      title: "Product and Service Development from the UX",
      institution: "Colombia National University",
      year: "2021",
      image: "/unalcert.png" // reemplazar por tu imagen
    },
    {
      id: 2,
      title: "Deep Learning",
      institution: "DeepLearning.ai",
      year: "2020",
      image: "/deeplearning-ai.png" // reemplazar por tu imagen
    }
  ];
  
  return (
    <div className="header-section py-5">
      {/* Idioma */}
      <div className="lang-switcher">
        <button
          className={`btn-lang ${i18n.language === "en" ? "active" : ""}`}
          onClick={() => i18n.changeLanguage("en")}
        >
          <ReactCountryFlag countryCode="US" svg style={{ width: "1.5em", height: "1.5em" }} />
        </button>
        <button
          className={`btn-lang ${i18n.language === "es" ? "active" : ""}`}
          onClick={() => i18n.changeLanguage("es")}
        >
          <ReactCountryFlag countryCode="ES" svg style={{ width: "1.5em", height: "1.5em" }} />
        </button>
      </div>

      {/* Encabezado */}
      <section className="text-center">
        <h1 className="fw-bold">Nicolás Andrés Caicedo León</h1>
        <h3 className="role">{t("role")}</h3>
        <p className="description">
        {t("description")}
      </p>

        {/* Redes */}
        <div className="mt-4 d-flex justify-content-center flex-wrap gap-3 social-links">
          <a
            href="https://linkedin.com/in/nacaicedol"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nacaicedol"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.hackerrank.com/nacaicedol"
            target="_blank"
            rel="noreferrer"
          >
            <SiHackerrank />
          </a>
        </div>

    {/* Email */}
    <div className="mt-5 email-box">
      <label className="email-label">{email}</label>
      <div className="email-actions">
        {/* Botón para enviar correo */}
        <a
          href={`mailto:${email}`}
          title={t("email")}
          onClick={() =>
            toast.info(t("sendEmailMessage") || "Se abrirá tu cliente de correo.")
          }
        >
          <FaEnvelope />
        </a>

        {/* Botón para copiar correo */}
        <button
          onClick={() => {
            copyEmail();
            toast.success(t("copiedMessage") || "Correo copiado al portapapeles.");
          }}
          title={t("email")}
        >
          <FaCopy />
        </button>
      </div>
    </div>


      {/* CV */}
      <div className="mt-3 cv-box">
        <p className="cv-phrase">{t("cv.phrase")}</p>
        <a 
          href="/cv.pdf"
          onClick={(e) => {
            e.preventDefault(); // evita navegación normal
            window.open("/cv.pdf", "cvWindow", "width=900,height=700,scrollbars=yes,resizable=yes");
          }}
          className="btn-cv mt-3"
        >
          <FaFilePdf className="icon" />
          <span className="text">{t("cv.download")}</span>
          <FaDownload className="download-icon" />
        </a>
      </div>
      </section>    


      <section className="experience-section">
        <h2 className="section-title-dark">{t("experience.title")}</h2>

        {/* Infometrika */}
        <div className="experience-card">
          <div className="experience-header">
            <img src="/images/infometrika.png" alt="Infometrika" className="experience-image" />
            <div className="experience-info">
              <h3>Infometrika S.A.</h3>
              <p className="role">{t("experience.fullstack")}</p>
              <span className="date">2022 - 2024</span>
            </div>
          </div>
          <ul className="experience-list">
            {t("experience.infometrika.tasks", { returnObjects: true }).map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <div className="tech-carousel">
          <div className="tech-track">
            <img src="/tech/react.png" alt="React" />
            <img src="/tech/vue.png" alt="VueJS" />
            <img src="/tech/python.png" alt="Python" />
            <img src="/tech/js.png" alt="JavaScript" />
            <img src="/tech/api.png" alt="APIs" />

            {/* duplicado para loop infinito */}
            <img src="/tech/react.png" alt="React" />
            <img src="/tech/vue.png" alt="VueJS" />
            <img src="/tech/python.png" alt="Python" />
            <img src="/tech/js.png" alt="JavaScript" />
            <img src="/tech/api.png" alt="APIs" />
          </div>
        </div>
        </div>

        {/* EqualTech */}
        <div className="experience-card">
          <div className="experience-header">
            <img src="/images/equaltech.png" alt="EqualTech" className="experience-image" />
            <div className="experience-info">
              <h3>EqualTech</h3>
              <p className="role">{t("experience.dev")}</p>
              <span className="date">2024 - {t("experience.present")}</span>
            </div>
          </div>
          <ul className="experience-list">
            {t("experience.equaltech.tasks", { returnObjects: true }).map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <div className="tech-carousel">
             <div className="tech-track">
            <img src="/tech/react.png" alt="React" />
            <img src="/tech/csharp.png" alt="C#" />
            <img src="/tech/sql.png" alt="Databases" />
            <img src="/tech/webhooks.png" alt="Webhooks" />
            <img src="/tech/microsoft.png" alt="Microsoft" />
          
            <img src="/tech/react.png" alt="React" />
            <img src="/tech/csharp.png" alt="C#" />
            <img src="/tech/sql.png" alt="Databases" />
            <img src="/tech/webhooks.png" alt="Webhooks" />
            <img src="/tech/microsoft.png" alt="Microsoft" />

          </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="projects-section">
        <h2 className="section-title" style={{ color: "var(--color-light)" }}>{t("projects.title")}</h2>

        <div className="projects-grid">
          {/* Proyecto 1 */}
          <div className="project-card">
            <img src="/projects/codedoc.png" alt="CodeDocViewer" className="project-image" />
            <div className="project-info">
              <h3>{t("projects.codedoc.name")} <span>({t("projects.codedoc.year")})</span></h3>
              <p className="role">{t("projects.codedoc.role")}</p>
              <p className="desc">{t("projects.codedoc.desc")}</p>
              <div className="tech-icons">
                <img src="/tech/react.png" alt="React" />
                <img src="/tech/django.png" alt="Django" />
                <img src="/tech/python.png" alt="Python" />
                <img src="/tech/antlr.png" alt="ANTLR" />
              </div>
              <a href="#" className="btn">{t("projects.view")}</a>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="project-card">
            <img src="/projects/shopify.png" alt="E-commerce Shopify" className="project-image" />
            <div className="project-info">
              <h3>{t("projects.ecommerce.name")} <span>({t("projects.ecommerce.year")})</span></h3>
              <p className="role">{t("projects.ecommerce.role")}</p>
              <p className="desc">{t("projects.ecommerce.desc")}</p>
              <div className="tech-icons">
                <img src="/tech/shopify.png" alt="Shopify" />
                <img src="/tech/js.png" alt="JavaScript" />
                <img src="/tech/css.svg" alt="CSS" />
              </div>
              <a href="#" className="btn">{t("projects.view")}</a>
            </div>
          </div>
        </div>
      </section>


      {/* Habilidades */}
      <section className="skills-section py-5">
      <div className="container">
        <h2 className="section-title-dark text-center mb-4">
          {t("skills.title")}
        </h2>
        <div className="row">
          {categories.map((category, index) => {
            const skills = t(`skills.items.${category}`, { returnObjects: true });
            return (
              <div key={index} className="col-md-6 mb-3">
                <div
                  className={`skill-card p-3 ${activeCategory === category ? "active" : ""}`}
                  onClick={() => toggleCategory(category)}
                >
                  <h5 className="skill-category">{t(`skills.categories.${category}`)}</h5>

                  {/* Resumen si está cerrada */}
                  {activeCategory !== category && (
                    <p className="skill-summary">
                      {skills.map((s) => s.name).slice(0, 3).join(", ")}...
                    </p>
                  )}

                  {/* Lista completa si está activa */}
                  {activeCategory === category && (
                    <ul className="skill-list mt-3 ">
                      {skills.map((skill, idx) => (
                        <li key={idx} className="skill-item">
                          <span className="skill-icon">{iconMap[skill.name] || "🔹"}</span>
                          <span>{skill.name}</span>
                          <div className="progress-bar">
                            <div
                              className="progress-fill"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

      {/* Formación académica */}
       <section className="education-section">
      <h2 className="section-title">{t("education.title")}</h2>

      {/* Título universitario */}
      <h3 className="sub-title">{t("education.degreeTitle")}</h3>
      <div className="degree-card">
        <div className="degree-overlay">
          <p className="degree-text">{t("education.degree")}</p>
        </div>
      </div>

      {/* Certificados */}
      <h3 className="sub-title mt-4">{t("education.certificates")}</h3>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img src={cert.image} alt={cert.title} className="certificate-img" />
            <h4>{cert.title}</h4>
            <p className="institution">{cert.institution}</p>
            <p className="year">{cert.year}</p>
          </div>
        ))}
      </div>
    </section>
      <footer className="contact-section text-dark py-5">
      <div className="container text-center">
        <h2 className="mb-3">{t("contact.title")}</h2>
        <p className="mb-4">{t("contact.subtitle")}</p>

        <div className="d-flex justify-content-center gap-4 mb-4">
          <a
            href="mailto:nicolas.caicedo.leon@egmail.com"
            className="btn btn-outline-dark"
          >
            <FaEnvelope className="me-2" />
            {t("contact.email")}
          </a>

          <a
            href="https://www.linkedin.com/in/nacaicedol"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            <FaLinkedin className="me-2" />
            {t("contact.linkedin")}
          </a>

          <a
            href="https://github.com/nacaicedol"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            <FaGithub className="me-2" />
            {t("contact.github")}
          </a>
        </div>

        <p className="text-muted small mb-0">{t("contact.copyright")}</p>
      </div>
    </footer>
    </div>
    
  );
}
