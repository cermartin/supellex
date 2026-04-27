import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { PRODUCTS } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import ProductsPage from './components/ProductsPage';
import ProductDetail from './components/ProductDetail';
import BrandStatement from './components/BrandStatement';
import Footer from './components/Footer';
import BuildBadge from './components/BuildBadge';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ShippingPage from './components/ShippingPage';
import ReviewsPage from './components/ReviewsPage';
import FAQPage from './components/FAQPage';
import TermsPage from './components/TermsPage';
import WhySupellexPage from './components/WhySupellexPage';

function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  return (
    <>
      <Header
        onNavClick={(href) => navigate(`/${href}`)}
        onProductClick={(id) => navigate(`/product/${id}`)}
      />
      {children}
      <Footer onNavClick={(href) => navigate(`/${href}`)} />
      <BuildBadge />
    </>
  );
}

function ProductDetailRoute() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return <div className="pt-32 text-center text-brand-grey">Product not found.</div>;
  return (
    <ProductDetail
      product={product}
      onBack={() => navigate('/products')}
    />
  );
}

function ProductsRoute() {
  const navigate = useNavigate();
  return <ProductsPage onProductClick={(id) => navigate(`/product/${id}`)} />;
}

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Hero onShopClick={() => navigate('/products')} />
      <BrandStatement />
      <ProductGallery
        onProductClick={(id) => navigate(`/product/${id}`)}
        onBrowseAll={() => navigate('/products')}
      />
    </>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsRoute />} />
        <Route path="/product/:id" element={<ProductDetailRoute />} />
        <Route path="/why" element={<WhySupellexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/faq" element={<FAQPage onNavClick={(href) => navigate(`/${href}`)} />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
