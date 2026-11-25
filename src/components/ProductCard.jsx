import { Link } from "react-router-dom";
import { ArrowUpRight, MoveRight } from "lucide-react";
import "../styles/ProductCard.css";

export default function ProductCard({ product, index }) {
  return (
    <article className="ke-product-card" style={{ "--card-index": index }}>
      <Link
        to={`/products/${product.id}`}
        className="ke-product-image-link"
        aria-label={`View ${product.name} details`}
      >
        <div className="ke-product-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="ke-product-image"
            loading="lazy"
          />

          <div className="ke-product-image-overlay" />

          <span className="ke-product-number">{product.number}</span>

          <span className="ke-product-image-arrow">
            <ArrowUpRight size={22} />
          </span>
        </div>
      </Link>

      <div className="ke-product-card-content">
        <span className="ke-product-category">{product.category}</span>

        <h3>{product.name}</h3>

        <p>{product.shortDescription}</p>

        <Link
          to={`/products/${product.id}`}
          className="ke-product-details-link"
        >
          View Product Details
          <MoveRight size={18} />
        </Link>
      </div>

      <div className="ke-product-card-accent" />
    </article>
  );
}
