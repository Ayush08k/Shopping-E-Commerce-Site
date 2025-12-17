
import { HeroSlide, Category, Product, PromoCode, Bundle, CartItem, ShippingMethod, OrderTrackingInfo, StoreLocation } from './types';

export const HERO_SLIDES: HeroSlide[] = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/1600/900?random=1',
      title: 'Summer Collection is Here',
      subtitle: 'Discover the latest trends and styles for this season.',
      ctaText: 'Shop Now',
      ctaLink: '#',
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/1600/900?random=2',
      title: 'Up to 40% Off on Footwear',
      subtitle: 'Step up your shoe game with our exclusive discounts.',
      ctaText: 'Find Your Pair',
      ctaLink: '#',
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/1600/900?random=3',
      title: 'New Arrivals for Men',
      subtitle: 'Upgrade your wardrobe with our fresh new looks.',
      ctaText: 'Explore Menswear',
      ctaLink: '#',
    },
];

export const CATEGORIES: Category[] = [
    { id: 1, name: 'Men', imageUrl: 'https://picsum.photos/600/800?random=11' },
    { id: 2, name: 'Women', imageUrl: 'https://picsum.photos/600/800?random=12' },
    { id: 3, name: 'Children', imageUrl: 'https://picsum.photos/600/800?random=13' },
    { id: 4, name: 'Shoes', imageUrl: 'https://picsum.photos/600/800?random=14' },
];

export const PROMO_CODES: PromoCode[] = [
    { id: 1, code: 'SUMMER20', description: 'Get 20% off all summer collection items.', expiry: '2024-08-31' },
    { id: 2, code: 'NEWBIE15', description: '15% off your first order. Welcome to VogueVerse!', expiry: '2024-12-31' },
    { id: 3, code: 'FREESHIP', description: 'Free shipping on all orders over $75.', expiry: '2024-09-30' },
    { id: 4, code: 'FLASH30', description: 'Limited time: 30% off select footwear.', expiry: '2024-07-25' },
];

export const BUNDLES: Bundle[] = [
    { id: 1, title: "Men's Casual Look", type: 'Look', productIds: [5, 9, 13], bundlePrice: 199.99 },
    { id: 2, title: "Women's Weekend Getaway", type: 'Look', productIds: [11, 12, 6], bundlePrice: 250.00 },
    { id: 3, title: "Buy One Get One: Graphic Tees", type: 'BOGO', productIds: [9] }
];

