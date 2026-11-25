import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  ShieldCheck,
  Settings,
  Factory,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Menu,
  CircuitBoard,
  Activity,
  Gauge,
  Layers,
  Cable,
  Cpu,
  Award,
  Clock,
  Wrench,
  ClipboardCheck,
  Boxes,
  ChevronRight,
  MessageCircle,
  Target,
  Lightbulb,
  Building2,
  Sparkles,
} from "lucide-react";
import HomeSlider from "../components/HomeSlider";
/* ==========================================
   KOMAL ELECTRICALS - HOMEPAGE
   Logo: public/images/komal-logo.png
========================================== */

const featuredProducts = [
  {
    number: "01",
    title: "Resin Cast",
    subtitle: "Electrical Insulation Solutions",
    description:
      "Resin cast components and insulation solutions designed for electrical applications requiring dependable insulation and mechanical strength.",
    image: "/images/resin_cast_rectangle.PNG",
    icon: <Layers />,
    tag: "FEATURED PRODUCT",
    slug: "resin-cast",
  },
  {
    number: "02",
    title: "Tape Wound",
    subtitle: "Precision Wound Components",
    description:
      "Tape wound electrical components manufactured with attention to material selection, winding precision and application requirements.",
    image: "/images/tape_wound.PNG",
    icon: <Cable />,
    tag: "FEATURED PRODUCT",
    slug: "tape-wound",
  },
  {
    number: "03",
    title: "Nylon",
    subtitle: "Electrical Insulation Components",
    description:
      "Nylon-based components for electrical applications where suitable mechanical properties and insulation characteristics are required.",
    image: "/images/nylon.PNG",
    icon: <CircuitBoard />,
    tag: "FEATURED PRODUCT",
    slug: "nylon",
  },
];

const panelProducts = [
  {
    title: "PCC Panels",
    subtitle: "Power Control Centre",
    description:
      "Power distribution and control solutions for industrial applications.",
    icon: <Zap />,
    slug: "pcc-panel",
  },
  {
    title: "MCC Panels",
    subtitle: "Motor Control Centre",
    description:
      "Electrical control solutions for industrial motor applications.",
    icon: <Settings />,
    slug: "mcc-panel",
  },
  {
    title: "APFC Panels",
    subtitle: "Automatic Power Factor Correction",
    description:
      "Solutions for automatic power factor correction applications.",
    icon: <Gauge />,
    slug: "apfc-panel",
  },
  {
    title: "LT Panels",
    subtitle: "Low Tension Panels",
    description: "Low voltage electrical distribution and control solutions.",
    icon: <CircuitBoard />,
    slug: "lt-panel",
  },
];

const advantages = [
  {
    icon: <Target />,
    title: "Application Focused",
    description:
      "We understand customer requirements and focus on solutions suited to specific applications.",
  },
  {
    icon: <ShieldCheck />,
    title: "Quality Commitment",
    description:
      "A quality-conscious approach to material selection, manufacturing and inspection.",
  },
  {
    icon: <Settings />,
    title: "Technical Approach",
    description:
      "Attention to engineering details, product requirements and practical solutions.",
  },
  {
    icon: <HeadsetIcon />,
    title: "Customer Support",
    description:
      "Clear communication and customer-focused assistance throughout the project.",
  },
];

function HeadsetIcon() {
  return <MessageCircle />;
}

const industries = [
  {
    icon: <Factory />,
    title: "Manufacturing",
    description: "Electrical solutions for industrial production facilities.",
  },
  {
    icon: <Building2 />,
    title: "Commercial",
    description: "Electrical distribution for commercial establishments.",
  },
  {
    icon: <Zap />,
    title: "Power & Energy",
    description: "Electrical components and systems for power applications.",
  },
  {
    icon: <Activity />,
    title: "Infrastructure",
    description: "Electrical solutions for infrastructure projects.",
  },
  {
    icon: <Wrench />,
    title: "Engineering",
    description: "Application-oriented electrical engineering requirements.",
  },
  {
    icon: <Boxes />,
    title: "Industrial Plants",
    description: "Electrical products and solutions for plant operations.",
  },
];

const manufacturingSteps = [
  {
    number: "01",
    icon: <ClipboardCheck />,
    title: "Requirement Understanding",
    description:
      "Understanding customer requirements, application and product specifications.",
  },
  {
    number: "02",
    icon: <Lightbulb />,
    title: "Planning & Engineering",
    description:
      "Planning suitable designs, materials and manufacturing requirements.",
  },
  {
    number: "03",
    icon: <Wrench />,
    title: "Manufacturing",
    description:
      "Manufacturing and assembly with attention to product requirements.",
  },
  {
    number: "04",
    icon: <ShieldCheck />,
    title: "Quality Inspection",
    description:
      "Inspection and verification according to applicable product requirements.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  center = false,
  light = false,
}) {
  return (
    <div
      className={`ke-heading ${center ? "center" : ""} ${light ? "light" : ""}`}
    >
      <span className="ke-eyebrow">
        <span className="eyebrow-line"></span>
        {eyebrow}
      </span>

      <h2>
        {title} {highlight && <span>{highlight}</span>}
      </h2>

      <p>{description}</p>
    </div>
  );
}

function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".ke-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ke-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`

/* ==========================================
   GLOBAL DESIGN SYSTEM
========================================== */

:root {
  --ke-navy: #10294b;
  --ke-dark: #091b32;
  --ke-blue: #173a65;
  --ke-orange: #f36b18;
  --ke-orange-light: #ff934e;
  --ke-white: #ffffff;
  --ke-light: #f5f7fa;
  --ke-text: #667487;
  --ke-border: #e5eaf0;
}

