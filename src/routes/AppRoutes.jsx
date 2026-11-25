import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Industries from "../pages/Industries";
import Projects from "../pages/Projects";
import Manufacturing from "../pages/Manufacturing";
import Contact from "../pages/Contact";
import GetQuote from "../pages/GetQuote";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:slug" element={<ProductDetails />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/manufacturing" element={<Manufacturing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/get-a-quote" element={<GetQuote />} />

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;