export const PRODUCTS: Product[] = [
  // Men
  { 
    id: 1, 
    name: 'Classic Denim Jacket', 
    category: 'Men', 
    price: 71.99,
    originalPrice: 89.99, 
    images: ['https://picsum.photos/800/800?random=21', 'https://picsum.photos/800/800?random=101', 'https://picsum.photos/800/800?random=102', 'https://picsum.photos/800/800?random=103'],
    rating: 4.5, 
    sizes: [{name: 'S', inStock: true}, {name: 'M', inStock: true}, {name: 'L', inStock: true}, {name: 'XL', inStock: false}], 
    colors: [{name: 'Blue', hex: '#3b82f6', inStock: true}, {name: 'Black', hex: '#111827', inStock: true}], 
    brand: 'Urban Threads', 
    material: 'Denim', 
    dateAdded: '2023-05-20T10:00:00Z',
    description: "A timeless staple for any wardrobe, this classic denim jacket offers a perfect blend of style and comfort. Made from high-quality rigid denim, it features a button-front closure, chest pockets, and a tailored fit that never goes out of style.",
    care: ["Machine wash cold, tumble dry low.", "Do not bleach.", "Iron on medium heat if needed."],
    fit: ["Regular fit, true to size.", "Model is 6'1\" and wearing a size Medium."],
    reviews: [
        {id: 1, author: "John D.", rating: 5, title: "Perfect Jacket!", content: "Fits great and looks even better. High quality denim.", date: "2023-06-15"},
        {id: 2, author: "Mike P.", rating: 4, title: "Solid, but a bit stiff", content: "Great jacket but it needs some time to break in.", date: "2023-06-10"},
    ]
  },
  { id: 5, name: 'Slim Fit Chinos', category: 'Men', price: 55.00, images: ['https://picsum.photos/800/800?random=25'], rating: 4.6, sizes: [{name: 'S', inStock: true}, {name: 'M', inStock: true}, {name: 'L', inStock: false}], colors: [{name: 'Brown', hex: '#7c2d12', inStock: true}, {name: 'Black', hex: '#111827', inStock: true}], brand: 'Modern Man', material: 'Cotton', dateAdded: '2023-04-15T12:30:00Z', description: "Versatile and comfortable, these slim-fit chinos are a must-have.", care: [], fit: [], reviews: [] },
  { id: 9, name: 'Men\'s Graphic Tee', category: 'Men', price: 29.99, images: ['https://picsum.photos/800/800?random=29'], rating: 4.2, sizes: [{name: 'S', inStock: true}, {name: 'M', inStock: true}, {name: 'L', inStock: true}, {name: 'XL', inStock: true}], colors: [{name: 'White', hex: '#ffffff', inStock: true}, {name: 'Black', hex: '#111827', inStock: true}], brand: 'Urban Threads', material: 'Cotton', dateAdded: '2023-05-25T14:00:00Z', description: "A stylish graphic tee for everyday wear.", care: [], fit: [], reviews: [] },
  { id: 10, name: 'Wool Peacoat', category: 'Men', price: 74.99, originalPrice: 150.00, images: ['https://picsum.photos/800/800?random=30'], rating: 4.9, sizes: [{name: 'M', inStock: true}, {name: 'L', inStock: true}], colors: [{name: 'Black', hex: '#111827', inStock: true}], brand: 'Gentleman Co.', material: 'Wool', dateAdded: '2023-02-10T18:00:00Z', description: "Stay warm and stylish with this classic wool peacoat.", care: [], fit: [], reviews: [] },
  { id: 14, name: "Performance Polo", category: 'Men', price: 45.00, images: ['https://picsum.photos/800/800?random=34'], rating: 4.7, sizes: [{name: 'S', inStock: true}, {name: 'M', inStock: true}, {name: 'L', inStock: true}], colors: [{name: 'Navy', hex: '#1e3a8a', inStock: true}], brand: 'Active Co', material: 'Polyester', dateAdded: '2023-06-01T10:00:00Z', description: 'A breathable polo for active days.', care: [], fit: [], reviews: [] },
  { id: 15, name: "Linen Button-Down Shirt", category: 'Men', price: 62.00, images: ['https://picsum.photos/800/800?random=35'], rating: 4.6, sizes: [{name: 'M', inStock: true}, {name: 'L', inStock: true}], colors: [{name: 'White', hex: '#ffffff', inStock: true}], brand: 'Coastal Wear', material: 'Linen', dateAdded: '2023-06-05T11:00:00Z', description: 'Lightweight and perfect for summer.', care: [], fit: [], reviews: [] },
  { id: 16, name: "Cargo Shorts", category: 'Men', price: 39.99, images: ['https://picsum.photos/800/800?random=36'], rating: 4.3, sizes: [{name: 'S', inStock: true}, {name: 'M', inStock: true}], colors: [{name: 'Khaki', hex: '#f0e68c', inStock: true}], brand: 'Urban Threads', material: 'Cotton', dateAdded: '2023-05-15T14:00:00Z', description: 'Durable shorts with plenty of pockets.', care: [], fit: [], reviews: [] },
  { id: 17, name: "Fleece Hoodie", category: 'Men', price: 68.00, images: ['https://picsum.photos/800/800?random=37'], rating: 4.9, sizes: [{name: 'L', inStock: true}, {name: 'XL', inStock: true}], colors: [{name: 'Gray', hex: '#9ca3af', inStock: true}], brand: 'CozyFit', material: 'Fleece', dateAdded: '2023-01-20T15:00:00Z', description: 'An exceptionally soft and warm hoodie.', care: [], fit: [], reviews: [] },
  { id: 18, name: "Tailored Trousers", category: 'Men', price: 85.00, images: ['https://picsum.photos/800/800?random=38'], rating: 4.5, sizes: [{name: 'M', inStock: true}], colors: [{name: 'Charcoal', hex: '#374151', inStock: true}], brand: 'Gentleman Co.', material: 'Wool Blend', dateAdded: '2023-02-22T16:00:00Z', description: 'Sharp trousers for formal occasions.', care: [], fit: [], reviews: [] },
  { id: 19, name: "V-Neck Sweater", category: 'Men', price: 72.50, images: ['https://picsum.photos/800/800?random=39'], rating: 4.6, sizes: [{name: 'S', inStock: true}, {name: 'M', inStock: true}], colors: [{name: 'Burgundy', hex: '#800020', inStock: true}], brand: 'Modern Man', material: 'Cashmere Blend', dateAdded: '2023-03-01T18:00:00Z', description: 'A luxurious and versatile sweater.', care: [], fit: [], reviews: [] },
  
  // Women
  { 
    id: 2, 
    name: 'Floral Sundress', 
    category: 'Women', 
    price: 64.50, 
    images: ['https://picsum.photos/800/800?random=22', 'https://picsum.photos/800/800?random=104', 'https://picsum.photos/800/800?random=105'],
    rating: 4.8, 
    sizes: [{name: 'XS', inStock: true}, {name: 'S', inStock: true}, {name: 'M', inStock: false}], 
    colors: [{name: 'Red', hex: '#dc2626', inStock: true}, {name: 'White', hex: '#ffffff', inStock: true}], 
    brand: 'Summer Bloom', 
    material: 'Rayon', 
    dateAdded: '2023-05-18T11:00:00Z',
    description: "Embrace the sunshine with this beautiful floral sundress. Featuring a lightweight rayon fabric and a flattering A-line silhouette, it's perfect for warm-weather occasions.",
    care: ["Hand wash recommended.", "Lay flat to dry."],
    fit: ["Fits true to size.", "Model is 5'8\" and wearing a size Small."],
    reviews: [
        {id: 3, author: "Sarah K.", rating: 5, title: "Absolutely beautiful!", content: "The fabric is so soft and the fit is perfect. I got so many compliments.", date: "2023-06-20"},
    ]
  },
  { id: 6, name: 'Crossbody Bag', category: 'Women', price: 75.00, images: ['https://picsum.photos/800/800?random=26'], rating: 4.7, sizes: [], colors: [{name: 'Black', hex: '#111827', inStock: true}, {name: 'Brown', hex: '#7c2d12', inStock: true}], brand: 'Chic Carry', material: 'Leather', dateAdded: '2023-03-22T09:00:00Z', description: "A chic and practical crossbody bag.", care: [], fit: [], reviews: [] },
  { id: 11, name: 'High-Waisted Jeans', category: 'Women', price: 47.50, originalPrice: 95.00, images: ['https://picsum.photos/800/800?random=31'], rating: 4.7, sizes: [{name: 'XS', inStock: false}, {name: 'S', inStock: true}, {name: 'M', inStock: true}, {name: 'L', inStock: true}], colors: [{name: 'Blue', hex: '#3b82f6', inStock: true}], brand: 'Denim Deluxe', material: 'Denim', dateAdded: '2023-05-01T16:20:00Z', description: "Flattering high-waisted jeans for a modern look.", care: [], fit: [], reviews: [] },
  { id: 12, name: 'Silk Blouse', category: 'Women', price: 110.00, images: ['https://picsum.photos/800/800?random=32'], rating: 4.6, sizes: [{name: 'S', inStock: true}, {name: 'M', inStock: true}], colors: [{name: 'White', hex: '#ffffff', inStock: true}], brand: 'Elegant Styles', material: 'Silk', dateAdded: '2023-04-05T20:00:00Z', description: "An elegant silk blouse for any occasion.", care: [], fit: [], reviews: [] },
  { id: 20, name: "Pleated Midi Skirt", category: 'Women', price: 78.00, images: ['https://picsum.photos/800/800?random=40'], rating: 4.8, sizes: [{name: 'S', inStock: true}, {name: 'M', inStock: true}], colors: [{name: 'Pink', hex: '#db2777', inStock: true}], brand: 'Elegant Styles', material: 'Polyester', dateAdded: '2023-06-10T10:00:00Z', description: 'A beautiful and flowy midi skirt.', care: [], fit: [], reviews: [] },
  { id: 21, name: "Cashmere Turtleneck", category: 'Women', price: 125.00, images: ['https://picsum.photos/800/800?random=41'], rating: 4.9, sizes: [{name: 'S', inStock: true}], colors: [{name: 'Beige', hex: '#f5f5dc', inStock: true}], brand: 'Chic Carry', material: 'Cashmere', dateAdded: '2023-01-15T12:00:00Z', description: 'The softest turtleneck you will ever own.', care: [], fit: [], reviews: [] },
  { id: 22, name: "Trench Coat", category: 'Women', price: 180.00, images: ['https://picsum.photos/800/800?random=42'], rating: 4.7, sizes: [{name: 'M', inStock: true}, {name: 'L', inStock: true}], colors: [{name: 'Camel', hex: '#c19a6b', inStock: true}], brand: 'Summer Bloom', material: 'Cotton Blend', dateAdded: '2023-04-01T14:00:00Z', description: 'A timeless trench coat for all seasons.', care: [], fit: [], reviews: [] },
  { id: 23, name: "Yoga Leggings", category: 'Women', price: 49.99, originalPrice: 65.00, images: ['https://picsum.photos/800/800?random=43'], rating: 4.9, sizes: [{name: 'S', inStock: true}, {name: 'M', inStock: true}], colors: [{name: 'Black', hex: '#111827', inStock: true}], brand: 'Active Co', material: 'Spandex', dateAdded: '2023-06-12T15:00:00Z', description: 'High-waisted leggings with four-way stretch.', care: [], fit: [], reviews: [] },
  { id: 24, name: "Satin Cami Top", category: 'Women', price: 35.00, images: ['https://picsum.photos/800/800?random=44'], rating: 4.5, sizes: [{name: 'XS', inStock: true}, {name: 'S', inStock: true}], colors: [{name: 'Champagne', hex: '#f7e7ce', inStock: true}], brand: 'Elegant Styles', material: 'Satin', dateAdded: '2023-05-30T16:00:00Z', description: 'A versatile satin camisole.', care: [], fit: [], reviews: [] },
  { id: 25, name: "Knit Cardigan", category: 'Women', price: 65.00, images: ['https://picsum.photos/800/800?random=45'], rating: 4.6, sizes: [{name: 'M', inStock: true}], colors: [{name: 'Oatmeal', hex: '#d4c4a8', inStock: true}], brand: 'CozyFit', material: 'Acrylic', dateAdded: '2023-02-18T18:00:00Z', description: 'A cozy, oversized knit cardigan.', care: [], fit: [], reviews: [] },

  // Children
  { id: 26, name: "Dinosaur Pajama Set", category: 'Children', price: 25.00, images: ['https://picsum.photos/800/800?random=50'], rating: 4.9, sizes: [{name: '2T', inStock: true}, {name: '3T', inStock: true}], colors: [{name: 'Green', hex: '#22c55e', inStock: true}], brand: 'Kiddo Fun', material: 'Cotton', dateAdded: '2023-06-02T10:00:00Z', description: 'Fun and comfy dinosaur-themed pajamas.', care: [], fit: [], reviews: [] },
  { id: 27, name: "Unicorn Graphic Tee", category: 'Children', price: 15.00, images: ['https://picsum.photos/800/800?random=51'], rating: 4.8, sizes: [{name: '4T', inStock: true}, {name: '5', inStock: true}], colors: [{name: 'Pink', hex: '#ec4899', inStock: true}], brand: 'Kiddo Fun', material: 'Cotton', dateAdded: '2023-06-03T11:00:00Z', description: 'A magical unicorn tee for everyday adventures.', care: [], fit: [], reviews: [] },
  { id: 28, name: "Denim Overalls", category: 'Children', price: 35.00, images: ['https://picsum.photos/800/800?random=52'], rating: 4.7, sizes: [{name: '3T', inStock: true}], colors: [{name: 'Blue', hex: '#3b82f6', inStock: true}], brand: 'Urban Threads', material: 'Denim', dateAdded: '2023-05-28T12:00:00Z', description: 'Classic and durable denim overalls.', care: [], fit: [], reviews: [] },
  { id: 29, name: "Waterproof Raincoat", category: 'Children', price: 45.00, images: ['https://picsum.photos/800/800?random=53'], rating: 4.9, sizes: [{name: '4T', inStock: true}, {name: '5', inStock: true}], colors: [{name: 'Yellow', hex: '#eab308', inStock: true}], brand: 'Adventure Kids', material: 'Polyester', dateAdded: '2023-04-10T13:00:00Z', description: 'A bright raincoat for puddle jumping.', care: [], fit: [], reviews: [] },
  { id: 30, name: "Tulle Party Dress", category: 'Children', price: 55.00, images: ['https://picsum.photos/800/800?random=54'], rating: 4.8, sizes: [{name: '5', inStock: true}], colors: [{name: 'Lavender', hex: '#e6e6fa', inStock: true}], brand: 'Elegant Styles', material: 'Tulle', dateAdded: '2023-05-20T14:00:00Z', description: 'A sparkling dress for special occasions.', care: [], fit: [], reviews: [] },
  { id: 31, name: "Fleece Lined Jacket", category: 'Children', price: 49.99, images: ['https://picsum.photos/800/800?random=55'], rating: 4.9, sizes: [{name: '2T', inStock: true}, {name: '3T', inStock: true}], colors: [{name: 'Red', hex: '#dc2626', inStock: true}], brand: 'CozyFit', material: 'Fleece', dateAdded: '2023-01-25T15:00:00Z', description: 'Keep them warm with this fleece-lined jacket.', care: [], fit: [], reviews: [] },
  { id: 32, name: "Khaki Shorts", category: 'Children', price: 19.99, images: ['https://picsum.photos/800/800?random=56'], rating: 4.6, sizes: [{name: '4T', inStock: true}, {name: '5', inStock: true}], colors: [{name: 'Khaki', hex: '#f0e68c', inStock: true}], brand: 'Coastal Wear', material: 'Cotton', dateAdded: '2023-06-08T16:00:00Z', description: 'Comfortable and versatile khaki shorts.', care: [], fit: [], reviews: [] },
  { id: 33, name: "Striped Long-Sleeve Shirt", category: 'Children', price: 18.00, images: ['https://picsum.photos/800/800?random=57'], rating: 4.7, sizes: [{name: '3T', inStock: true}], colors: [{name: 'Blue/White', hex: '#eff6ff', inStock: true}], brand: 'Kiddo Fun', material: 'Cotton', dateAdded: '2023-03-15T18:00:00Z', description: 'A classic striped shirt.', care: [], fit: [], reviews: [] },
  { id: 34, name: "Toddler Legging Set", category: 'Children', price: 22.00, images: ['https://picsum.photos/800/800?random=58'], rating: 4.8, sizes: [{name: '2T', inStock: true}], colors: [{name: 'Purple', hex: '#a855f7', inStock: true}], brand: 'CozyFit', material: 'Cotton Blend', dateAdded: '2023-02-12T19:00:00Z', description: 'A cute and comfy top and legging set.', care: [], fit: [], reviews: [] },
  { id: 35, name: "Swim Trunks", category: 'Children', price: 20.00, images: ['https://picsum.photos/800/800?random=59'], rating: 4.7, sizes: [{name: '5', inStock: true}], colors: [{name: 'Aqua', hex: '#00ffff', inStock: true}], brand: 'Adventure Kids', material: 'Nylon', dateAdded: '2023-06-11T20:00:00Z', description: 'Bright swim trunks for the beach or pool.', care: [], fit: [], reviews: [] },

  // Shoes
  { id: 3, name: 'Leather Ankle Boots', category: 'Shoes', price: 59.99, originalPrice: 120.00, images: ['https://picsum.photos/800/800?random=23'], rating: 4.9, sizes: [{name: 'US 7', inStock: true}, {name: 'US 8', inStock: true}, {name: 'US 9', inStock: false}], colors: [{name: 'Black', hex: '#111827', inStock: true}, {name: 'Brown', hex: '#7c2d12', inStock: true}], brand: 'Walk Tall', material: 'Leather', dateAdded: '2023-03-10T14:00:00Z', description: "Stylish and durable leather ankle boots.", care: [], fit: [], reviews: [] },
  { id: 13, name: 'Classic Loafers', category: 'Shoes', price: 130.00, images: ['https://picsum.photos/800/800?random=33'], rating: 4.8, sizes: [{ name: 'US 9', inStock: true }, { name: 'US 10', inStock: true }], colors: [{ name: 'Brown', hex: '#7c2d12', inStock: true }], brand: 'Gentleman Co.', material: 'Leather', dateAdded: '2023-01-15T10:00:00Z', description: 'Classic and comfortable loafers.', care: [], fit: [], reviews: [] },
  { id: 36, name: "High-Top Canvas Sneakers", category: 'Shoes', price: 65.00, images: ['https://picsum.photos/800/800?random=60'], rating: 4.6, sizes: [{name: 'US 8', inStock: true}, {name: 'US 9', inStock: true}], colors: [{name: 'Black', hex: '#111827', inStock: true}], brand: 'Urban Threads', material: 'Canvas', dateAdded: '2023-05-18T10:00:00Z', description: 'Versatile high-top sneakers.', care: [], fit: [], reviews: [] },
  { id: 37, name: "Suede Chelsea Boots", category: 'Shoes', price: 145.00, images: ['https://picsum.photos/800/800?random=61'], rating: 4.8, sizes: [{name: 'US 10', inStock: true}], colors: [{name: 'Tan', hex: '#d2b48c', inStock: true}], brand: 'Gentleman Co.', material: 'Suede', dateAdded: '2023-02-01T11:00:00Z', description: 'Elegant and comfortable suede boots.', care: [], fit: [], reviews: [] },
  { id: 38, name: "Women's Strappy Sandals", category: 'Shoes', price: 49.99, images: ['https://picsum.photos/800/800?random=62'], rating: 4.5, sizes: [{name: 'US 7', inStock: true}, {name: 'US 8', inStock: true}], colors: [{name: 'Gold', hex: '#ffd700', inStock: true}], brand: 'Summer Bloom', material: 'Faux Leather', dateAdded: '2023-06-13T12:00:00Z', description: 'Perfect sandals for a summer night out.', care: [], fit: [], reviews: [] },
  { id: 39, name: "Running Sneakers", category: 'Shoes', price: 110.00, images: ['https://picsum.photos/800/800?random=63'], rating: 4.9, sizes: [{name: 'US 9', inStock: true}, {name: 'US 10', inStock: true}], colors: [{name: 'White', hex: '#ffffff', inStock: true}], brand: 'Active Co', material: 'Mesh', dateAdded: '2023-06-01T13:00:00Z', description: 'Lightweight and supportive running shoes.', care: [], fit: [], reviews: [] },
  { id: 40, name: "Ballet Flats", category: 'Shoes', price: 85.00, images: ['https://picsum.photos/800/800?random=64'], rating: 4.7, sizes: [{name: 'US 7', inStock: true}], colors: [{name: 'Red', hex: '#dc2626', inStock: true}], brand: 'Chic Carry', material: 'Leather', dateAdded: '2023-04-20T14:00:00Z', description: 'Classic leather ballet flats.', care: [], fit: [], reviews: [] },
  { id: 41, name: "Kids' Light-Up Sneakers", category: 'Shoes', price: 42.00, images: ['https://picsum.photos/800/800?random=65'], rating: 4.9, sizes: [{name: 'C10', inStock: true}, {name: 'C11', inStock: true}], colors: [{name: 'Blue/Green', hex: '#86efac', inStock: true}], brand: 'Kiddo Fun', material: 'Synthetic', dateAdded: '2023-06-05T15:00:00Z', description: 'Fun sneakers that light up with every step.', care: [], fit: [], reviews: [] },
  { id: 42, name: "Waterproof Hiking Boots", category: 'Shoes', price: 160.00, images: ['https://picsum.photos/800/800?random=66'], rating: 4.8, sizes: [{name: 'US 9', inStock: true}], colors: [{name: 'Brown', hex: '#a52a2a', inStock: true}], brand: 'Adventure Kids', material: 'Gore-Tex', dateAdded: '2023-03-25T16:00:00Z', description: 'Durable boots for any trail.', care: [], fit: [], reviews: [] },
  { id: 43, name: "Flip-Flops", category: 'Shoes', price: 25.00, originalPrice: 35.00, images: ['https://picsum.photos/800/800?random=67'], rating: 4.4, sizes: [{name: 'US 8', inStock: true}, {name: 'US 9', inStock: true}], colors: [{name: 'Black', hex: '#111827', inStock: true}], brand: 'Coastal Wear', material: 'Rubber', dateAdded: '2023-06-14T18:00:00Z', description: 'Simple and comfortable flip-flops.', care: [], fit: [], reviews: [] }
];