.ke-home {
  overflow: hidden;
  background: white;
  color: var(--ke-text);
  font-family: 'DM Sans', Arial, sans-serif;
}

.ke-home * {
  box-sizing: border-box;
}

.ke-home h1,
.ke-home h2,
.ke-home h3,
.ke-home h4 {
  font-family: 'Manrope', Arial, sans-serif;
}

.ke-home a {
  text-decoration: none;
}

.ke-section {
  padding: 105px 7%;
}

.ke-container {
  max-width: 1400px;
  margin: auto;
}

.ke-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: var(--ke-orange);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 22px;
}

.eyebrow-line {
  display: inline-block;
  height: 2px;
  width: 30px;
  background: var(--ke-orange);
}

.ke-heading {
  max-width: 690px;
  margin-bottom: 50px;
}

.ke-heading.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.ke-heading.center .ke-eyebrow {
  justify-content: center;
}

.ke-heading h2 {
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.2;
  letter-spacing: -1.5px;
  color: var(--ke-navy);
  margin-bottom: 18px;
}

.ke-heading h2 span {
  color: var(--ke-orange);
}

.ke-heading p {
  font-size: 15px;
  line-height: 1.9;
}

.ke-heading.light h2 {
  color: white;
}

.ke-heading.light p {
  color: #c4d0de;
}

.ke-btn {
  min-height: 53px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  padding: 15px 23px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 800;
  transition: .35s ease;
}

.ke-btn-primary {
  background: var(--ke-orange);
  color: white;
  box-shadow: 0 8px 25px rgba(243,107,24,.2);
}

.ke-btn-primary:hover {
  background: #d9570e;
  color: white;
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(243,107,24,.3);
}

.ke-btn-outline {
  border: 1px solid rgba(255,255,255,.55);
  color: white;
}

.ke-btn-outline:hover {
  background: white;
  color: var(--ke-navy);
}

.ke-text-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--ke-orange);
  font-weight: 800;
  font-size: 13px;
  transition: .3s;
}

.ke-text-link:hover {
  gap: 15px;
}

.ke-reveal {
  opacity: 0;
  transform: translateY(35px);
  transition:
    opacity .8s ease,
    transform .8s cubic-bezier(.2,.7,.2,1);
}

.ke-reveal.ke-visible {
  opacity: 1;
  transform: translateY(0);
}

.ke-delay-1 { transition-delay: .1s; }
.ke-delay-2 { transition-delay: .2s; }
.ke-delay-3 { transition-delay: .3s; }

/* ==========================================
   HERO
========================================== */

.ke-hero {
  min-height: 720px;
  position: relative;
  display: flex;
  align-items: center;
  isolation: isolate;
  background:
    linear-gradient(
      90deg,
      rgba(5,20,40,.98) 0%,
      rgba(9,29,54,.91) 45%,
      rgba(9,29,54,.48) 100%
    ),
    url('/images/hero-panel.jpg') center/cover no-repeat,
    var(--ke-dark);
  overflow: hidden;
}

.ke-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
  background-size: 65px 65px;
  mask-image: linear-gradient(90deg, black, transparent);
  pointer-events: none;
}

.ke-hero::after {
  content: "";
  position: absolute;
  width: 500px;
  height: 500px;
  right: -170px;
  top: 50px;
  border: 1px solid rgba(243,107,24,.22);
  border-radius: 50%;
  box-shadow:
    0 0 0 60px rgba(243,107,24,.035),
    0 0 0 120px rgba(243,107,24,.025);
  animation: keRotate 35s linear infinite;
}

.ke-hero-inner {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 100px 7% 125px;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.25fr .75fr;
  align-items: center;
  gap: 55px;
}

.ke-hero-content {
  animation: keHeroEnter 1s ease both;
}

.ke-hero-logo {
  display: block;
  width: 190px;
  height: 115px;
  object-fit: contain;
  object-position: left center;
  background: white;
  border-radius: 5px;
  padding: 4px;
  margin-bottom: 28px;
  box-shadow: 0 10px 35px rgba(0,0,0,.15);
}

.ke-hero-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #ffc08f;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 25px;
}

.ke-live-dot {
  width: 8px;
  height: 8px;
  background: var(--ke-orange);
  border-radius: 50%;
  box-shadow: 0 0 0 6px rgba(243,107,24,.15);
  animation: kePulse 2s infinite;
}

.ke-hero h1 {
  color: white;
  font-size: clamp(43px, 5.4vw, 72px);
  line-height: 1.1;
  letter-spacing: -2.5px;
  margin-bottom: 25px;
  max-width: 760px;
}

.ke-hero h1 span {
  color: var(--ke-orange-light);
}

.ke-hero-description {
  max-width: 590px;
  color: #cbd5e1;
  line-height: 1.9;
  font-size: 15px;
}

.ke-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 35px;
}

.ke-hero-location {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #c5d0dd;
  margin-top: 38px;
  font-size: 12px;
}

.ke-hero-location svg {
  color: var(--ke-orange);
}

