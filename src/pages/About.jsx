import { useEffect } from "react";
import "../styles/about.css";

const strengths = [
  {
    number: "01",
    title: "Quality-focused approach",
    text: "We focus on dependable products, careful execution, and attention to detail at every stage.",
  },
  {
    number: "02",
    title: "Customer-first service",
    text: "We work to understand each requirement and provide practical, suitable electrical solutions.",
  },
  {
    number: "03",
    title: "Reliable support",
    text: "We aim to build lasting relationships through clear communication and responsive support.",
  },
];

const capabilities = [
  {
    icon: "⚡",
    title: "Electrical Products",
    text: "Electrical products and components for a range of applications.",
  },
  {
    icon: "⌁",
    title: "Industrial Requirements",
    text: "Solutions for commercial, industrial, and project-based requirements.",
  },
  {
    icon: "◈",
    title: "Product Guidance",
    text: "Assistance in identifying products suited to your application and specifications.",
  },
];

const values = [
  {
    title: "Integrity",
    text: "We believe in transparent communication and doing business responsibly.",
  },
  {
    title: "Quality",
    text: "We value dependable products and consistent attention to detail.",
  },
  {
    title: "Partnership",
    text: "We aim to grow through long-term relationships with customers and suppliers.",
  },
];

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-reveal");

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
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-grid" aria-hidden="true" />
        <div className="about-glow about-glow-one" aria-hidden="true" />
        <div className="about-glow about-glow-two" aria-hidden="true" />

        <div className="about-container about-hero-content">
          <div className="about-hero-copy">
            <span className="about-eyebrow about-hero-eyebrow">
              ABOUT KOMAL ELECTRICALS
            </span>

            <h1>
              Powering progress
              <span> with reliable electrical solutions.</span>
            </h1>

            <p>
              We support customers with electrical products and practical
              solutions designed around their requirements, with a focus on
              quality, service, and long-term relationships.
            </p>

            <a className="about-primary-btn" href="/contact">
              Talk to our team <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="about-hero-visual" aria-label="Electrical components">
            <div className="about-visual-orbit orbit-one" />
            <div className="about-visual-orbit orbit-two" />

            <div className="about-visual-card">
              <div className="about-visual-icon" aria-hidden="true">
                ⚡
              </div>
              <span>Electrical solutions</span>
              <strong>Built around your needs</strong>
              <div className="about-visual-lines">
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className="about-floating-chip chip-top">
              <span className="chip-dot" />
              Quality focused
            </div>

            <div className="about-floating-chip chip-bottom">
              <span aria-hidden="true">◈</span>
              Customer support
            </div>
          </div>
        </div>

        <div className="about-hero-bottom-line" />
      </section>

      {/* INTRODUCTION */}
      <section className="about-intro about-section">
        <div className="about-container about-intro-grid">
          <div className="about-section-heading about-reveal">
            <span className="about-eyebrow">WHO WE ARE</span>
            <h2>
              Electrical expertise.
              <span> A service-minded approach.</span>
            </h2>
          </div>

          <div className="about-intro-text about-reveal">
            <p>
              Komal Electricals serves customers looking for dependable
              electrical products and solutions. We understand that every
              requirement is different, so we focus on listening carefully,
              communicating clearly, and helping customers identify suitable
              options.
            </p>
            <p>
              Our goal is to make the process straightforward—from understanding
              the requirement to supporting the customer with product
              information and service.
            </p>
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="about-strengths about-section">
        <div className="about-container">
          <div className="about-section-heading centered about-reveal">
            <span className="about-eyebrow">WHAT GUIDES US</span>
            <h2>Our approach</h2>
            <p>
              The principles behind the way we work with customers and partners.
            </p>
          </div>

          <div className="about-strength-grid">
            {strengths.map((item, index) => (
              <article
                className="about-strength-card about-reveal"
                key={item.number}
                style={{ "--reveal-delay": `${index * 120}ms` }}
              >
                <span className="about-card-number">{item.number}</span>
                <div className="about-card-accent" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="about-capabilities about-section">
        <div className="about-container about-capabilities-grid">
          <div className="about-capabilities-copy about-reveal">
            <span className="about-eyebrow">WHAT WE DO</span>
            <h2>
              Supporting your
              <span> electrical requirements.</span>
            </h2>
            <p>
              From product selection to project requirements, we aim to provide
              clear guidance and dependable support for a variety of electrical
              needs.
            </p>
            <a className="about-text-link" href="/contact">
              Discuss your requirement <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="about-capability-list">
            {capabilities.map((item, index) => (
              <article
                className="about-capability-item about-reveal"
                key={item.title}
                style={{ "--reveal-delay": `${index * 100}ms` }}
              >
                <div className="about-capability-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="about-capability-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values about-section">
        <div className="about-container">
          <div className="about-values-heading about-reveal">
            <div>
              <span className="about-eyebrow">OUR VALUES</span>
              <h2>What matters to us</h2>
            </div>
            <p>
              Strong business relationships begin with trust, consistency, and
              respect for the customer’s needs.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((item, index) => (
              <article
                className="about-value-card about-reveal"
                key={item.title}
                style={{ "--reveal-delay": `${index * 120}ms` }}
              >
                <span className="about-value-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta about-reveal">
            <div className="about-cta-glow" aria-hidden="true" />
            <div className="about-cta-copy">
              <span className="about-eyebrow">LET’S CONNECT</span>
              <h2>
                Have an electrical
                <span> requirement?</span>
              </h2>
              <p>
                Get in touch with Komal Electricals to discuss your product or
                project needs.
              </p>
            </div>
            <a className="about-primary-btn" href="/contact">
              Contact us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
