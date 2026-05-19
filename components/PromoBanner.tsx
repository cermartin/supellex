import { useEffect, useRef, useState } from 'react';

interface Slide {
  tiles: string[];
  subtitle: string;
  ctas: { label: string; href: string }[];
  image?: string;
}

const SLIDES: Slide[] = [
  {
    tiles: ['P', 'R', 'E', 'M', 'I', 'U', 'M'],
    subtitle: 'Bedroom furniture built for real homes',
    ctas: [
      { label: 'Wardrobes', href: 'products' },
      { label: 'Dressing Tables', href: 'products' },
      { label: 'Kids Beds', href: 'products' },
    ],
    image: 'https://m.media-amazon.com/images/I/71wVg64P3QL._AC_SX300_SY300_QL70_ML2_.jpg',
  },
  {
    tiles: ['S', 'A', 'L', 'E'],
    subtitle: 'Up to 30% off selected lines',
    ctas: [
      { label: 'Shop Wardrobes', href: 'products' },
      { label: 'Shop Tables', href: 'products' },
      { label: 'Shop Beds', href: 'products' },
    ],
    image: 'https://m.media-amazon.com/images/I/61WHxZXrvnL._AC_SY300_SX300_QL70_ML2_.jpg',
  },
  {
    tiles: ['N', 'E', 'W', ' ', 'I', 'N'],
    subtitle: 'Fresh styles added to the collection',
    ctas: [
      { label: 'View New Arrivals', href: 'products' },
      { label: 'Sliding Wardrobes', href: 'products' },
      { label: 'Vanity Tables', href: 'products' },
    ],
    image: 'https://m.media-amazon.com/images/I/71IwESz54CL._AC_SX300_SY300_QL70_ML2_.jpg',
  },
];

interface Props {
  onCtaClick: (href: string) => void;
}

export default function PromoBanner({ onCtaClick }: Props) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [tileVisible, setTileVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (idx: number) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTileVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setTileVisible(true);
      setTimeout(() => setAnimating(false), 600);
    }, 350);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goTo((current + 1) % SLIDES.length);
    }, 4500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, animating]);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full bg-brand-red overflow-hidden" aria-label="Promotional banner">
      {/* Product image — right side, desktop only */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden md:block pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red via-brand-red/60 to-transparent z-10" />
        <img
          key={slide.image}
          src={slide.image}
          alt=""
          className="w-full h-full object-cover opacity-40 transition-opacity duration-700"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-8 md:py-12">
        {/* Letter tiles */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-5">
          {slide.tiles.map((letter, i) =>
            letter === ' ' ? (
              <div key={i} className="w-3 md:w-4" />
            ) : (
              <div
                key={`${current}-${i}`}
                className="bg-white text-brand-red font-black flex items-center justify-center"
                style={{
                  width: 'clamp(36px, 6vw, 72px)',
                  height: 'clamp(44px, 7.5vw, 90px)',
                  fontSize: 'clamp(20px, 4vw, 52px)',
                  opacity: tileVisible ? 1 : 0,
                  transform: tileVisible ? 'translateY(0)' : 'translateY(-24px)',
                  transition: `opacity 0.35s ease ${i * 55}ms, transform 0.35s ease ${i * 55}ms`,
                  lineHeight: 1,
                }}
              >
                {letter}
              </div>
            )
          )}
        </div>

        {/* Subtitle */}
        <p
          className="text-white/90 font-semibold text-sm md:text-base mb-5 md:mb-6 tracking-wide"
          style={{
            opacity: tileVisible ? 1 : 0,
            transform: tileVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.45s ease 0.3s, transform 0.45s ease 0.3s',
          }}
        >
          {slide.subtitle}
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap gap-2 md:gap-3"
          style={{
            opacity: tileVisible ? 1 : 0,
            transform: tileVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.45s ease 0.4s, transform 0.45s ease 0.4s',
          }}
        >
          {slide.ctas.map((cta) => (
            <button
              key={cta.label}
              onClick={() => onCtaClick(cta.href)}
              className="bg-white text-brand-red font-bold text-xs md:text-sm tracking-widest uppercase px-4 md:px-6 py-2.5 md:py-3 hover:bg-brand-black hover:text-white transition-colors"
            >
              {cta.label}
            </button>
          ))}
        </div>

        {/* Slide dots */}
        <div className="flex gap-2 mt-6 md:mt-8">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-0.5 transition-all duration-300 ${
                i === current ? 'bg-white w-8' : 'bg-white/40 w-4'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