.ke-hero-visual {
  position: relative;
  min-height: 390px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ke-orbit {
  position: absolute;
  width: 340px;
  height: 340px;
  border: 1px solid rgba(255,255,255,.17);
  border-radius: 50%;
  animation: keRotate 30s linear infinite;
}

.ke-orbit::before,
.ke-orbit::after {
  content: "";
  position: absolute;
  width: 11px;
  height: 11px;
  background: var(--ke-orange);
  border-radius: 50%;
}

.ke-orbit::before {
  top: 45px;
  left: 35px;
}

.ke-orbit::after {
  right: 15px;
  bottom: 75px;
}

.ke-visual-card {
  position: relative;
  z-index: 2;
  width: 280px;
  padding: 32px 25px;
  text-align: center;
  border: 1px solid rgba(255,255,255,.25);
  background: rgba(255,255,255,.09);
  backdrop-filter: blur(16px);
  border-radius: 12px;
  animation: keFloat 5s ease-in-out infinite;
}

.ke-visual-icon {
  width: 85px;
  height: 85px;
  display: grid;
  place-items: center;
  background: var(--ke-orange);
  color: white;
  margin: 0 auto 25px;
  border-radius: 18px;
  transform: rotate(-5deg);
  box-shadow: 0 15px 35px rgba(243,107,24,.3);
}

.ke-visual-icon svg {
  width: 43px;
  height: 43px;
}

.ke-visual-card h3 {
  color: white;
  font-size: 21px;
  margin-bottom: 9px;
}

.ke-visual-card p {
  color: #cbd5e1;
  font-size: 12px;
  line-height: 1.7;
}

.ke-floating-label {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  padding: 13px 17px;
  color: var(--ke-navy);
  border-radius: 5px;
  font-size: 11px;
  font-weight: 800;
  box-shadow: 0 12px 30px rgba(0,0,0,.2);
  z-index: 3;
}

.ke-floating-label svg {
  color: var(--ke-orange);
}

.ke-float-top {
  top: 30px;
  right: -10px;
  animation: keFloat 4s ease-in-out infinite;
}

.ke-float-bottom {
  bottom: 35px;
  left: -25px;
  animation: keFloat 4s 1s ease-in-out infinite;
}

.ke-hero-bottom {
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 7%;
  right: 7%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-top: 1px solid rgba(255,255,255,.2);
  color: #bdc9d8;
  font-size: 10px;
  letter-spacing: 1.6px;
}

/* ==========================================
   TRUST STRIP
========================================== */

.ke-trust-strip {
  background: var(--ke-orange);
  padding: 24px 7%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 20px;
}

.ke-trust-item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  color: white;
}

.ke-trust-item svg {
  width: 27px;
  height: 27px;
  flex-shrink: 0;
}

.ke-trust-item strong {
  display: block;
  font-size: 13px;
}

.ke-trust-item span {
  display: block;
  font-size: 10px;
  opacity: .9;
  margin-top: 4px;
}

/* ==========================================
   ABOUT
========================================== */

.ke-about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 85px;
  align-items: center;
}

.ke-about-image-wrap {
  position: relative;
  padding: 0 35px 35px 0;
}

.ke-about-image {
  height: 500px;
  background:
    linear-gradient(0deg,rgba(9,27,50,.5),transparent),
    url('/images/factory.jpg') center/cover no-repeat,
    #dce4ed;
  border-radius: 7px;
  position: relative;
  overflow: hidden;
}

.ke-about-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,transparent 60%,rgba(243,107,24,.2));
}

.ke-about-logo {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 185px;
  background: white;
  padding: 12px;
  border: 5px solid white;
  border-radius: 5px;
  z-index: 2;
}

.ke-about-logo img {
  width: 100%;
  height: 110px;
  object-fit: contain;
}

.ke-about-content h2 {
  font-size: clamp(30px,4vw,46px);
  line-height: 1.2;
  color: var(--ke-navy);
  letter-spacing: -1.5px;
  margin-bottom: 22px;
}

.ke-about-content h2 span {
  color: var(--ke-orange);
}

.ke-about-content > p {
  font-size: 14px;
  line-height: 1.95;
  margin-bottom: 16px;
}

.ke-about-points {
  display: grid;
  gap: 14px;
  margin: 28px 0;
}

.ke-about-point {
  display: flex;
  gap: 12px;
  align-items: center;
  color: var(--ke-navy);
  font-weight: 700;
  font-size: 13px;
}

.ke-about-point svg {
  color: var(--ke-orange);
  flex-shrink: 0;
}

.ke-about-content .ke-text-link {
  margin-top: 8px;
}

/* ==========================================
   FEATURED PRODUCTS
========================================== */

.ke-featured {
  background: var(--ke-light);
}

.ke-product-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 25px;
}

.ke-product-card {
  background: white;
  border: 1px solid var(--ke-border);
  border-radius: 7px;
  overflow: hidden;
  transition: .4s cubic-bezier(.2,.7,.2,1);
}

.ke-product-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 55px rgba(16,41,75,.13);
  border-color: transparent;
}

.ke-product-image {
  height: 270px;
  background: #e7ebf0;
  position: relative;
  overflow: hidden;
}

.ke-product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .7s ease;
}

.ke-product-card:hover .ke-product-image img {
  transform: scale(1.1);
}

.ke-product-tag {
  position: absolute;
  top: 18px;
  left: 18px;
  padding: 9px 12px;
  background: var(--ke-orange);
  color: white;
  font-size: 9px;
  letter-spacing: 1px;
  font-weight: 800;
}

.ke-product-number {
  position: absolute;
  right: 17px;
  top: 15px;
  color: white;
  font-size: 26px;
  font-weight: 800;
  text-shadow: 0 2px 8px rgba(0,0,0,.4);
}

.ke-product-body {
  padding: 28px;
}

.ke-product-icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  background: #fff1e8;
  color: var(--ke-orange);
  border-radius: 5px;
  margin-top: -51px;
  position: relative;
  z-index: 2;
  border: 4px solid white;
}

.ke-product-body h3 {
  color: var(--ke-navy);
  font-size: 24px;
  margin: 17px 0 5px;
}