export const CART_ITEMS: CartItem[] = [
    { id: 1, product: PRODUCTS[0], quantity: 1, size: 'M', color: 'Blue' },
    { id: 2, product: PRODUCTS[8], quantity: 2, size: 'L', color: 'White' },
    { id: 3, product: PRODUCTS[4], quantity: 1, size: 'S', color: 'Red' },
];

export const SHIPPING_METHODS: ShippingMethod[] = [
    { id: 'standard', label: 'Standard Shipping', description: '4-8 business days', price: 5.00 },
    { id: 'express', label: 'Express Shipping', description: '1-3 business days', price: 15.00 },
    { id: 'pickup', label: 'In-Store Pickup', description: 'Ready in 2-4 hours', price: 0.00 },
];

export const ORDER_TRACKING_INFO: OrderTrackingInfo = {
    orderId: 'VV12345',
    email: 'customer@example.com',
    estimatedDelivery: '2024-07-28',
    carrier: { name: 'VogueShip', trackingNumber: 'VS987654321', url: '#' },
    statusHistory: [
        { id: 1, label: 'Order Confirmed', date: '2024-07-22T10:30:00Z', location: 'New York, NY', details: 'Your order has been received.', coordinates: { lat: 40.7128, lng: -74.0060 } },
        { id: 2, label: 'Processing', date: '2024-07-22T14:00:00Z', location: 'New York, NY', details: 'Your items are being prepared for shipment.', coordinates: { lat: 40.7128, lng: -74.0060 } },
        { id: 3, label: 'Shipped', date: '2024-07-23T09:00:00Z', location: 'Edison, NJ', details: 'Package has left the warehouse.', coordinates: { lat: 40.5187, lng: -74.4121 } },
        { id: 4, label: 'Out for Delivery', date: '2024-07-25T08:15:00Z', location: 'Los Angeles, CA', details: 'Package is on the truck and heading your way.', coordinates: { lat: 34.0522, lng: -118.2437 } },
    ]
};

export const STORE_LOCATIONS: StoreLocation[] = [
    { id: 1, name: 'VogueVerse SoHo', address: ['123 Fashion Ave', 'New York, NY 10012'], phone: '(212) 555-0123', hours: ['Mon-Sat: 10am - 8pm', 'Sun: 11am - 7pm'] },
    { id: 2, name: 'VogueVerse Beverly Hills', address: ['456 Style Blvd', 'Beverly Hills, CA 90210'], phone: '(310) 555-0456', hours: ['Mon-Sat: 10am - 9pm', 'Sun: 11am - 6pm'] },
    { id: 3, name: 'VogueVerse Miami', address: ['789 Design District', 'Miami, FL 33137'], phone: '(305) 555-0789', hours: ['Mon-Sun: 11am - 8pm'] },
];