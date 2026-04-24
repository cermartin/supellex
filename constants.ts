import { Product, NavLink } from './types';

export const CONTACT_EMAIL = 'info@supellex.co.uk';
export const SHOP_EMAIL = 'shop@supellex.co.uk';

export const NAV_LINKS: NavLink[] = [
  { label: 'Products', href: '#products' },
  { label: 'Why Supellex', href: '#why' },
  { label: 'Shipping & Returns', href: 'shipping' },
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
      'Mirror door closet cabinet with integrated LED lighting, drawers, shelves and hanging rails. Available in 150cm, 180cm, 203cm and 250cm widths.',
    details:
      'Transform your bedroom with this modern sliding wardrobe featuring integrated LED light for enhanced visibility and a touch of luxury. Mirror sliding doors save space and bring natural light into the room, while the internal shelves, hanging rails, and drawers provide versatile storage options. Made from durable 16mm engineered wood, available in White, Black, Grey, and Oak matte finishes. Height 216cm, depth 62cm.',
    dimensions: '150 / 180 / 203 / 250cm wide · H216cm · D62cm',
    totalMade: 20,
    stock: 8,
    variants: [
      { id: 'white',    name: 'White',    image: 'https://m.media-amazon.com/images/I/71wVg64P3QL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 3, price: '£519.99', swatch: '#F5F5F5' },
      { id: 'black',    name: 'Black',    image: 'https://m.media-amazon.com/images/I/71wVg64P3QL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£519.99', swatch: '#1A1A1A' },
      { id: 'grey',     name: 'Grey',     image: 'https://m.media-amazon.com/images/I/71wVg64P3QL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£519.99', swatch: '#6B6B6B' },
      { id: 'oak',      name: 'Oak',      image: 'https://m.media-amazon.com/images/I/71wVg64P3QL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£519.99', swatch: '#B8936A' },
    ],
    badge: 'Best Seller',
  },
  {
    id: '2',
    name: 'Modern Sliding Door Wardrobe with Mirror & LED Light',
    category: 'Wardrobes',
    price: '£515.99',
    image: 'https://m.media-amazon.com/images/I/71ZJ+vMDOqL._AC_SX300_SY300_QL70_ML2_.jpg',
    description:
      'Large storage closet with full-length mirror sliding doors and LED lighting. Available in Black, White, Grey & Oak across multiple sizes.',
    details:
      'A sophisticated wardrobe featuring sleek sliding mirror doors that create an illusion of expanded space while providing a full-length reflection. The integrated LED lighting system adds both functionality and ambiance, illuminating your storage area beautifully. Robust construction with premium materials ensure durability and stability. Available in Black, White, Grey, and Oak finishes.',
    dimensions: '150 / 180 / 203 / 250cm wide · H216cm · D62cm',
    totalMade: 30,
    stock: 5,
    variants: [
      { id: 'black', name: 'Black', image: 'https://m.media-amazon.com/images/I/71ZJ+vMDOqL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£515.99', swatch: '#1A1A1A' },
      { id: 'white', name: 'White', image: 'https://m.media-amazon.com/images/I/71ZJ+vMDOqL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£515.99', swatch: '#F5F5F5' },
      { id: 'grey',  name: 'Grey',  image: 'https://m.media-amazon.com/images/I/71ZJ+vMDOqL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£515.99', swatch: '#6B6B6B' },
      { id: 'oak',   name: 'Oak',   image: 'https://m.media-amazon.com/images/I/71ZJ+vMDOqL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£515.99', swatch: '#B8936A' },
    ],
    badge: 'Only 5 left',
  },
  {
    id: '3',
    name: 'Modern Sliding Door Wardrobe with Shelves & Hanging Rails',
    category: 'Wardrobes',
    price: '£374.99',
    image: 'https://m.media-amazon.com/images/I/71m-V1+7bzL._AC_SX300_SY300_QL70_ML2_.jpg',
    description:
      'Stylish matte finish wardrobe with smooth-gliding doors, LED lighting, shelving and hanging rails. Available in White, Black, Grey or Oak in 3 sizes.',
    details:
      'Transform your bedroom storage with this sophisticated sliding door wardrobe with LED, available in three versatile sizes: 150cm, 180cm, and 203cm. The sleek, modern design features smooth-gliding doors with a premium matte finish. Inside, a thoughtfully organised space with practical shelving and hanging rails keeps your clothing and accessories perfectly arranged. The sliding door mechanism maximises your bedroom space, eliminating the need for clearance area in front of the wardrobe. Made from durable 16mm chipboard.',
    dimensions: '150 / 180 / 203cm wide · H216cm · D62cm',
    totalMade: 20,
    stock: 14,
    variants: [
      { id: 'white', name: 'White', image: 'https://m.media-amazon.com/images/I/71m-V1+7bzL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 6, price: '£374.99', swatch: '#F5F5F5' },
      { id: 'black', name: 'Black', image: 'https://m.media-amazon.com/images/I/71m-V1+7bzL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 4, price: '£385.99', swatch: '#1A1A1A' },
      { id: 'grey',  name: 'Grey',  image: 'https://m.media-amazon.com/images/I/71m-V1+7bzL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 3, price: '£374.99', swatch: '#6B6B6B' },
      { id: 'oak',   name: 'Oak',   image: 'https://m.media-amazon.com/images/I/71m-V1+7bzL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£374.99', swatch: '#B8936A' },
    ],
    badge: 'Only 14 left',
  },
  {
    id: '4',
    name: 'Sliding Wardrobe with Mirror Doors – Modern Bedroom Closet',
    category: 'Wardrobes',
    price: '£409.99',
    image: 'https://m.media-amazon.com/images/I/71uX8qbWO9L._AC_SX300_SY300_QL70_ML2_.jpg',
    description:
      'Three-panel layout with two solid side doors and a central mirrored panel. Storage organiser with shelves, hanging rails and optional drawer. 4 sizes.',
    details:
      'Elevate your bedroom with this modern sliding wardrobe, designed with a stylish three-panel layout — two solid side doors and a central mirrored panel. This unique structure enhances the aesthetic of your space and reflects light to make your room feel brighter and more spacious. Available in 150cm, 180cm, 203cm, and 250cm widths. The 250cm model also includes a built-in drawer for added functionality. Made from durable 16mm engineered wood, finished in Grey, White, Oak, or Black.',
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
      'Modern bedroom storage cabinet combining a full-length mirror door with a solid panel door. Shelves and hanging rail. 5 sizes: 120–250cm.',
    details:
      'Add modern elegance and practical storage to your bedroom with this stylish sliding wardrobe. Features a combination of mirror and solid sliding doors for a sleek, space-enhancing appearance. Available in 120cm to 250cm widths — the 250cm model features three doors with a central mirror flanked by two solid outer panels. Inside: adjustable shelves and a hanging rail. Made from durable 16mm engineered wood in White, Grey, Oak, or Black matte finishes. Height 216cm, depth 62cm.',
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
      'Mirror and solid door wardrobe with built-in LED lighting. Shelves and hanging rail. Available in 5 widths and 4 finishes.',
    details:
      'Upgrade your bedroom with this stylish sliding wardrobe combining modern aesthetics with practical storage. Features a built-in LED light that illuminates your items inside while adding a contemporary feel. Smaller wardrobes (120–203cm) include two sliding panels — one mirrored and one solid finish — while the 250cm model includes three doors with a centre mirror flanked by two solid panels. Inside: adjustable shelves and a hanging rail. Made from durable 16mm engineered wood in White, Grey, Oak, or Black.',
    dimensions: '120 / 150 / 180 / 203 / 250cm wide · H216cm · D62cm',
    totalMade: 20,
    stock: 6,
    variants: [
      { id: 'white', name: 'White', image: 'https://m.media-amazon.com/images/I/812exi6kRWL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£377.99', swatch: '#F5F5F5' },
      { id: 'grey',  name: 'Grey',  image: 'https://m.media-amazon.com/images/I/812exi6kRWL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£377.99', swatch: '#6B6B6B' },
      { id: 'oak',   name: 'Oak',   image: 'https://m.media-amazon.com/images/I/812exi6kRWL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£377.99', swatch: '#B8936A' },
      { id: 'black', name: 'Black', image: 'https://m.media-amazon.com/images/I/812exi6kRWL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£377.99', swatch: '#1A1A1A' },
    ],
    rating: 1,
    reviewCount: 1,
  },
  {
    id: '7',
    name: 'Vanity Dressing Table with LED Lighted Mirror & Drawers',
    category: 'Dressing Tables',
    price: '£299.99',
    image: 'https://m.media-amazon.com/images/I/61WHxZXrvnL._AC_SY300_SX300_QL70_ML2_.jpg',
    description:
      'Modern makeup desk with Hollywood-style LED lighted mirror and spacious drawers. Available in Black, White and Pink.',
    details:
      'Enhance your beauty space with this modern vanity dressing table. Designed with a Hollywood-style illuminated mirror, it provides flawless lighting for makeup, skincare, and hairstyling. Multiple spacious drawers keep your cosmetics, jewellery, and essentials neatly organised and within reach. Available in Black, White, and Pink — this vanity desk combines elegance and practicality, making it the perfect addition to any bedroom, apartment, or dressing room.',
    dimensions: 'W80cm × D40cm × H150cm',
    totalMade: 15,
    stock: 5,
    variants: [
      { id: 'pink',  name: 'Pink',  image: 'https://m.media-amazon.com/images/I/61WHxZXrvnL._AC_SY300_SX300_QL70_ML2_.jpg', stock: 2, price: '£299.99', swatch: '#F4A0B0' },
      { id: 'white', name: 'White', image: 'https://m.media-amazon.com/images/I/61WHxZXrvnL._AC_SY300_SX300_QL70_ML2_.jpg', stock: 2, price: '£299.99', swatch: '#F5F5F5' },
      { id: 'black', name: 'Black', image: 'https://m.media-amazon.com/images/I/61WHxZXrvnL._AC_SY300_SX300_QL70_ML2_.jpg', stock: 1, price: '£299.99', swatch: '#1A1A1A' },
    ],
    badge: 'Only 5 left',
  },
  {
    id: '8',
    name: 'Vanity Table with LED Mirror and Storage',
    category: 'Dressing Tables',
    price: '£349.99',
    image: 'https://m.media-amazon.com/images/I/71IwESz54CL._AC_SX300_SY300_QL70_ML2_.jpg',
    description:
      'Luxury makeup desk with LED-illuminated mirror, 8 smooth-sliding drawers, multiple shelves and sleek brass-finished handles. 4 colour options.',
    details:
      'Transform your space into a luxurious beauty sanctuary with this stunning Supellex vanity table. Featuring a sophisticated design with LED-illuminated mirror and generous storage solutions, this vanity table combines style with functionality. Eight smooth-sliding drawers provide ample space for organising cosmetics and accessories, while multiple shelving units offer additional display storage. Available in Black, White, Grey, and Pink. The premium LED lighting system ensures optimal illumination for makeup application. Sleek brass-finished handles add a touch of sophistication.',
    dimensions: 'W110cm × D70cm × H140cm',
    totalMade: 15,
    stock: 4,
    variants: [
      { id: 'pink',  name: 'Pink',  image: 'https://m.media-amazon.com/images/I/71IwESz54CL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 2, price: '£349.99', swatch: '#F4A0B0' },
      { id: 'white', name: 'White', image: 'https://m.media-amazon.com/images/I/71IwESz54CL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£349.99', swatch: '#F5F5F5' },
      { id: 'black', name: 'Black', image: 'https://m.media-amazon.com/images/I/71IwESz54CL._AC_SX300_SY300_QL70_ML2_.jpg', stock: 1, price: '£349.99', swatch: '#1A1A1A' },
    ],
    rating: 2,
    reviewCount: 1,
  },
  {
    id: '9',
    name: 'Bunk Bed for Kids – Double or Triple Sleeper',
    category: 'Kids Beds',
    price: '£319.99',
    image: 'https://m.media-amazon.com/images/I/610hyhsbBLL._AC_SY300_SX300_QL70_ML2_.jpg',
    description:
      'Wooden frame bunk bed with safety rails and ladder. Double or triple sleeper. With or without mattress. Available in White and Grey.',
    details:
      'Transform your children\'s bedroom with this stylish and practical bunk bed. Crafted with a robust wooden frame in elegant White or Grey finish, this bed combines functionality with modern aesthetics. The design features comprehensive safety measures including sturdy guard rails and a well-built ladder for easy access to the top bunk. The clean lines and neutral colour scheme complement any room décor. The bed\'s thoughtful construction maximises floor space, making it ideal for shared bedrooms. Built-in safety rails on the top bunk meet all UK safety requirements. Maximum weight recommendation: 150kg.',
    dimensions: 'L197.6cm × W145.6cm × H149.6cm',
    totalMade: 10,
    stock: 3,
    variants: [
      { id: 'white', name: 'White', image: 'https://m.media-amazon.com/images/I/610hyhsbBLL._AC_SY300_SX300_QL70_ML2_.jpg', stock: 2, price: '£319.99', swatch: '#F5F5F5' },
      { id: 'grey',  name: 'Grey',  image: 'https://m.media-amazon.com/images/I/610hyhsbBLL._AC_SY300_SX300_QL70_ML2_.jpg', stock: 1, price: '£319.99', swatch: '#6B6B6B' },
    ],
    rating: 5,
    reviewCount: 3,
    badge: 'Top Rated',
  },
];
