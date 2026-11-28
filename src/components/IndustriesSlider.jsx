import { useEffect, useRef } from "react";
import "../styles/IndustriesSlider.css";

const industries = [
  {
    title: "Automobile",
    description:
      "Precision measurement and calibration solutions for automotive manufacturing and quality control.",
    image: "/images/industries/automobile.jpeg",
    alt: "Automobile manufacturing",
  },
  {
    title: "Energy",
    description:
      "Reliable measurement solutions supporting energy production, inspection, and maintenance.",
    image: "/images/industries/energy.jpeg",
    alt: "Energy production",
  },
  {
    title: "Hospitals",
    description:
      "Accurate calibration and measurement services for healthcare equipment and facilities.",
    image: "/images/industries/hospitals.jpeg",
    alt: "Hospital",
  },
  {
    title: "Industry",
    description:
      "Industrial measurement and calibration solutions that help maintain quality and efficiency.",
    image: "/images/industries/industry.jpeg",
    alt: "Industrial facility",
  },
  {
    title: "Malls",
    description:
      "Measurement and inspection solutions for commercial buildings and facilities.",
    image: "/images/industries/mall.jpeg",
    alt: "Shopping mall",
  },
  {
    title: "Petroleum & Steel",
    description:
      "Dependable inspection and calibration solutions for petroleum, steel, and heavy industries.",
    image: "/images/industries/petrolium.jpeg",
    alt: "Petroleum and steel industry",
  },
];

export default function IndustriesSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const intervalId = setInterval(() => {
      const card = slider.querySelector(".industry-card");
      if (!card) return;

      const gap = parseFloat(getComputedStyle(slider).columnGap) || 0;
      const distance = card.getBoundingClientRect().width + gap;

      const isAtEnd =
        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5;

      if (isAtEnd) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: distance,
          behavior: "smooth",
        });
      }
    }, 3000); // Slides every 3 second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="industries-section" id="industries">
      <div className="industries-container">
        <div className="industries-intro">
          <span className="industries-eyebrow">INDUSTRIES</span>

          <h2>We Serve</h2>

          <p>
            We provide precision measurement, calibration, and engineering
            solutions across multiple industries.
          </p>
        </div>

        <div className="industries-slider" ref={sliderRef}>
          {industries.map((industry) => (
            <article className="industry-card" key={industry.title}>
              <div className="industry-image">
                <img src={industry.image} alt={industry.alt} loading="lazy" />
              </div>

              <div className="industry-card-content">
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
