import { useEffect } from 'react';

declare global {
  interface Window {
    ecwid_dynamic_widgets?: boolean;
    xProductBrowser?: (...args: string[]) => void;
    Ecwid?: {
      init: () => void;
      destroy: () => void;
    };
  }
}

const STORE_ID = '135961507';

export default function EcwidStorePage() {
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

    if (window.xProductBrowser) {
      mountStore();
    } else {
      const interval = setInterval(() => {
        if (window.xProductBrowser) {
          clearInterval(interval);
          mountStore();
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      window.Ecwid?.destroy();
    };
  }, []);

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
