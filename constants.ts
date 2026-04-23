import { Product, NavLink } from './types';

export const SHOP_URL = 'https://www.amazon.co.uk/s?k=Supellex&i=kitchen&search-type=ss&ref=bl_dp_s_web_0';

export const NAV_LINKS: NavLink[] = [
  { label: 'Products', href: '#products' },
  { label: 'Why Supellex', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

// Placeholder images — replace with real product imports once images are added to /images/
const PH = (seed: number, w = 800, h = 600) =>
  `https://picsum.photos/seed/supellex${seed}/${w}/${h}`;

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Sliding Wardrobe with LED & Drawers',
    category: 'Wardrobes',
    price: '£519.99',
    image: PH(1),
    description:
      'Mirror door closet cabinet for bedroom with integrated LED lighting and generous drawer storage.',
    details:
      'A statement piece for any bedroom. The full-length mirror door reflects light beautifully while concealing a spacious interior with hanging rail, shelves, and deep drawers. Integrated LED strip illuminates the interior. Available in 4 sizes to fit any room.',
    dimensions: 'Available in 4 sizes',
    totalMade: 20,
    stock: 8,
    buyUrl: SHOP_URL,
    variants: [
      { id: 'oak',      name: 'Oak',     image: PH(11), stock: 3, price: '£519.99', swatch: '#B8936A', buyUrl: SHOP_URL },
      { id: 'black',    name: 'Black',   image: PH(12), stock: 2, price: '£519.99', swatch: '#1A1A1A', buyUrl: SHOP_URL },
      { id: 'grey',     name: 'Grey',    image: PH(13), stock: 2, price: '£519.99', swatch: '#6B6B6B', buyUrl: SHOP_URL },
      { id: 'graphite', name: 'Graphite',image: PH(14), stock: 1, price: '£519.99', swatch: '#3D3D3D', buyUrl: SHOP_URL },
    ],
    badge: 'Best Seller',
  },
  {
    id: '2',
    name: 'Modern Sliding Door Wardrobe with Mirror & LED Light',
    category: 'Wardrobes',
    price: '£319.99',
    image: PH(2),
    description:
      'Large storage closet in Black, White, Grey & Oak. LED-lit interior with 6 size options.',
    details:
      'Contemporary sliding door wardrobe with a full-length mirror panel and internal LED lighting. The clean-line frame works in any modern bedroom. Choose from Black, White, Grey or Oak finishes across 6 different size configurations.',
    dimensions: 'Available in 6 sizes',
    totalMade: 30,
    stock: 5,
    buyUrl: SHOP_URL,
    variants: [
      { id: 'black', name: 'Black', image: PH(21), stock: 2, price: '£319.99', swatch: '#1A1A1A', buyUrl: SHOP_URL },
      { id: 'white', name: 'White', image: PH(22), stock: 1, price: '£319.99', swatch: '#F5F5F5', buyUrl: SHOP_URL },
      { id: 'grey',  name: 'Grey',  image: PH(23), stock: 1, price: '£319.99', swatch: '#6B6B6B', buyUrl: SHOP_URL },
      { id: 'oak',   name: 'Oak',   image: PH(24), stock: 1, price: '£319.99', swatch: '#B8936A', buyUrl: SHOP_URL },
    ],
    badge: 'Only 5 left',
  },
  {
    id: '3',
    name: 'Vanity Dressing Table with LED Lighted Mirror & Drawers',
    category: 'Dressing Tables',
    price: '£299.99',
    image: PH(3),
    description:
      'Modern makeup desk with Hollywood-style LED lighted mirror and ample drawer storage for bedroom.',
    details:
      'Transform your morning routine with this elegant vanity desk. The Hollywood-inspired LED mirror provides even, flattering light. Spacious drawers keep your cosmetics organised. The smooth matte finish suits both minimalist and glamorous bedroom styles.',
    dimensions: 'W: 80cm × D: 40cm × H: 150cm',
    totalMade: 15,
    stock: 5,
    buyUrl: SHOP_URL,
    badge: 'Only 5 left',
  },
  {
    id: '4',
    name: 'Modern Sliding Door Wardrobe with Shelves & Hanging Rails',
    category: 'Wardrobes',
    price: '£394.99',
    image: PH(4),
    description:
      'Stylish matte finish wardrobe in White. 3 sizes available with generous hanging rail and shelf storage.',
    details:
      'A sleek, matte-finish wardrobe that brings a calm, Scandinavian feel to any bedroom. Two smooth-glide sliding doors reveal a well-organised interior with a full-length hanging rail and adjustable shelves. Available in 3 size options.',
    dimensions: 'Available in 3 sizes',
    totalMade: 20,
    stock: 14,
    buyUrl: SHOP_URL,
    variants: [
      { id: 'white', name: 'White',    image: PH(41), stock: 8, price: '£394.99', swatch: '#F5F5F5', buyUrl: SHOP_URL },
      { id: 'grey',  name: 'Grey',     image: PH(42), stock: 4, price: '£394.99', swatch: '#6B6B6B', buyUrl: SHOP_URL },
      { id: 'black', name: 'Black',    image: PH(43), stock: 2, price: '£419.99', swatch: '#1A1A1A', buyUrl: SHOP_URL },
    ],
    badge: 'Only 14 left',
  },
  {
    id: '5',
    name: 'Modern Sliding Door Wardrobe with Mirror & LED (White)',
    category: 'Wardrobes',
    price: '£343.99',
    image: PH(5),
    description:
      'Large storage closet in Black, White, Grey & Oak with LED interior. 6 size options.',
    details:
      'The white-finish edition of our best-selling LED wardrobe. Full-length mirror door, smooth sliding mechanism, and a well-lit interior make getting dressed effortless. Available in 6 sizes to suit any bedroom layout.',
    dimensions: 'Available in 6 sizes',
    totalMade: 25,
    stock: 5,
    buyUrl: SHOP_URL,
    variants: [
      { id: 'white',    name: 'White',    image: PH(51), stock: 2, price: '£343.99', swatch: '#F5F5F5', buyUrl: SHOP_URL },
      { id: 'black',    name: 'Black',    image: PH(52), stock: 1, price: '£343.99', swatch: '#1A1A1A', buyUrl: SHOP_URL },
      { id: 'grey',     name: 'Grey',     image: PH(53), stock: 1, price: '£343.99', swatch: '#6B6B6B', buyUrl: SHOP_URL },
      { id: 'oak',      name: 'Oak',      image: PH(54), stock: 1, price: '£343.99', swatch: '#B8936A', buyUrl: SHOP_URL },
    ],
    badge: 'Only 5 left',
  },
  {
    id: '6',
    name: 'Sliding Wardrobe with Mirror Doors – Modern Bedroom Closet',
    category: 'Wardrobes',
    price: '£373.99',
    image: PH(6),
    description:
      'Storage organiser with shelves and hanging rail in a range of contemporary finishes. 4 sizes.',
    details:
      'A versatile sliding door wardrobe designed to maximise bedroom storage. Mirror doors open up the room visually while the interior offers a practical mix of hanging space and shelving. 4 sizes available for perfect fit.',
    dimensions: 'Available in 4 sizes',
    totalMade: 20,
    stock: 10,
    buyUrl: SHOP_URL,
  },
  {
    id: '7',
    name: 'Sliding Wardrobe with Mirror & Solid Door',
    category: 'Wardrobes',
    price: '£367.99',
    image: PH(7),
    description:
      'Modern bedroom storage cabinet with shelves and hanging rail. 5 size options.',
    details:
      'The best of both worlds — one full-length mirror door paired with a solid panel door for a dynamic, modern look. Robust construction with internal shelving and a full-width hanging rail. Available in 5 sizes.',
    dimensions: 'Available in 5 sizes',
    totalMade: 20,
    stock: 8,
    buyUrl: SHOP_URL,
    variants: [
      { id: 'black', name: 'Black', image: PH(71), stock: 4, price: '£367.99', swatch: '#1A1A1A', buyUrl: SHOP_URL },
      { id: 'white', name: 'White', image: PH(72), stock: 4, price: '£367.99', swatch: '#F5F5F5', buyUrl: SHOP_URL },
    ],
  },
  {
    id: '8',
    name: 'Bunk Bed for Kids – Double or Triple Sleeper',
    category: 'Kids Beds',
    price: '£319.99',
    image: PH(8),
    description:
      'Wooden frame bunk bed with safety rails and ladder. Double or triple sleeper. With or without mattress.',
    details:
      'A safe, sturdy and space-saving solution for children\'s bedrooms. Solid wooden frame with smooth rounded edges, integrated safety rails, and a secure ladder. Choose double or triple sleeper configuration, and add a mattress bundle for complete convenience.',
    dimensions: 'Available in 4 configurations',
    totalMade: 10,
    stock: 3,
    buyUrl: SHOP_URL,
    rating: 5.0,
    reviewCount: 3,
    badge: 'Top Rated',
  },
];
