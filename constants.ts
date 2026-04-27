import { Product, NavLink } from './types';

export const CONTACT_EMAIL = 'info@supellex.co.uk';
export const SHOP_EMAIL = 'support@supellex.co.uk';

export const NAV_LINKS: NavLink[] = [
  { label: 'Products', href: 'products' },
  { label: 'Why Supellex', href: 'why' },
  { label: 'FAQs', href: 'faq' },
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Sliding Wardrobe with LED & Drawers',
    category: 'Wardrobes',
    price: '£519.99',
    image: 'https://m.media-amazon.com/images/I/71wVg64P3QL._AC_SX300_SY300_QL70_ML2_.jpg',
    description:
      'Our best-spec wardrobe — mirror sliding doors, built-in LED lighting, drawers, shelves and hanging rails. Four widths. Four finishes. Zero compromise.',
    details:
      'This is the wardrobe that does it all. Mirror sliding doors make your room feel bigger and brighter. Integrated LED lighting means you can actually see what you\'re reaching for. Inside: deep drawers, adjustable shelves, and a full-length hanging rail — everything organised, everything within reach. Built from 16mm engineered wood in a matte finish that holds up to daily life. Available in White, Black, Grey, and Oak across four widths. Height 216cm, depth 62cm.',
    dimensions: '150 / 180 / 203 / 250cm wide · H216cm · D62cm',
    totalMade: 20,
    stock: 8,
    variants: [
      { id: 'white',    name: 'White',    image: 'https://m.media-amazon.com/images/I/71wVg64P3QL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 3, price: '£519.99', swatch: '#F5F5F5' },
      { id: 'black',    name: 'Black',    image: 'https://m.media-amazon.com/images/I/71wVg64P3QL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£519.99', swatch: '#1A1A1A' },
      { id: 'grey',     name: 'Grey',     image: 'https://m.media-amazon.com/images/I/71wVg64P3QL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£519.99', swatch: '#6B6B6B' },
      { id: 'oak',      name: 'Oak',      image: 'https://m.media-amazon.com/images/I/71wVg64P3QL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£519.99', swatch: '#B8936A' },
    ],
  },
  {
    id: '2',
    name: 'Modern Sliding Door Wardrobe with Mirror & LED Light',
    category: 'Wardrobes',
    price: '£515.99',
    image: 'https://m.media-amazon.com/images/I/71ZJ+vMDOqL._AC_SX300_SY300_QL70_ML2_.jpg',
    description:
      'Full-length mirror sliding doors, integrated LED lighting, and serious storage. The wardrobe that makes your room look twice the size — in four finishes.',
    details:
      'Sliding mirror doors aren\'t just a style choice — they open up the room and give you a full-length view every morning. The built-in LED lighting illuminates the interior so nothing gets lost at the back. Inside, you get hanging rails and adjustable shelving to store everything from daily wear to seasonal pieces. Solid 16mm engineered wood construction that\'s built to handle years of daily use. Available in Black, White, Grey, and Oak across four widths.',
    dimensions: '150 / 180 / 203 / 250cm wide · H216cm · D62cm',
    totalMade: 30,
    stock: 5,
    variants: [
      { id: 'black', name: 'Black', image: 'https://m.media-amazon.com/images/I/71ZJ+vMDOqL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£515.99', swatch: '#1A1A1A' },
      { id: 'white', name: 'White', image: 'https://m.media-amazon.com/images/I/71ZJ+vMDOqL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£515.99', swatch: '#F5F5F5' },
      { id: 'grey',  name: 'Grey',  image: 'https://m.media-amazon.com/images/I/71ZJ+vMDOqL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£515.99', swatch: '#6B6B6B' },
      { id: 'oak',   name: 'Oak',   image: 'https://m.media-amazon.com/images/I/71ZJ+vMDOqL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£515.99', swatch: '#B8936A' },
    ],
    badge: 'Best Seller',
  },
  {
    id: '3',
    name: 'Modern Sliding Door Wardrobe with Shelves & Hanging Rails',
    category: 'Wardrobes',
    price: '£374.99',
    image: 'https://m.media-amazon.com/images/I/71m-V1+7bzL._AC_SX300_SY300_QL70_ML2_.jpg',
    description:
      'Clean matte finish, smooth-gliding doors, built-in LED, shelves and hanging rails. A wardrobe that fits your room — and your life — in three sizes.',
    details:
      'Premium matte finish sliding doors that glide without effort and look sharp from every angle. The built-in LED lighting keeps your interior visible and well-lit. Inside: practical shelving and a full-length hanging rail, so your wardrobe actually works the way it should. No door clearance needed — the sliding mechanism gives you back floor space. Made from 16mm engineered wood in White, Black, Grey, or Oak. Available in 150, 180, and 203cm widths.',
    dimensions: '150 / 180 / 203cm wide · H216cm · D62cm',
    totalMade: 20,
    stock: 14,
    variants: [
      { id: 'white', name: 'White', image: 'https://m.media-amazon.com/images/I/71m-V1+7bzL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 6, price: '£374.99', swatch: '#F5F5F5' },
      { id: 'black', name: 'Black', image: 'https://m.media-amazon.com/images/I/71m-V1+7bzL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 4, price: '£385.99', swatch: '#1A1A1A' },
      { id: 'grey',  name: 'Grey',  image: 'https://m.media-amazon.com/images/I/71m-V1+7bzL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 3, price: '£374.99', swatch: '#6B6B6B' },
      { id: 'oak',   name: 'Oak',   image: 'https://m.media-amazon.com/images/I/71m-V1+7bzL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£374.99', swatch: '#B8936A' },
    ],
  },
  {
    id: '4',
    name: 'Sliding Wardrobe with Mirror Doors – Modern Bedroom Closet',
    category: 'Wardrobes',
    price: '£409.99',
    image: 'https://m.media-amazon.com/images/I/71uX8qbWO9L._AC_SX300_SY300_QL70_ML2_.jpg',
    description:
      'Three-panel design — two solid outer doors, one central mirror. Shelves, hanging rails, and a built-in drawer on the 250cm. A wardrobe that commands the room.',
    details:
      'The three-panel layout sets this wardrobe apart. Two solid outer panels frame a central mirrored door that reflects light and opens up the space — without going full mirror wall. Inside: adjustable shelves and a hanging rail, with the 250cm model adding a built-in drawer for everyday essentials. Available in four widths and finished in Grey, White, Oak, or Black matte. Built from 16mm engineered wood — sturdy, smooth, and made to last.',
    dimensions: '150 / 180 / 203 / 250cm wide · H216cm · D62cm',
    totalMade: 20,
    stock: 10,
    variants: [
      { id: 'grey',  name: 'Grey',  image: 'https://m.media-amazon.com/images/I/71uX8qbWO9L._AC_SX300_SY300_QL70_ML2_.jpg', stock: 3, price: '£409.99', swatch: '#6B6B6B' },
      { id: 'white', name: 'White', image: 'https://m.media-amazon.com/images/I/71uX8qbWO9L._AC_SX300_SY300_QL70_ML2_.jpg', stock: 3, price: '£409.99', swatch: '#F5F5F5' },
      { id: 'oak',   name: 'Oak',   image: 'https://m.media-amazon.com/images/I/71uX8qbWO9L._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£409.99', swatch: '#B8936A' },
      { id: 'black', name: 'Black', image: 'https://m.media-amazon.com/images/I/71uX8qbWO9L._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£409.99', swatch: '#1A1A1A' },
    ],
  },
  {
    id: '5',
    name: 'Sliding Wardrobe with Mirror & Solid Door',
    category: 'Wardrobes',
    price: '£367.99',
    image: 'https://m.media-amazon.com/images/I/71a-Oi8f0DL._AC_SX300_SY300_QL70_ML2_.jpg',
    description:
      'Half mirror, half solid — a clean combination that fits any bedroom. Shelves and hanging rail inside. Five widths from 120cm to 250cm.',
    details:
      'Not every room needs a full mirror wardrobe — this one strikes the right balance. One sliding mirror door, one solid panel, together creating a look that\'s modern without being loud. The 250cm model steps it up with three doors: a central mirror flanked by two solid outer panels. Inside: adjustable shelves and a full-length hanging rail. Available from 120cm to 250cm wide, in White, Grey, Oak, or Black matte. Height 216cm, depth 62cm.',
    dimensions: '120 / 150 / 180 / 203 / 250cm wide · H216cm · D62cm',
    totalMade: 20,
    stock: 8,
    variants: [
      { id: 'white', name: 'White', image: 'https://m.media-amazon.com/images/I/71a-Oi8f0DL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 3, price: '£367.99', swatch: '#F5F5F5' },
      { id: 'grey',  name: 'Grey',  image: 'https://m.media-amazon.com/images/I/71a-Oi8f0DL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£367.99', swatch: '#6B6B6B' },
      { id: 'oak',   name: 'Oak',   image: 'https://m.media-amazon.com/images/I/71a-Oi8f0DL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£367.99', swatch: '#B8936A' },
      { id: 'black', name: 'Black', image: 'https://m.media-amazon.com/images/I/71a-Oi8f0DL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£367.99', swatch: '#1A1A1A' },
    ],
  },
  {
    id: '6',
    name: 'Sliding Wardrobe with LED Light – Mirror & Solid Door',
    category: 'Wardrobes',
    price: '£377.99',
    image: 'https://m.media-amazon.com/images/I/812exi6kRWL._AC_SX300_SY300_QL70_ML2_.jpg',

    description:
      'Mirror and solid door wardrobe with built-in LED lighting. Five widths, four finishes — the same clean combination, now with light where you need it.',
    details:
      'Everything you get with the mirror-solid combination, plus built-in LED lighting that makes your wardrobe interior feel premium every single day. Smaller sizes (120–203cm) feature one mirrored and one solid sliding panel. The 250cm model goes three-door: a central mirror with two solid outer panels. Inside: adjustable shelves and a hanging rail. Made from 16mm engineered wood in White, Grey, Oak, or Black matte finishes.',
    dimensions: '120 / 150 / 180 / 203 / 250cm wide · H216cm · D62cm',
    totalMade: 20,
    stock: 6,
    variants: [
      { id: 'white', name: 'White', image: 'https://m.media-amazon.com/images/I/812exi6kRWL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£377.99', swatch: '#F5F5F5' },
      { id: 'grey',  name: 'Grey',  image: 'https://m.media-amazon.com/images/I/812exi6kRWL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£377.99', swatch: '#6B6B6B' },
      { id: 'oak',   name: 'Oak',   image: 'https://m.media-amazon.com/images/I/812exi6kRWL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£377.99', swatch: '#B8936A' },
      { id: 'black', name: 'Black', image: 'https://m.media-amazon.com/images/I/812exi6kRWL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£377.99', swatch: '#1A1A1A' },
    ],
  },
  {
    id: '7',
    name: 'Vanity Dressing Table with LED Lighted Mirror & Drawers',
    category: 'Dressing Tables',
    price: '£299.99',
    image: 'https://m.media-amazon.com/images/I/61WHxZXrvnL._AC_SY300_SX300_QL70_ML2_.jpg',
    description:
      'Hollywood LED mirror, deep drawers, and a finish that makes a statement. Your morning routine deserves a proper setup — in Black, White, or Pink.',
    details:
      'This isn\'t just a table — it\'s a proper vanity station. The Hollywood-style LED mirror delivers even, bright lighting that makes getting ready easier and more enjoyable. Deep drawers keep your makeup, skincare, and jewellery organised and within reach. Available in Black, White, and Pink — designed to be the focal point of your bedroom, not just a functional afterthought. Looks good. Works harder.',
    dimensions: 'W80cm × D40cm × H150cm',
    totalMade: 15,
    stock: 5,
    variants: [
      { id: 'pink',  name: 'Pink',  image: 'https://m.media-amazon.com/images/I/61WHxZXrvnL._AC_SY300_SX300_QL70_ML2_.jpg', stock: 2, price: '£299.99', swatch: '#F4A0B0' },
      { id: 'white', name: 'White', image: 'https://m.media-amazon.com/images/I/61WHxZXrvnL._AC_SY300_SX300_QL70_ML2_.jpg', stock: 2, price: '£299.99', swatch: '#F5F5F5' },
      { id: 'black', name: 'Black', image: 'https://m.media-amazon.com/images/I/61WHxZXrvnL._AC_SY300_SX300_QL70_ML2_.jpg', stock: 1, price: '£299.99', swatch: '#1A1A1A' },
    ],
  },
  {
    id: '8',
    name: 'Vanity Table with LED Mirror and Storage',
    category: 'Dressing Tables',
    price: '£349.99',
    image: 'https://m.media-amazon.com/images/I/71IwESz54CL._AC_SX300_SY300_QL70_ML2_.jpg',
    description:
      'Eight drawers, LED-illuminated mirror, brass handles, open shelving. This is what a luxury vanity table should look like — without the luxury price tag.',
    details:
      'Eight smooth-sliding drawers. An LED-illuminated mirror that lights your face evenly. Open shelving for display. Brass-finish handles that feel premium every time you open them. This vanity table is built for people who take their space seriously — and want their bedroom to reflect that. Available in Black, White, Grey, and Pink. Wide enough to have everything out, smart enough to keep it all organised.',
    dimensions: 'W110cm × D70cm × H140cm',
    totalMade: 15,
    stock: 4,
    variants: [
      { id: 'pink',  name: 'Pink',  image: 'https://m.media-amazon.com/images/I/71IwESz54CL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£349.99', swatch: '#F4A0B0' },
      { id: 'white', name: 'White', image: 'https://m.media-amazon.com/images/I/71IwESz54CL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£349.99', swatch: '#F5F5F5' },
      { id: 'black', name: 'Black', image: 'https://m.media-amazon.com/images/I/71IwESz54CL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£349.99', swatch: '#1A1A1A' },
    ],
  },
  {
    id: '9',
    name: 'Bunk Bed for Kids – Double or Triple Sleeper',
    category: 'Kids Beds',
    price: '£319.99',
    image: 'https://m.media-amazon.com/images/I/610hyhsbBLL._AC_SY300_SX300_QL70_ML2_.jpg',
    description:
      'Solid wooden bunk bed with full safety rails and ladder. Double or triple sleeper. Available with or without mattress in White and Grey.',
    details:
      'Built for shared rooms and growing families. This bunk bed is solid, safe, and designed to last through the years — not just the first few months. Full-height safety rails on the top bunk, a sturdy ladder, and a clean wooden frame that fits any kids\' bedroom without looking out of place. Available as a double or triple sleeper, with or without mattress. White and Grey finishes. Meets all UK safety requirements. Max weight: 150kg.',
    dimensions: 'L197.6cm × W145.6cm × H149.6cm',
    totalMade: 10,
    stock: 3,
    variants: [
      { id: 'white', name: 'White', image: 'https://m.media-amazon.com/images/I/610hyhsbBLL._AC_SY300_SX300_QL70_ML2_.jpg', stock: 2, price: '£319.99', swatch: '#F5F5F5' },
      { id: 'grey',  name: 'Grey',  image: 'https://m.media-amazon.com/images/I/610hyhsbBLL._AC_SY300_SX300_QL70_ML2_.jpg', stock: 1, price: '£319.99', swatch: '#6B6B6B' },
    ],
  },
];