.ke-product-subtitle {
  color: var(--ke-orange);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .6px;
  margin-bottom: 14px;
}

.ke-product-body p {
  font-size: 13px;
  line-height: 1.85;
  min-height: 95px;
}

.ke-product-footer {
  border-top: 1px solid var(--ke-border);
  padding-top: 19px;
  margin-top: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--ke-orange);
  font-size: 12px;
  font-weight: 800;
}

.ke-product-footer svg {
  transition: transform .3s;
}

.ke-product-card:hover .ke-product-footer svg {
  transform: translateX(5px);
}

/* ==========================================
   PANEL SOLUTIONS
========================================== */

.ke-panels {
  background: white;
}

.ke-panel-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 18px;
}

.ke-panel-card {
  position: relative;
  padding: 30px 24px;
  border: 1px solid var(--ke-border);
  border-radius: 5px;
  overflow: hidden;
  transition: .4s ease;
}

.ke-panel-card::before {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  background: var(--ke-orange);
  left: 0;
  top: 0;
  transition: width .4s ease;
}

.ke-panel-card:hover::before {
  width: 100%;
}

.ke-panel-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 40px rgba(16,41,75,.09);
}

.ke-panel-icon {
  width: 58px;
  height: 58px;
  background: #fff1e8;
  color: var(--ke-orange);
  display: grid;
  place-items: center;
  border-radius: 7px;
  margin-bottom: 25px;
  transition: .3s;
}

.ke-panel-card:hover .ke-panel-icon {
  background: var(--ke-orange);
  color: white;
  transform: rotate(-7deg);
}

.ke-panel-card h3 {
  color: var(--ke-navy);
  font-size: 19px;
  margin-bottom: 7px;
}

.ke-panel-card small {
  display: block;
  color: var(--ke-orange);
  font-size: 10px;
  font-weight: 800;
  margin-bottom: 15px;
}

.ke-panel-card p {
  font-size: 12px;
  line-height: 1.8;
  min-height: 66px;
  margin-bottom: 20px;
}

.ke-panel-card a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--ke-navy);
  font-size: 11px;
  font-weight: 800;
}

.ke-panel-card a svg {
  color: var(--ke-orange);
}

/* ==========================================
   COMPANY CAPABILITIES
========================================== */

.ke-capabilities {
  background: var(--ke-dark);
  position: relative;
}

.ke-capabilities::before {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  right: -170px;
  top: -150px;
  border: 1px solid rgba(243,107,24,.2);
  border-radius: 50%;
}

.ke-capability-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 18px;
}

.ke-capability-card {
  padding: 30px 25px;
  background: rgba(255,255,255,.055);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 6px;
  transition: .4s;
}

.ke-capability-card:hover {
  background: rgba(255,255,255,.1);
  transform: translateY(-7px);
  border-color: rgba(243,107,24,.6);
}

.ke-capability-card svg {
  width: 34px;
  height: 34px;
  color: var(--ke-orange);
  margin-bottom: 25px;
}

.ke-capability-card h3 {
  color: white;
  font-size: 17px;
  margin-bottom: 12px;
}

.ke-capability-card p {
  color: #b9c7d6;
  font-size: 12px;
  line-height: 1.9;
}

/* ==========================================
   INDUSTRIES
========================================== */

.ke-industries {
  background: var(--ke-light);
}

.ke-industry-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 18px;
}

.ke-industry-card {
  position: relative;
  background: white;
  border: 1px solid var(--ke-border);
  padding: 28px;
  border-radius: 5px;
  transition: .35s ease;
}

.ke-industry-card:hover {
  transform: translateY(-7px);
  border-color: var(--ke-orange);
  box-shadow: 0 15px 35px rgba(16,41,75,.08);
}

.ke-industry-card > span {
  position: absolute;
  top: 23px;
  right: 24px;
  color: #dbe1e8;
  font-size: 25px;
  font-weight: 800;
}

.ke-industry-card > svg {
  color: var(--ke-orange);
  width: 35px;
  height: 35px;
  margin-bottom: 25px;
}

.ke-industry-card h3 {
  color: var(--ke-navy);
  font-size: 17px;
  margin-bottom: 9px;
}

.ke-industry-card p {
  font-size: 12px;
  line-height: 1.8;
}

/* ==========================================
   MANUFACTURING
========================================== */

.ke-manufacturing {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: white;
}

.ke-manufacturing-visual {
  min-height: 580px;
  background:
    linear-gradient(rgba(9,27,50,.22),rgba(9,27,50,.22)),
    url('/images/manufacturing.jpg') center/cover no-repeat,
    #dce4ed;
  position: relative;
}

.ke-manufacturing-label {
  position: absolute;
  left: 35px;
  bottom: 35px;
  background: white;
  padding: 22px 25px;
  border-left: 4px solid var(--ke-orange);
}

.ke-manufacturing-label strong {
  display: block;
  color: var(--ke-navy);
  font-size: 17px;
}

.ke-manufacturing-label span {
  display: block;
  color: var(--ke-text);
  font-size: 11px;
  margin-top: 7px;
}

.ke-manufacturing-content {
  padding: 90px 9%;
  align-self: center;
}

.ke-manufacturing-content h2 {
  color: var(--ke-navy);
  font-size: clamp(31px,4vw,46px);
  line-height: 1.2;
  margin-bottom: 20px;
}

.ke-manufacturing-content h2 span {
  color: var(--ke-orange);
}

.ke-manufacturing-content > p {
  font-size: 14px;
  line-height: 1.9;
}

.ke-manufacturing-list {
  display: grid;
  gap: 15px;
  margin: 28px 0;
}

