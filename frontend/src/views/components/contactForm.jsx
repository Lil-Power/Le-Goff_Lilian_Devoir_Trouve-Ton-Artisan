import { useState } from "react";

function ContactForm({ idArtisan }) {
  const [form, setForm] = useState({
    nom_client: "",
    email_client: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        id_artisan: idArtisan,
      }),
    });

    if (response.ok) {
      alert("Message envoyé !");
      setForm({ nom_client: "", email_client: "", sujet: "", message: "" });
    } else {
      alert("Erreur lors de l’envoi.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container"
      style={{ maxWidth: "700px" }}
    >
      <div className="mb-3">
        <label className="form-label">Votre nom :</label>
        <input
          type="text"
          name="nom_client"
          className="form-control"
          value={form.nom_client}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Votre email :</label>
        <input
          type="email"
          name="email_client"
          className="form-control"
          value={form.email_client}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Sujet :</label>
        <input
          type="text"
          name="sujet"
          className="form-control"
          value={form.sujet}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Message :</label>
        <textarea
          name="message"
          className="form-control"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary w-50 d-block mx-auto">
        Envoyer le message
      </button>
    </form>
  );
}

export default ContactForm;
