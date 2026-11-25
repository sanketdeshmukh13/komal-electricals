import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Factory,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { products } from "../data/products";
import "../styles/productDetails.css";

export default function ProductDetails() {
  const { productId } = useParams();

  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <main className="ke-product-not-found">
        <h1>Product Not Found</h1>
        <p>The product you are looking for does not exist.</p>
        <Link to="/products">Back to Products</Link>
      </main>
    );
  }

  const otherProducts = products.filter((item) => item.id !== product.id);

  return (
    <main className="ke-product-details-page">
      {/* HERO */}
      <section className="ke-product-details-hero">
        <div className="ke-product-details-hero-bg" />

        <div className="ke-product-details-hero-container">
          <div className="ke-product-details-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products">Products</Link>
            <ChevronRight size={14} />
            <span>{product.name}</span>
          </div>

          <div className="ke-product-details-hero-grid">
            <div className="ke-product-details-hero-content">
              <div className="ke-product-details-eyebrow">
                <span />
                {product.category}
              </div>

              <h1>
                {product.name}
                <span> Solutions</span>
              </h1>

              <p>{product.description}</p>

              <div className="ke-product-details-hero-actions">
                <a
                  href="#product-information"
                  className="ke-product-details-primary"
                >
                  Explore Product
                  <ArrowRight size={18} />
                </a>

                <Link to="/contact" className="ke-product-details-secondary">
                  Request a Quote
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="ke-product-details-trust">
                <ShieldCheck size={18} />
                <span>Quality-focused manufacturing</span>
              </div>
            </div>

            <div className="ke-product-details-hero-image">
              <div className="ke-product-details-image-frame">
                <img src={product.image} alt={product.name} />

                <div className="ke-product-details-image-label">
                  <span>PRODUCT</span>
                  <strong>{product.number}</strong>
                </div>
              </div>

              <div className="ke-product-details-image-orbit" />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT INFORMATION */}
      <section
        className="ke-product-details-information"
        id="product-information"
      >
        <div className="ke-product-details-section-container">
          <div className="ke-product-details-section-heading">
            <div className="ke-product-details-eyebrow dark">
              <span />
              PRODUCT OVERVIEW
            </div>

            <h2>
              Designed around
              <span> your requirements.</span>
            </h2>

            <p>{product.description}</p>
          </div>

          <div className="ke-product-details-information-grid">
            <div className="ke-product-details-feature-list">
              <h3>Product Features</h3>

              {product.features.map((feature, index) => (
                <div className="ke-product-details-feature" key={feature}>
                  <span className="ke-product-details-feature-number">
                    0{index + 1}
                  </span>

                  <CheckCircle2 size={19} />

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="ke-product-details-specifications">
              <div className="ke-product-details-spec-heading">
                <Zap size={23} />
                <h3>Product Specifications</h3>
              </div>

              <div className="ke-product-details-spec-list">
                {product.specifications.map((spec) => (
                  <div className="ke-product-details-spec-row" key={spec.label}>
                    <span>{spec.label}</span>
                    <strong>{spec.value}</strong>
                  </div>
                ))}
              </div>

              <p className="ke-product-details-spec-note">
                Final specifications and customization options can be confirmed
                based on your application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="ke-product-details-applications">
        <div className="ke-product-details-section-container">
          <div className="ke-product-details-applications-heading">
            <div>
              <div className="ke-product-details-eyebrow dark">
                <span />
                APPLICATIONS
              </div>

              <h2>
                Where our products
                <span> make a difference.</span>
              </h2>
            </div>

            <Factory size={45} strokeWidth={1.3} />
          </div>

          <div className="ke-product-details-applications-grid">
            {product.applications.map((application, index) => (
              <div
                className="ke-product-details-application-card"
                key={application}
              >
                <span>0{index + 1}</span>
                <h3>{application}</h3>
                <ArrowUpRight size={20} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section className="ke-product-details-cta">
        <div className="ke-product-details-cta-container">
          <div>
            <span>LET'S DISCUSS YOUR REQUIREMENTS</span>
            <h2>
              Looking for {product.name}?
              <br />
              <strong>Let's talk.</strong>
            </h2>
            <p>
              Contact Komal Electricals to discuss your requirements and get
              product information.
            </p>
          </div>

          <Link to="/contact" className="ke-product-details-cta-button">
            Request a Quote
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

      {/* OTHER PRODUCTS */}
      <section className="ke-product-details-related">
        <div className="ke-product-details-section-container">
          <div className="ke-product-details-related-heading">
            <div>
              <span>EXPLORE MORE</span>
              <h2>Other Products</h2>
            </div>

            <Link to="/products">
              View All Products
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="ke-product-details-related-grid">
            {otherProducts.map((item) => (
              <Link
                to={`/products/${item.id}`}
                className="ke-product-details-related-card"
                key={item.id}
              >
                <img src={item.image} alt={item.name} loading="lazy" />

                <div>
                  <span>{item.category}</span>
                  <h3>{item.name}</h3>
                </div>

                <ArrowUpRight size={20} />
              </Link>
            ))}
          </div>

          <Link to="/products" className="ke-product-details-back">
            <ArrowLeft size={17} />
            Back to All Products
          </Link>
        </div>
      </section>
    </main>
  );
}