.ke-manufacturing-list div {
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
  color: var(--ke-navy);
}

.ke-manufacturing-list svg {
  color: var(--ke-orange);
  flex-shrink: 0;
}

/* ==========================================
   WORK PROCESS
========================================== */

.ke-process {
  background: var(--ke-light);
}

.ke-process-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 20px;
}

.ke-process-card {
  background: white;
  padding: 27px;
  border: 1px solid var(--ke-border);
  border-radius: 5px;
  position: relative;
  transition: .35s;
}

.ke-process-card:hover {
  transform: translateY(-7px);
  border-color: var(--ke-orange);
}

.ke-process-number {
  font-size: 33px;
  font-weight: 800;
  color: #e5eaf0;
}

.ke-process-icon {
  width: 53px;
  height: 53px;
  display: grid;
  place-items: center;
  background: #fff1e8;
  color: var(--ke-orange);
  border-radius: 6px;
  margin: 22px 0;
}

.ke-process-card h3 {
  color: var(--ke-navy);
  font-size: 16px;
  margin-bottom: 12px;
}

.ke-process-card p {
  font-size: 12px;
  line-height: 1.9;
}

/* ==========================================
   QUALITY / COMMITMENT
========================================== */

.ke-quality {
  background: white;
}

.ke-quality-grid {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 70px;
  align-items: center;
}

.ke-quality-visual {
  min-height: 410px;
  background:
    linear-gradient(135deg,rgba(16,41,75,.92),rgba(16,41,75,.65)),
    url('/images/quality-testing.jpg') center/cover no-repeat,
    var(--ke-navy);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 35px;
}

.ke-quality-visual svg {
  width: 75px;
  height: 75px;
  color: var(--ke-orange);
  margin-bottom: 24px;
}

.ke-quality-visual h3 {
  color: white;
  font-size: 26px;
  max-width: 350px;
  line-height: 1.4;
}

.ke-quality-visual p {
  color: #d1dce8;
  font-size: 12px;
  margin-top: 15px;
}

.ke-quality-content h2 {
  color: var(--ke-navy);
  font-size: clamp(30px,4vw,43px);
  line-height: 1.2;
  margin-bottom: 20px;
}

.ke-quality-content h2 span {
  color: var(--ke-orange);
}

.ke-quality-content > p {
  font-size: 14px;
  line-height: 1.9;
  margin-bottom: 27px;
}

.ke-quality-point {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 17px 0;
  border-bottom: 1px solid var(--ke-border);
}

.ke-quality-point svg {
  color: var(--ke-orange);
  flex-shrink: 0;
}

.ke-quality-point h4 {
  color: var(--ke-navy);
  font-size: 14px;
  margin-bottom: 5px;
}

.ke-quality-point p {
  font-size: 12px;
  line-height: 1.7;
}

/* ==========================================
   ENQUIRY CTA
========================================== */

.ke-cta {
  background:
    linear-gradient(90deg,rgba(7,25,47,.97),rgba(7,25,47,.88)),
    url('/images/hero-panel.jpg') center/cover no-repeat;
  padding: 95px 7%;
  position: relative;
  overflow: hidden;
}

.ke-cta::after {
  content: "";
  position: absolute;
  width: 380px;
  height: 380px;
  border: 1px solid rgba(243,107,24,.3);
  border-radius: 50%;
  right: -100px;
  top: -120px;
}

.ke-cta-inner {
  max-width: 900px;
  margin: auto;
  text-align: center;
  position: relative;
  z-index: 2;
}

.ke-cta h2 {
  color: white;
  font-size: clamp(33px,5vw,54px);
  line-height: 1.2;
  margin-bottom: 20px;
}

.ke-cta h2 span {
  color: var(--ke-orange);
}

.ke-cta p {
  color: #cbd5e1;
  font-size: 14px;
  line-height: 1.9;
  max-width: 650px;
  margin: auto;
}

.ke-cta-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 32px;
}

/* ==========================================
   CONTACT STRIP
========================================== */

.ke-contact-strip {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  background: var(--ke-light);
  padding: 38px 7%;
  gap: 25px;
}

.ke-contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.ke-contact-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  background: white;
  color: var(--ke-orange);
  border-radius: 5px;
  flex-shrink: 0;
}

.ke-contact-item h4 {
  color: var(--ke-navy);
  font-size: 13px;
  margin-bottom: 5px;
}

.ke-contact-item p {
  font-size: 11px;
  line-height: 1.6;
}

/* ==========================================
   FLOATING WHATSAPP
========================================== */

.ke-whatsapp {
  position: fixed;
  z-index: 999;
  right: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 19px;
  background: #20b968;
  color: white;
  border-radius: 50px;
  box-shadow: 0 8px 25px rgba(0,0,0,.2);
  font-size: 12px;
  font-weight: 800;
  transition: .3s;
}

.ke-whatsapp:hover {
  background: #149b54;
  color: white;
  transform: translateY(-5px);
}

/* ==========================================
   KEYFRAMES
========================================== */

