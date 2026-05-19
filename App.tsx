import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PromoBanner from './components/PromoBanner';
import ProductGallery from './components/ProductGallery';
import GetInspired from './components/GetInspired';
import EcwidStorePage from './components/EcwidStorePage';
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
import ReviewsCTA from './components/ReviewsCTA';

function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  return (
    <>
      <Header
        onNavClick={(href) => navigate(`/${href}`)}
        onProductClick={(id) => navigate(`/product/${id}`)}
        onCartClick={() => navigate('/products?opencart=1')}
      />
      {children}
      <Footer onNavClick={(href) => navigate(`/${href}`)} />
      <BuildBadge />
    </>
  );
}



function FAQRoute() {
  const navigate = useNavigate();
  return <FAQPage onNavClick={(href) => navigate(`/${href}`)} />;
}

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Hero onShopClick={() => navigate('/products')} />
      <PromoBanner onCtaClick={(href) => navigate(`/${href}`)} />
      <BrandStatement />
      <ProductGallery
        onProductClick={(id) => navigate(`/product/${id}`)}
        onBrowseAll={() => navigate('/products')}
      />
      <GetInspired onProductClick={() => navigate('/products')} />
      <ReviewsCTA
        onBrowse={() => navigate('/reviews')}
        onLeave={() => { window.location.href = 'mailto:support@supellex.co.uk?subject=Product%20Review'; }}
      />
    </>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<EcwidStorePage />} />
        <Route path="/why" element={<WhySupellexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/faq" element={<FAQRoute />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
