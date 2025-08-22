import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const email = "nicolas.caicedo.leon@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    alert("Correo copiado: " + email);
  };

  return (
    <section className="py-16 bg-gray-100 text-center" id="contact">
      <h2 className="text-3xl font-bold">{t("nav.contact")}</h2>
      <p className="mt-4">{email}</p>
      <div className="mt-4 flex justify-center gap-4">
        <a href={`mailto:${email}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg">{t("contact.email")}</a>
        <button onClick={copyEmail} className="px-4 py-2 bg-gray-700 text-white rounded-lg">{t("contact.copy")}</button>
      </div>
      <div className="mt-6">
        <a href="/cv.pdf" target="_blank" className="px-4 py-2 border border-gray-700 rounded-lg">
          📄 CV
        </a>
      </div>
    </section>
  );
}