@keyframes keHeroEnter {
  from {
    opacity: 0;
    transform: translateY(35px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes keFloat {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-13px); }
}

@keyframes keRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes kePulse {
  0%,100% { box-shadow: 0 0 0 5px rgba(243,107,24,.16); }
  50% { box-shadow: 0 0 0 10px rgba(243,107,24,0); }
}

/* ==========================================
   RESPONSIVE
========================================== */

@media(max-width:1100px) {
  .ke-hero-inner {
    grid-template-columns: 1fr  .7fr;
    gap: 25px;
  }

  .ke-product-grid {
    grid-template-columns: repeat(2,1fr);
  }

  .ke-panel-grid,
  .ke-capability-grid,
  .ke-process-grid {
    grid-template-columns: repeat(2,1fr);
  }

  .ke-about-grid,
  .ke-quality-grid {
    gap: 40px;
  }
}

@media(max-width:800px) {
  .ke-section {
    padding: 75px 6%;
  }

  .ke-hero {
    min-height: auto;
  }

  .ke-hero-inner {
    grid-template-columns: 1fr;
    padding: 80px 6% 110px;
  }

  .ke-hero-visual {
    min-height: 340px;
  }

  .ke-hero h1 {
    font-size: clamp(40px,8vw,58px);
  }

  .ke-hero-bottom {
    left: 6%;
    right: 6%;
  }

  .ke-trust-strip {
    grid-template-columns: repeat(2,1fr);
    padding: 25px 6%;
  }

  .ke-about-grid,
  .ke-quality-grid {
    grid-template-columns: 1fr;
  }

  .ke-about-image {
    height: 400px;
  }

  .ke-industry-grid {
    grid-template-columns: repeat(2,1fr);
  }

  .ke-manufacturing {
    grid-template-columns: 1fr;
  }

  .ke-manufacturing-visual {
    min-height: 380px;
  }

  .ke-manufacturing-content {
    padding: 70px 7%;
  }

  .ke-contact-strip {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .ke-contact-item {
    justify-content: flex-start;
  }
}

@media(max-width:520px) {
  .ke-section {
    padding: 65px 6%;
  }

  .ke-hero-inner {
    padding-top: 65px;
  }

  .ke-hero-logo {
    width: 150px;
    height: 95px;
  }

  .ke-hero h1 {
    font-size: 39px;
    letter-spacing: -1.5px;
  }

  .ke-hero-description {
    font-size: 13px;
  }

  .ke-hero-actions {
    flex-direction: column;
  }

  .ke-hero-actions a {
    width: 100%;
  }

  .ke-hero-visual {
    min-height: 310px;
  }

  .ke-orbit {
    width: 270px;
    height: 270px;
  }

  .ke-visual-card {
    width: 230px;
  }

  .ke-float-top {
    right: -5px;
  }

  .ke-float-bottom {
    left: -5px;
  }

  .ke-hero-bottom {
    font-size: 8px;
  }

  .ke-trust-strip {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .ke-trust-item {
    justify-content: flex-start;
  }

  .ke-product-grid,
  .ke-panel-grid,
  .ke-capability-grid,
  .ke-industry-grid,
  .ke-process-grid {
    grid-template-columns: 1fr;
  }

  .ke-product-image {
    height: 235px;
  }

  .ke-about-image {
    height: 330px;
  }

  .ke-about-logo {
    width: 145px;
  }

  .ke-cta {
    padding: 70px 6%;
  }

  .ke-cta-actions {
    flex-direction: column;
  }

  .ke-cta-actions a {
    width: 100%;
  }

  .ke-whatsapp {
    right: 15px;
    bottom: 15px;
    padding: 13px;
  }

  .ke-whatsapp span {
    display: none;
  }
}

@media(prefers-reduced-motion:reduce) {
  .ke-home *,
  .ke-home *::before,
  .ke-home *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }

  .ke-reveal {
    opacity: 1;
    transform: none;
  }
}

      `}</style>

      <div className="ke-home">
        {/* ==================================
            1. HERO SECTION
        ================================== */}
        <HomeSlider />
        <section className="ke-hero">
          <div className="ke-hero-inner">
            <div className="ke-hero-content">
              <img
                src="/images/komal-logo.png"
                alt="Komal Electricals Logo"
                className="ke-hero-logo"
              />

              <div className="ke-hero-label">
                <span className="ke-live-dot"></span>
                ELECTRICAL ENGINEERING & MANUFACTURING
              </div>

              <h1>
                Powering Progress.
                <br />
                <span>Engineering Reliability.</span>
              </h1>

              <p className="ke-hero-description">
                Welcome to Komal Electricals. We specialize in electrical
                products and panel manufacturing solutions, with a focus on
                quality, precision and customer requirements.
              </p>

              <div className="ke-hero-actions">
                <Link to="/products" className="ke-btn ke-btn-primary">
                  Explore Our Products
                  <ArrowRight size={18} />
                </Link>

                <Link to="/get-a-quote" className="ke-btn ke-btn-outline">
                  Discuss Your Requirement
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="ke-hero-location">
                <MapPin size={16} />
                Aurangabad, Maharashtra, India
              </div>
            </div>

            <div className="ke-hero-visual">
              <div className="ke-orbit"></div>

              <div className="ke-floating-label ke-float-top">
                <ShieldCheck size={18} />
                Quality Focused
              </div>

              <div className="ke-visual-card">
                <div className="ke-visual-icon">
                  <Zap />
                </div>

                <h3>Electrical Excellence</h3>

                <p>
                  Product-focused engineering for industrial electrical
                  applications.
                </p>
              </div>

              <div className="ke-floating-label ke-float-bottom">
                <Settings size={18} />
                Engineered Solutions
              </div>
            </div>
          </div>

          <div className="ke-hero-bottom">
            <span>KOMAL ELECTRICALS — ESTABLISHED IN AURANGABAD</span>
            <span>SCROLL TO DISCOVER ↓</span>
          </div>
        </section>

        {/* ==================================
            2. COMPANY HIGHLIGHTS
        ================================== */}

        <section className="ke-trust-strip">
          <div className="ke-trust-item">
            <Factory />
            <div>
              <strong>Manufacturing Focus</strong>
              <span>Electrical products & panels</span>
            </div>
          </div>

          <div className="ke-trust-item">
            <ShieldCheck />
            <div>
              <strong>Quality Commitment</strong>
              <span>Quality-conscious approach</span>
            </div>
          </div>

          <div className="ke-trust-item">
            <Settings />
            <div>
              <strong>Technical Solutions</strong>
              <span>Application-oriented products</span>
            </div>
          </div>

          <div className="ke-trust-item">
            <MapPin />
            <div>
              <strong>Aurangabad</strong>
              <span>Maharashtra, India</span>
            </div>
          </div>
        </section>

        {/* ==================================
            3. ABOUT COMPANY
        ================================== */}

        <section className="ke-section">
          <div className="ke-container ke-about-grid">
            <div className="ke-about-image-wrap ke-reveal">
              <div className="ke-about-image"></div>

              <div className="ke-about-logo">
                <img src="/images/komal-logo.png" alt="Komal Electricals" />
              </div>
            </div>

            <div className="ke-about-content ke-reveal">
              <span className="ke-eyebrow">
                <span className="eyebrow-line"></span>
                ABOUT KOMAL ELECTRICALS
              </span>

              <h2>
                Engineering Solutions.
                <span> Creating Possibilities.</span>
              </h2>

              <p>
                Komal Electricals is an electrical products and panel
                manufacturing company based in Aurangabad, Maharashtra, India.
              </p>

              <p>
                We focus on manufacturing electrical components and panel
                solutions for industrial and commercial applications. Our
                product portfolio includes Resin Cast, Tape Wound, Nylon and
                various electrical panels.
              </p>

              <p>
                Our approach is built around understanding customer
                requirements, suitable product selection and a commitment to
                quality.
              </p>

              <div className="ke-about-points">
                <div className="ke-about-point">
                  <CheckCircle2 />
                  Customer-oriented solutions
                </div>

                <div className="ke-about-point">
                  <CheckCircle2 />
                  Application-focused manufacturing
                </div>

                <div className="ke-about-point">
                  <CheckCircle2 />
                  Focus on quality and reliability
                </div>
              </div>

              <Link to="/about" className="ke-text-link">
                Discover Our Company
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================
            4. FEATURED PRODUCTS
        ================================== */}

        <section className="ke-section ke-featured">
          <div className="ke-container">
            <SectionHeading
              eyebrow="OUR CORE PRODUCTS"
              title="Specialized Electrical"
              highlight="Products"
              description="Discover our key electrical product categories, developed around different industrial and electrical application requirements."
            />

            <div className="ke-product-grid">
              {featuredProducts.map((product, index) => (
                <Link
                  to={`/products/${product.slug}`}
                  className={`ke-product-card ke-reveal ke-delay-${index + 1}`}
                  key={product.number}
                >
                  <div className="ke-product-image">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                    />

                    <span className="ke-product-tag">{product.tag}</span>

                    <span className="ke-product-number">{product.number}</span>
                  </div>

                  <div className="ke-product-body">
                    <div className="ke-product-icon">{product.icon}</div>

                    <h3>{product.title}</h3>

                    <div className="ke-product-subtitle">
                      {product.subtitle}
                    </div>

                    <p>{product.description}</p>

                    <div className="ke-product-footer">
                      <span>Explore Product</span>
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div
              style={{
                textAlign: "center",
                marginTop: "45px",
              }}
            >
              <Link to="/products" className="ke-btn ke-btn-primary">
                View Complete Product Range
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================
            5. ELECTRICAL PANEL SOLUTIONS
        ================================== */}

        <section className="ke-section ke-panels">
          <div className="ke-container">
            <SectionHeading
              eyebrow="ELECTRICAL PANEL SOLUTIONS"
              title="Power Distribution &"
              highlight="Control Panels"
              description="Explore our electrical panel categories for industrial power distribution, motor control and electrical management applications."
            />

            <div className="ke-panel-grid">
              {panelProducts.map((product, index) => (
                <div
                  className={`ke-panel-card ke-reveal ke-delay-${index + 1}`}
                  key={product.title}
                >
                  <div className="ke-panel-icon">{product.icon}</div>

                  <h3>{product.title}</h3>

                  <small>{product.subtitle}</small>

                  <p>{product.description}</p>

                  <Link to={`/products/${product.slug}`}>
                    Explore Solution
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================
            6. WHY CHOOSE US
        ================================== */}

        <section className="ke-section ke-capabilities">
          <div className="ke-container">
            <SectionHeading
              eyebrow="WHY KOMAL ELECTRICALS"
              title="The Right Approach to"
              highlight="Electrical Solutions"
              description="Our focus is on understanding applications, selecting suitable solutions and maintaining a quality-conscious manufacturing approach."
              light
            />

            <div className="ke-capability-grid">
              {advantages.map((item, index) => (
                <div
                  className={`ke-capability-card ke-reveal ke-delay-${index + 1}`}
                  key={item.title}
                >
                  {item.icon}

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================
            7. INDUSTRIES WE SERVE
        ================================== */}

        <section className="ke-section ke-industries">
          <div className="ke-container">
            <SectionHeading
              eyebrow="INDUSTRIES & APPLICATIONS"
              title="Solutions Across"
              highlight="Industries"
              description="Our electrical products and solutions are intended for a range of industrial and commercial application requirements."
              center
            />

            <div className="ke-industry-grid">
              {industries.map((industry, index) => (
                <div
                  className={`ke-industry-card ke-reveal ke-delay-${(index % 3) + 1}`}
                  key={industry.title}
                >
                  <span>0{index + 1}</span>

                  {industry.icon}

                  <h3>{industry.title}</h3>

                  <p>{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================
            8. MANUFACTURING SECTION
        ================================== */}

        <section className="ke-manufacturing">
          <div className="ke-manufacturing-visual">
            <div className="ke-manufacturing-label">
              <strong>Komal Electricals</strong>
              <span>Manufacturing & Engineering Approach</span>
            </div>
          </div>

          <div className="ke-manufacturing-content ke-reveal">
            <span className="ke-eyebrow">
              <span className="eyebrow-line"></span>
              MANUFACTURING CAPABILITIES
            </span>

            <h2>
              From Engineering
              <span> to Manufacturing.</span>
            </h2>

            <p>
              We emphasize a structured approach to manufacturing electrical
              products and panels. Understanding the application, planning the
              process and focusing on quality are central to our approach.
            </p>

            <div className="ke-manufacturing-list">
              <div>
                <CheckCircle2 />
                Requirement-based planning
              </div>

              <div>
                <CheckCircle2 />
                Product and material selection
              </div>

              <div>
                <CheckCircle2 />
                Manufacturing and assembly
              </div>

              <div>
                <CheckCircle2 />
                Inspection as per requirements
              </div>
            </div>

            <Link to="/manufacturing" className="ke-btn ke-btn-primary">
              Explore Manufacturing
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* ==================================
            9. MANUFACTURING WORKFLOW
        ================================== */}

        <section className="ke-section ke-process">
          <div className="ke-container">
            <SectionHeading
              eyebrow="OUR WORKING PROCESS"
              title="A Structured Approach to"
              highlight="Every Requirement"
              description="We follow a requirement-oriented workflow to understand and coordinate electrical product manufacturing projects."
              center
            />

            <div className="ke-process-grid">
              {manufacturingSteps.map((step, index) => (
                <div
                  className={`ke-process-card ke-reveal ke-delay-${index + 1}`}
                  key={step.number}
                >
                  <div className="ke-process-number">{step.number}</div>

                  <div className="ke-process-icon">{step.icon}</div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================
            10. QUALITY COMMITMENT
        ================================== */}

        <section className="ke-section ke-quality">
          <div className="ke-container ke-quality-grid">
            <div className="ke-quality-visual ke-reveal">
              <Award />

              <h3>
                Quality is an important part of every electrical solution.
              </h3>

              <p>
                Our focus is on product requirements, suitable materials and
                inspection.
              </p>
            </div>

            <div className="ke-quality-content ke-reveal">
              <span className="ke-eyebrow">
                <span className="eyebrow-line"></span>
                OUR QUALITY COMMITMENT
              </span>

              <h2>
                Quality in Every
                <span> Detail.</span>
              </h2>

              <p>
                We understand that electrical products require attention to
                specifications, materials and manufacturing processes. We aim to
                maintain a quality-conscious approach throughout our work.
              </p>

              <div className="ke-quality-point">
                <ShieldCheck />

                <div>
                  <h4>Material Consideration</h4>
                  <p>
                    Attention to appropriate material selection based on product
                    applications.
                  </p>
                </div>
              </div>

              <div className="ke-quality-point">
                <ClipboardCheck />

                <div>
                  <h4>Process-oriented Manufacturing</h4>
                  <p>
                    Focus on organized manufacturing and assembly processes.
                  </p>
                </div>
              </div>

              <div className="ke-quality-point">
                <CheckCircle2 />

                <div>
                  <h4>Product Inspection</h4>
                  <p>
                    Inspection and verification based on applicable
                    specifications and requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================
            11. ENQUIRY CTA
        ================================== */}

        <section className="ke-cta">
          <div className="ke-cta-inner">
            <span className="ke-eyebrow">
              <span className="eyebrow-line"></span>
              LET'S WORK TOGETHER
            </span>

            <h2>
              Looking for the Right
              <span> Electrical Solution?</span>
            </h2>

            <p>
              Have a requirement for Resin Cast, Tape Wound, Nylon products or
              electrical panels? Get in touch with Komal Electricals to discuss
              your application and product requirements.
            </p>

            <div className="ke-cta-actions">
              <Link to="/get-a-quote" className="ke-btn ke-btn-primary">
                Request a Quotation
                <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="ke-btn ke-btn-outline">
                Contact Our Team
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================
            12. CONTACT INFORMATION
        ================================== */}

        <section className="ke-contact-strip">
          <div className="ke-contact-item">
            <div className="ke-contact-icon">
              <MapPin />
            </div>

            <div>
              <h4>Our Location</h4>
              <p>Aurangabad, Maharashtra, India</p>
            </div>
          </div>

          <div className="ke-contact-item">
            <div className="ke-contact-icon">
              <Phone />
            </div>

            <div>
              <h4>Business Enquiries</h4>
              <p>Contact us for product enquiries</p>
            </div>
          </div>

          <div className="ke-contact-item">
            <div className="ke-contact-icon">
              <Mail />
            </div>

            <div>
              <h4>Email Enquiries</h4>
              <p>Get in touch with our team</p>
            </div>
          </div>
        </section>

        {/* ==================================
            13. FLOATING WHATSAPP
        ================================== */}

        <a
          href="https://wa.me/91XXXXXXXXXX?text=Hello%20Komal%20Electricals%2C%20I%20want%20to%20enquire%20about%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          className="ke-whatsapp"
          aria-label="Contact Komal Electricals on WhatsApp"
        >
          <MessageCircle size={23} />
          <span>Chat With Us</span>
        </a>
      </div>
    </>
  );
}

export default Home;
