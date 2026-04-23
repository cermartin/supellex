import { useState } from 'react';
import { Page } from './types';
import { PRODUCTS } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import ProductDetail from './components/ProductDetail';
import WhySupellex from './components/WhySupellex';
import Footer from './components/Footer';
import BuildBadge from './components/BuildBadge';

export default function App() {
  const [page, setPage] = useState<Page>({ type: 'home' });

  const handleNavClick = (href: string) => {
    const scrollToSection = () => {
      const el = document.getElementById(href.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    if (page.type !== 'home') {
      setPage({ type: 'home' });
      setTimeout(scrollToSection, 50);
    } else {
      scrollToSection();
    }
  };

  const handleProductClick = (id: string) => {
    setPage({ type: 'product', id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setPage({ type: 'home' });
    setTimeout(() => {
      const el = document.getElementById('products');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleComingSoon = () => setPage({ type: 'coming-soon' });

  if (page.type === 'product') {
    const product = PRODUCTS.find((p) => p.id === page.id);
    if (!product) return null;
    return (
      <>
        <Header onNavClick={handleNavClick} />
        <ProductDetail
          product={product}
          onBack={handleBack}
          onComingSoon={handleComingSoon}
        />
        <Footer onNavClick={handleNavClick} />
        <BuildBadge />
      </>
    );
  }

  if (page.type === 'coming-soon') {
    return (
      <>
        <Header onNavClick={handleNavClick} />
        <div className="min-h-screen flex flex-col items-center justify-center bg-brand-black text-white px-6 text-center">
          <div className="mb-6">
            <div className="w-16 h-1 bg-brand-red mx-auto mb-8" />
            <h1 className="text-5xl font-black tracking-tight mb-4">Coming Soon</h1>
            <p className="text-brand-grey text-lg max-w-md">
              This product listing will be available very soon. In the meantime, browse our full range on Amazon UK.
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => setPage({ type: 'home' })}
              className="px-6 py-3 border border-white/20 text-white hover:border-brand-red hover:text-brand-red transition-colors text-sm font-semibold tracking-widest uppercase"
            >
              Back Home
            </button>
            <a
              href="https://www.amazon.co.uk/s?k=Supellex&i=kitchen&search-type=ss"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white transition-colors text-sm font-semibold tracking-widest uppercase"
            >
              Shop on Amazon
            </a>
          </div>
        </div>
        <BuildBadge />
      </>
    );
  }

  return (
    <>
      <Header onNavClick={handleNavClick} />
      <Hero onShopClick={() => handleNavClick('#products')} />
      <ProductGallery onProductClick={handleProductClick} />
      <WhySupellex />
      <Footer onNavClick={handleNavClick} />
      <BuildBadge />
    </>
  );
}
