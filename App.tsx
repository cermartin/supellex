import { useState } from 'react';
import { Page } from './types';
import { PRODUCTS } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import ProductsPage from './components/ProductsPage';
import ProductDetail from './components/ProductDetail';
import BrandStatement from './components/BrandStatement';
import WhySupellex from './components/WhySupellex';
import WhySupellexPage from './components/WhySupellexPage';
import Footer from './components/Footer';
import BuildBadge from './components/BuildBadge';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ShippingPage from './components/ShippingPage';
import ReviewsPage from './components/ReviewsPage';
import FAQPage from './components/FAQPage';

export default function App() {
  const [page, setPage] = useState<Page>({ type: 'home' });

  const handleNavClick = (href: string) => {
    if (href === 'products') { setPage({ type: 'products' }); window.scrollTo({ top: 0 }); return; }
    if (href === 'why')      { setPage({ type: 'why' });      window.scrollTo({ top: 0 }); return; }
    if (href === 'about')    { setPage({ type: 'about' });    window.scrollTo({ top: 0 }); return; }
    if (href === 'contact')  { setPage({ type: 'contact' });  window.scrollTo({ top: 0 }); return; }
    if (href === 'shipping') { setPage({ type: 'shipping' }); window.scrollTo({ top: 0 }); return; }
    if (href === 'reviews')  { setPage({ type: 'reviews' });  window.scrollTo({ top: 0 }); return; }
    if (href === 'faq')      { setPage({ type: 'faq' });      window.scrollTo({ top: 0 }); return; }

    // Home anchor (logo click or '#')
    if (page.type !== 'home') {
      setPage({ type: 'home' });
    }
  };

  const handleProductClick = (id: string) => {
    setPage({ type: 'product', id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setPage({ type: 'products' });
    window.scrollTo({ top: 0 });
  };

  if (page.type === 'product') {
    const product = PRODUCTS.find((p) => p.id === page.id);
    if (!product) return null;
    return (
      <>
        <Header onNavClick={handleNavClick} onProductClick={handleProductClick} />
        <ProductDetail product={product} onBack={handleBack} />
        <Footer onNavClick={handleNavClick} />
        <BuildBadge />
      </>
    );
  }

  if (page.type === 'products') {
    return (
      <>
        <Header onNavClick={handleNavClick} onProductClick={handleProductClick} />
        <ProductsPage onProductClick={handleProductClick} />
        <Footer onNavClick={handleNavClick} />
        <BuildBadge />
      </>
    );
  }

  if (page.type === 'why') {
    return (
      <>
        <Header onNavClick={handleNavClick} onProductClick={handleProductClick} />
        <WhySupellexPage />
        <Footer onNavClick={handleNavClick} />
        <BuildBadge />
      </>
    );
  }

  if (page.type === 'about') {
    return (
      <>
        <Header onNavClick={handleNavClick} onProductClick={handleProductClick} />
        <AboutPage />
        <Footer onNavClick={handleNavClick} />
        <BuildBadge />
      </>
    );
  }

  if (page.type === 'contact') {
    return (
      <>
        <Header onNavClick={handleNavClick} onProductClick={handleProductClick} />
        <ContactPage />
        <Footer onNavClick={handleNavClick} />
        <BuildBadge />
      </>
    );
  }

  if (page.type === 'shipping') {
    return (
      <>
        <Header onNavClick={handleNavClick} onProductClick={handleProductClick} />
        <ShippingPage />
        <Footer onNavClick={handleNavClick} />
        <BuildBadge />
      </>
    );
  }

  if (page.type === 'reviews') {
    return (
      <>
        <Header onNavClick={handleNavClick} onProductClick={handleProductClick} />
        <ReviewsPage />
        <Footer onNavClick={handleNavClick} />
        <BuildBadge />
      </>
    );
  }

  if (page.type === 'faq') {
    return (
      <>
        <Header onNavClick={handleNavClick} onProductClick={handleProductClick} />
        <FAQPage />
        <Footer onNavClick={handleNavClick} />
        <BuildBadge />
      </>
    );
  }

  if (page.type === 'coming-soon') {
    return (
      <>
        <Header onNavClick={handleNavClick} onProductClick={handleProductClick} />
        <div className="min-h-screen flex flex-col items-center justify-center bg-brand-black text-white px-6 text-center">
          <div className="w-16 h-1 bg-brand-red mx-auto mb-8" />
          <h1 className="text-5xl font-black tracking-tight mb-4">Coming Soon</h1>
          <p className="text-brand-grey text-lg max-w-md mb-10">
            This product will be available to purchase very soon. Check back shortly.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setPage({ type: 'home' })}
              className="px-6 py-3 border border-white/20 text-white hover:border-brand-red hover:text-brand-red transition-colors text-sm font-semibold tracking-widest uppercase"
            >
              Back Home
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white transition-colors text-sm font-semibold tracking-widest uppercase"
            >
              Contact Us
            </button>
          </div>
        </div>
        <BuildBadge />
      </>
    );
  }

  return (
    <>
      <Header onNavClick={handleNavClick} onProductClick={handleProductClick} />
      <Hero onShopClick={() => handleNavClick('products')} />
      <BrandStatement />
      <ProductGallery onProductClick={handleProductClick} />
      <WhySupellex />
      <Footer onNavClick={handleNavClick} />
      <BuildBadge />
    </>
  );
}
