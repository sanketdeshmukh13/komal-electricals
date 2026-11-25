import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Zap,
  ShieldCheck,
  Factory,
} from "lucide-react";
import "../styles/HomeSlider.css";

const slides = [
  {
    id: 1,
    eyebrow: "KOMAL ELECTRICALS",
    title: "Powering Industries.",
    highlight: "Engineering the Future.",
    description:
      "Discover electrical panel solutions and electrical products designed around industrial requirements.",
    image: "/images/hero-panel.jpg",
    buttonText: "Explore Our Products",
    link: "/products",
    icon: <Zap />,
    number: "01",
  },
  {
    id: 2,
    eyebrow: "ELECTRICAL PANEL MANUFACTURING",
    title: "Reliable Power.",
    highlight: "Precise Control.",
    description:
      "Explore our PCC, MCC, APFC and LT panel solutions for electrical distribution and control applications.",
    image: "/images/manufacturing.jpg",
    buttonText: "Explore Panel Solutions",
    link: "/products",
    icon: <Factory />,
    number: "02",
  },
  {
    id: 3,
    eyebrow: "OUR CORE PRODUCTS",
    title: "Built for Performance.",
    highlight: "Designed for Reliability.",
    description:
      "Discover our Resin Cast, Tape Wound and Nylon products for electrical applications.",
    image: "/images/products/resin-cast.jpg",
    buttonText: "View Our Products",
    link: "/products",
    icon: <ShieldCheck />,
    number: "03",
  },
];

export default function HomeSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const currentSlide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="ke-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Komal Electricals featured products"
    >
      {/* Background slides */}
      <div className="ke-slider-backgrounds">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`ke-slider-bg ${index === activeSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="ke-slider-overlay" />

      {/* Decorative elements */}
      <div className="ke-slider-grid" />
      <div className="ke-slider-orbit" />

      {/* Main content */}
      <div className="ke-slider-container">
        <div className="ke-slider-content" key={currentSlide.id}>
          <div className="ke-slider-eyebrow">
            <span className="ke-slider-eyebrow-line" />
            {currentSlide.eyebrow}
          </div>

          <h1 className="ke-slider-title">
            {currentSlide.title}
            <span>{currentSlide.highlight}</span>
          </h1>

          <p className="ke-slider-description">{currentSlide.description}</p>

          <div className="ke-slider-actions">
            <Link to={currentSlide.link} className="ke-slider-button">
              {currentSlide.buttonText}
              <ArrowUpRight size={19} />
            </Link>

            <Link to="/contact" className="ke-slider-secondary">
              Contact Us
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="ke-slider-location">
            <span className="ke-slider-location-dot" />
            Aurangabad, Maharashtra, India
          </div>
        </div>

        {/* Floating product card */}
        <div className="ke-slider-visual">
          <div className="ke-slider-visual-ring" />

          <div className="ke-slider-product-card">
            <div className="ke-slider-product-icon">{currentSlide.icon}</div>

            <span>OUR EXPERTISE</span>

            <h3>Electrical Engineering</h3>

            <p>
              Quality-focused products and electrical manufacturing solutions.
            </p>

            <div className="ke-slider-card-bottom">
              <span>Komal Electricals</span>
              <Zap size={17} />
            </div>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="ke-slider-bottom">
        <div className="ke-slider-pagination">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`ke-slider-dot ${
                index === activeSlide ? "active" : ""
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
            >
              <span>{slide.number}</span>
              <span className="ke-slider-dot-line" />
            </button>
          ))}
        </div>

        <div className="ke-slider-controls">
          <span className="ke-slider-counter">
            <strong>{currentSlide.number}</strong>
            <span>/ 03</span>
          </span>

          <button
            className="ke-slider-arrow"
            onClick={previousSlide}
            aria-label="Previous slide"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            className="ke-slider-arrow"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
