import { useEffect, useState } from "react";
import "../styles/contact.css";

const contactDetails = [
  {
    icon: "☎",
    label: "Call us",
    value: "Add your phone number",
    href: "tel:+910000000000",
  },
  {
    icon: "✉",
    label: "Email us",
    value: "Add your email address",
    href: "mailto:your-email@example.com",
  },
  {
    icon: "⌖",
    label: "Visit us",
    value: "Add your business address",
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const elements = document.querySelectorAll(".contact-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Front-end demonstration only.
    // Connect this handler to your backend/API to send the enquiry.
    alert("Your form is ready. Connect it to your backend to send enquiries.");

    // Optional: clear fields after successful backend submission.
    // setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-grid" aria-hidden="true" />
        <div className="contact-hero-glow" aria-hidden="true" />

        <div className="contact-container contact-hero-layout">
          <div className="contact-hero-copy">
            <span className="contact-eyebrow">CONTACT KOMAL ELECTRICALS</span>

            <h1>
              Let’s talk about
              <span> your requirements.</span>
            </h1>

            <p>
              Have a product enquiry, project requirement, or need more
              information? Send us a message and our team will get back to you.
            </p>

            <a className="contact-hero-link" href="#contact-form">
              Send an enquiry <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div
            className="contact-signal-visual"
            aria-label="Contact signal animation"
          >
            <div className="contact-signal-ring ring-one" />
            <div className="contact-signal-ring ring-two" />
            <div className="contact-signal-ring ring-three" />

            <div className="contact-signal-center">
              <span aria-hidden="true">⚡</span>
            </div>

            <div className="contact-signal-point point-one" />
            <div className="contact-signal-point point-two" />
            <div className="contact-signal-point point-three" />

            <div className="contact-signal-label signal-label-one">
              <span className="signal-status-dot" />
              Enquiries
            </div>

            <div className="contact-signal-label signal-label-two">
              Response
              <strong>Let’s connect</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-details-section">
        <div className="contact-container">
          <div className="contact-section-heading contact-reveal">
            <span className="contact-eyebrow">GET IN TOUCH</span>
            <h2>We’re here to help.</h2>
            <p>
              Reach out through the contact details below, or use the enquiry
              form and tell us what you need.
            </p>
          </div>

          <div className="contact-details-grid">
            {contactDetails.map((detail, index) => (
              <article
                className="contact-detail-card contact-reveal"
                key={detail.label}
                style={{ "--contact-delay": `${index * 120}ms` }}
              >
                <div className="contact-detail-icon" aria-hidden="true">
                  {detail.icon}
                </div>

                <span className="contact-detail-label">{detail.label}</span>

                {detail.href ? (
                  <a href={detail.href}>{detail.value}</a>
                ) : (
                  <p>{detail.value}</p>
                )}

                <span className="contact-detail-decoration" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="contact-main-section" id="contact-form">
        <div className="contact-container contact-main-grid">
          <div className="contact-form-side contact-reveal">
            <span className="contact-eyebrow">SEND US A MESSAGE</span>
            <h2>Tell us what you’re looking for.</h2>
            <p>
              Share a few details about your requirement. Fields marked with an
              asterisk are required.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <label>
                  Full name <span>*</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  Email address <span>*</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <div className="contact-form-row">
                <label>
                  Phone number
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    autoComplete="tel"
                  />
                </label>

                <label>
                  Subject
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your enquiry about?"
                  />
                </label>
              </div>

              <label>
                Your message <span>*</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your product or project requirement..."
                  rows="5"
                  required
                />
              </label>

              <button className="contact-submit-btn" type="submit">
                Submit enquiry <span aria-hidden="true">→</span>
              </button>

              <p className="contact-form-note">
                Your information will be used to respond to your enquiry.
              </p>
            </form>
          </div>

          <aside className="contact-info-side contact-reveal">
            <div className="contact-info-panel">
              <div className="contact-info-top">
                <span className="contact-eyebrow">KOMAL ELECTRICALS</span>
                <h3>Let’s find the right solution together.</h3>
                <p>
                  Share your requirements with us. We’ll help you take the next
                  step.
                </p>
              </div>

              <div className="contact-info-divider" />

              <div className="contact-info-item">
                <span className="contact-info-item-icon">◷</span>
                <div>
                  <strong>Business hours</strong>
                  <p>Add your working days and hours</p>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-item-icon">⌖</span>
                <div>
                  <strong>Our location</strong>
                  <p>Add your complete business address</p>
                </div>
              </div>

              <div className="contact-info-decoration" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="contact-bottom-section">
        <div className="contact-container">
          <div className="contact-bottom-card contact-reveal">
            <div>
              <span className="contact-eyebrow">NEED HELP CHOOSING?</span>
              <h2>Not sure what you need?</h2>
              <p>
                Tell us about your application and our team can help you
                identify the next steps.
              </p>
            </div>

            <a href="#contact-form" className="contact-bottom-btn">
              Start an enquiry <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
