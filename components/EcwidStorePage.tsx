import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    ecwid_dynamic_widgets?: boolean;
    xProductBrowser?: (...args: string[]) => void;
    Ecwid?: {
      init: () => void;
      destroy: () => void;
      openPage: (page: string) => void;
      OnAPILoaded: { add: (fn: () => void) => void };
    };
  }
}

const STORE_ID = '135961507';

export default function EcwidStorePage() {
  const location = useLocation();
  const openCart = new URLSearchParams(location.search).get('opencart') === '1';

  useEffect(() => {
    window.ecwid_dynamic_widgets = true;

    const mountStore = () => {
      if (window.xProductBrowser) {
        window.xProductBrowser(
          'categoriesPerRow=3',
          'views=grid(20,3) list(60) table(60)',
          'categoryView=grid',
          'searchView=list',
          `id=my-store-${STORE_ID}`,
        );
      }
    };

    const tryOpenCart = () => {
      if (openCart && window.Ecwid?.openPage) {
        window.Ecwid.openPage('cart');
      }
    };

    if (window.xProductBrowser) {
      mountStore();
      // Ecwid already loaded — wait for API ready then open cart
      if (openCart) {
        window.Ecwid?.OnAPILoaded?.add(tryOpenCart) ?? setTimeout(tryOpenCart, 800);
      }
    } else {
      const interval = setInterval(() => {
        if (window.xProductBrowser) {
          clearInterval(interval);
          mountStore();
          if (openCart) {
            window.Ecwid?.OnAPILoaded?.add(tryOpenCart) ?? setTimeout(tryOpenCart, 800);
          }
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      window.Ecwid?.destroy();
    };
  }, [openCart]);

  return (
    <main className="pt-24 min-h-screen bg-brand-offwhite">
      {/* Banner */}
      <div className="bg-brand-black py-16 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase">Shop</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
            All <span className="text-brand-red">Products</span>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div id={`my-store-${STORE_ID}`} />
      </div>
    </main>
  );
}
