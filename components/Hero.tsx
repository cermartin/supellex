import { ArrowDown } from 'lucide-react';

interface Props {
  onShopClick: () => void;
}

export default function Hero({ onShopClick }: Props) {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] bg-brand-offwhite flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-offwhite to-brand-bg pointer-events-none" />

      {/* Swoosh watermark — exact paths from brand SVG */}
      <svg
        viewBox="0 0 1542 1254"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full opacity-[0.06] select-none pointer-events-none"
        aria-hidden="true"
      >
        <path fill="#DE3B3B" d="M327.637634,461.653107 C401.736847,397.395538 484.494354,348.949310 577.572144,318.589508 C635.746643,299.614319 695.449585,291.671906 756.624390,292.805176 C831.566223,294.193420 903.658691,308.411926 974.530518,333.085602 C1023.181335,350.023102 1068.048340,374.067444 1113.113647,397.798340 C1142.454834,413.248962 1169.316772,433.416718 1197.235718,451.553986 C1207.287964,458.084320 1217.185059,464.853546 1227.147217,471.522278 C1228.445068,472.391052 1229.708374,473.311218 1230.987671,474.207550 C1230.786987,474.576721 1230.586426,474.945862 1230.385864,475.315002 C1228.189087,474.360870 1225.930176,473.527802 1223.805054,472.434570 C1186.969971,453.484039 1150.311646,434.178741 1113.223877,415.737061 C1103.060547,410.683411 1091.604858,408.243500 1080.770142,404.522827 C1054.830078,395.614960 1029.381348,384.767303 1002.877686,378.115082 C947.478149,364.210236 891.446289,352.986115 833.810486,354.260681 C770.133789,355.668854 707.240234,362.346771 646.497742,382.955353 C592.048645,401.428772 541.583862,427.796631 494.799408,461.029358 C474.321686,475.575439 455.020538,491.773285 435.037018,507.027039 C433.077759,508.522522 429.974030,509.551727 427.573456,509.279785 C395.644104,505.663177 363.745209,501.777191 331.839294,497.953857 C319.164337,496.435028 306.490753,494.905243 292.395569,493.209473 C304.673920,482.212708 316.022064,472.049103 327.637634,461.653107z"/>
        <path fill="#DE3B3B" d="M1067.170654,782.195435 C1081.248535,770.958496 1094.984985,759.864868 1108.895752,748.994324 C1110.607544,747.656677 1113.344360,746.692017 1115.448364,746.932861 C1158.786011,751.894592 1202.101318,757.053040 1245.418579,762.193115 C1246.894531,762.368286 1248.345093,762.758179 1251.067505,764.476318 C1249.743530,765.171387 1248.174561,765.608215 1247.130615,766.598511 C1190.452271,820.365540 1127.834839,865.679932 1057.654175,900.339111 C1003.783936,926.943237 947.582458,946.463501 888.286499,956.656067 C845.685059,963.979004 802.740784,964.206848 759.724243,962.288391 C723.874512,960.689575 688.458618,955.768799 653.447388,947.951416 C625.812988,941.781067 599.210876,932.178955 572.201050,923.876404 C527.423889,910.112549 487.149445,887.081116 445.601807,866.513245 C420.126587,853.901917 396.812073,837.911133 373.146729,822.439087 C351.471710,808.268372 330.065582,793.686218 308.748108,778.759460 C310.533783,779.462280 312.396606,780.015503 314.093719,780.890137 C348.107788,798.420166 382.302673,815.614563 416.018738,833.701233 C433.375122,843.011841 452.221954,847.786621 470.535583,854.190063 C496.415375,863.238892 522.045410,873.616272 548.612305,879.935364 C584.626465,888.501526 620.848755,896.946899 658.002747,899.826050 C692.305115,902.484314 726.652893,903.231018 760.828552,899.399536 C791.067566,896.009399 821.486389,892.574646 851.155273,886.091309 C912.372803,872.714050 968.666809,846.788757 1021.482971,813.335205 C1036.943481,803.542542 1051.766968,792.744202 1067.170654,782.195435z"/>
      </svg>

      {/* Decorative red line */}
      <div className="relative z-10 w-10 h-0.5 bg-brand-red mx-auto mb-4" />

      {/* Eyebrow — NOT uppercase, as written */}
      <p className="relative z-10 text-brand-red text-[10px] md:text-xs font-bold tracking-[0.25em] mb-4">
        Premium Bedroom Furniture · One Home At a Time…
      </p>

      {/* Headline */}
      <h1 className="relative z-10 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-black leading-tight tracking-tight mb-5 max-w-2xl">
        Your bedroom,
        <br />
        <em className="not-italic text-brand-red">beautifully</em> arranged.
      </h1>

      {/* Pillars — clean inline row, no heavy block */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-5">
        {['Premium Quality', 'UK Based', 'Expert Craftsmanship'].map((item, i) => (
          <span key={item} className="flex items-center gap-6">
            <span className="text-brand-grey text-[10px] md:text-xs font-bold tracking-[0.18em] uppercase">{item}</span>
            {i < 2 && <span className="w-1 h-1 rounded-full bg-brand-red/50 flex-shrink-0" />}
          </span>
        ))}
      </div>

      {/* Sub-copy */}
      <p className="relative z-10 text-brand-grey text-sm md:text-base leading-relaxed max-w-md mb-7">
        Sliding wardrobes with integrated LED lighting, elegant vanity tables, and smart
        storage — designed to make every morning feel effortless.
      </p>

      {/* CTAs */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-3 mb-8">
        <button
          onClick={onShopClick}
          className="px-7 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-bold tracking-widest uppercase text-xs transition-colors"
        >
          Explore the Collection
        </button>
        <button
          onClick={onShopClick}
          className="px-7 py-3.5 border border-brand-black/20 hover:border-brand-red text-brand-black hover:text-brand-red font-bold tracking-widest uppercase text-xs transition-colors"
        >
          View All Products
        </button>
      </div>

      {/* Trust strip */}
      <div className="relative z-10 flex justify-center gap-8 md:gap-16 text-center border-t border-brand-light pt-6 w-full max-w-md">
        {[
          { value: 'Nationwide', label: 'Delivery' },
          { value: 'UK', label: 'Based & Operated' },
          { value: '50+', label: 'Products' },
        ].map(({ value, label }) => (
          <div key={label}>
            <div className="text-lg md:text-xl font-black text-brand-black">{value}</div>
            <div className="text-brand-grey text-[9px] font-semibold tracking-widest uppercase mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Scroll nudge */}
      <button
        onClick={onShopClick}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-brand-grey/40 hover:text-brand-red transition-colors animate-bounce"
        aria-label="Scroll to products"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
