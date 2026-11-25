import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Search,
  ShieldCheck,
  Settings2,
  Zap,
} from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/products.css";

const categories = [
  "All Products",
  "Electrical Insulation",
  "Electrical Components",
  "Engineering Components",
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search) ||
        product.shortDescription.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <main className="ke-products-page">
      {/* HERO */}
      <section className="ke-products-hero">
        <div className="ke-products-hero-background" />
        <div className="ke-products-hero-grid" />

        <div className="ke-products-hero-container">
          <div className="ke-products-hero-content">
            <div className="ke-products-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Products</span>
            </div>

            <div className="ke-products-eyebrow">
              <span />
              OUR PRODUCT RANGE
            </div>

            <h1>
              Engineered for
              <span> Performance.</span>
            </h1>

            <p>
              Explore our range of electrical and industrial components,
              developed with a focus on quality, precision, and dependable
              performance.
            </p>

            <div className="ke-products-hero-actions">
              <a href="#product-catalogue" className="ke-products-primary-btn">
                Explore Products
                <ArrowRight size={18} />
              </a>

              <Link to="/contact" className="ke-products-secondary-btn">
                Request a Quote
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className="ke-products-hero-visual">
            <div className="ke-products-hero-circle">
              <div className="ke-products-hero-circle-inner">
                <Zap size={70} strokeWidth={1.3} />
              </div>
            </div>

            <div className="ke-products-hero-floating-card">
              <ShieldCheck size={24} />
              <div>
                <strong>Quality Focused</strong>
                <span>Industrial Solutions</span>
              </div>
            </div>
          </div>
        </div>

        <a href="#product-catalogue" className="ke-products-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={17} />
        </a>
      </section>

      {/* INTRO */}
      <section className="ke-products-intro">
        <div className="ke-products-intro-container">
          <div className="ke-products-intro-label">
            <span>01</span>
            <span>WHAT WE MANUFACTURE</span>
          </div>

          <div className="ke-products-intro-content">
            <h2>
              Solutions built around
              <span> your requirements.</span>
            </h2>

            <p>
              At Komal Electricals, we focus on manufacturing electrical and
              industrial products with attention to detail, material quality,
              and application needs. Explore our core product range and find the
              right solution for your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT CATALOGUE */}
      <section className="ke-products-catalogue" id="product-catalogue">
        <div className="ke-products-section-heading">
          <div>
            <div className="ke-products-eyebrow dark">
              <span />
              OUR PRODUCTS
            </div>

            <h2>
              Explore Our
              <span> Product Range</span>
            </h2>
          </div>

          <p>
            Discover our products, their applications, and the details that
            matter to your project.
          </p>
        </div>

        {/* Search */}
        <div className="ke-products-toolbar">
          <div className="ke-products-search">
            <Search size={19} />
            <input
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="Search products"
            />
          </div>

          <div className="ke-products-result-count">
            <Settings2 size={17} />
            {filteredProducts.length} Products
          </div>
        </div>

        {/* Filters */}
        <div className="ke-products-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`ke-products-filter ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product cards */}
        {filteredProducts.length > 0 ? (
          <div className="ke-products-grid">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="ke-products-empty">
            <Search size={32} />
            <h3>No products found</h3>
            <p>Try another search or select a different category.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All Products");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* MANUFACTURING SECTION */}
      <section className="ke-products-manufacturing">
        <div className="ke-products-manufacturing-container">
          <div className="ke-products-manufacturing-content">
            <div className="ke-products-eyebrow">
              <span />
              OUR APPROACH
            </div>

            <h2>
              Manufacturing with
              <span> purpose and precision.</span>
            </h2>

            <p>
              We understand that every electrical application has its own
              requirements. Our manufacturing approach focuses on understanding
              those needs and delivering products with consistent quality and
              attention to detail.
            </p>

            <Link to="/contact" className="ke-products-manufacturing-link">
              Discuss Your Requirements
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="ke-products-manufacturing-visual">
            <img
              src="/images/manufacturing.jpg"
              alt="Komal Electricals manufacturing"
              loading="lazy"
            />

            <div className="ke-products-manufacturing-badge">
              <span>BUILT AROUND</span>
              <strong>Quality</strong>
              <span>AND RELIABILITY</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ke-products-cta">
        <div className="ke-products-cta-container">
          <div>
            <span className="ke-products-cta-label">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's find the right
              <span> electrical solution.</span>
            </h2>

            <p>
              Contact our team to discuss your product requirements and receive
              a quotation.
            </p>
          </div>

          <Link to="/contact" className="ke-products-cta-button">
            Get a Quote
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
