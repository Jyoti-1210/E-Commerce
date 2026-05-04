const products = [

  // =====================
  // MOBILES
  // =====================

  {
    name: "iPhone 15 Pro Max",

    description:
      "Apple A17 Pro chip, 256GB Storage, Titanium Design, 48MP Camera, 120Hz Display",

    price: 159999,

    category: "mobiles",

    subcategory: "iPhone",

    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
    ],

    stock: 20,

    rating: 4.9,

    brand: "Apple",
  },

  {
    name: "Samsung Galaxy S24 Ultra",

    description:
      "Snapdragon 8 Gen 3, 200MP Camera, S-Pen Support, 12GB RAM, 512GB Storage",

    price: 134999,

    category: "mobiles",

    subcategory: "Samsung",

    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpKxTiFqPSuZxP7vzWWDUucMhX56RpW42GpGNeDn2lCAhJ1dFwQJhaUpwoTHPcoOFcYRA_aoa9pJ5RpglQP-r7FrCK34H5UonODG1CBifcfZgch4A6A5bV_24iRBKbGw&usqp=CAc",
    ],

    stock: 18,

    rating: 4.8,

    brand: "Samsung",
  },

  {
    name: "OnePlus 12",

    description:
      "Snapdragon 8 Gen 3, 100W Charging, AMOLED Display, Hasselblad Camera",

    price: 69999,

    category: "mobiles",

    subcategory: "OnePlus",

    images: [
      "https://image01-in.oneplus.net/media/202504/29/f7dd3061e62632c0f49d1f9c28ccc214.png?x-amz-process=image/format,webp/quality,Q_80",
    ],

    stock: 15,

    rating: 4.7,

    brand: "OnePlus",
  },

  {
    name: "Google Pixel 8 Pro",

    description:
      "Google Tensor G3, AI Camera Features, 120Hz OLED Display, Android 15",

    price: 89999,

    category: "mobiles",

    subcategory: "Google Pixel",

    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    ],

    stock: 10,

    rating: 4.6,

    brand: "Google",
  },

  // =====================
  // ELECTRONICS
  // =====================

  {
    name: "MacBook Air M3",

    description:
      "Apple M3 Chip, 16GB RAM, 512GB SSD, Liquid Retina Display",

    price: 145999,

    category: "electronics",

    subcategory: "Laptop",

    images: [
      "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/wm/164091-laptops-news-apple-s-macbook-air-could-be-getting-bigger-in-2023-image1-4ckrvmv5j7.jpg?w=1600&h=1200&fit=crop",
    ],

    stock: 8,

    rating: 4.9,

    brand: "Apple",
  },

  {
    name: "ASUS ROG Strix G16",

    description:
      "Intel i9 Processor, RTX 4070 GPU, 240Hz Gaming Display",

    price: 189999,

    category: "electronics",

    subcategory: "Gaming",

    images: [
      "https://yourshoppy.com/wp-content/uploads/2026/04/ROG-Strix-G16-G614PH-RV073WS-2.webp",
    ],

    stock: 5,

    rating: 4.8,

    brand: "ASUS",
  },

  {
    name: "Sony Alpha A7 IV",

    description:
      "33MP Full Frame Camera, 4K Recording, Real-time Autofocus",

    price: 209999,

    category: "electronics",

    subcategory: "Camera",

    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    ],

    stock: 6,

    rating: 4.8,

    brand: "Sony",
  },

  {
    name: "Samsung Galaxy Tab S9",

    description:
      "Dynamic AMOLED Display, Snapdragon 8 Gen 2, S Pen Included",

    price: 84999,

    category: "electronics",

    subcategory: "Tablet",

    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaoXYVdB-Gq32PXJhdZSwr7JYNqXWe8lzO5w&s",
    ],

    stock: 12,

    rating: 4.6,

    brand: "Samsung",
  },

  // =====================
  // BEAUTY
  // =====================

  {
    name: "Minimalist Vitamin C Serum",

    description:
      "10% Vitamin C Face Serum for glowing skin and dark spot reduction",

    price: 699,

    category: "beauty",

    subcategory: "Skin Care",

    images: [
      "https://m.media-amazon.com/images/I/51ofuGjgVJL.jpg",
    ],

    stock: 50,

    rating: 4.5,

    brand: "Minimalist",
  },

  {
    name: "Mamaearth Onion Shampoo",

    description:
      "Onion oil shampoo for hair fall control and stronger hair",

    price: 499,

    category: "beauty",

    subcategory: "Hair Care",

    images: [
      "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,dpr-2/static/img/product/406923/mamaearth-onion-shampoo-for-hair-growth-and-hair-fall-control-with-onion-oil-and-plant-keratin-400-ml-17-19-60-15_5_display_1762860553_25622a29.jpg",
    ],

    stock: 60,

    rating: 4.4,

    brand: "Mamaearth",
  },

  // =====================
  // FASHION
  // =====================

  {
    name: "Levi's Slim Fit Jeans",

    description:
      "Stretchable slim fit denim jeans for men with premium comfort",

    price: 2499,

    category: "fashion",

    subcategory: "Jeans",

    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVCw-a8I00oxzHVdTRZHFPQMZZy-WZbh07Q&s",
    ],

    stock: 40,

    rating: 4.5,

    brand: "Levi's",
  },

  {
    name: "RayBan Aviator Sunglasses",

    description:
      "UV protected premium aviator sunglasses with metal frame",

    price: 6999,

    category: "fashion",

    subcategory: "Sunglasses",

    images: [
      "https://4.imimg.com/data4/QP/KL/MY-29267631/rayban-aviator-sunglasses-500x500.jpg",
    ],

    stock: 25,

    rating: 4.7,

    brand: "RayBan",
  },

  // =====================
  // HOME
  // =====================

  {
    name: "Floral Cotton Bedsheet",

    description:
      "King size premium cotton bedsheet with 2 pillow covers",

    price: 1499,

    category: "home",

    subcategory: "Bedsheets",

    images: [
      "https://m.media-amazon.com/images/I/6189NPU1FNL._AC_UF894,1000_QL80_.jpg",
    ],

    stock: 35,

    rating: 4.4,

    brand: "Home Centre",
  },

  {
    name: "Indoor Decorative Plant",

    description:
      "Artificial indoor plant for living room and office decor",

    price: 899,

    category: "home",

    subcategory: "Gardening",

    images: [
      "https://www.thespruce.com/thmb/ZhNUOJ4Pt0Bj422Pu_uEzZXa_j0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/increase-humidity-for-houseplants-1902801-6-eadf73df8284421ca827c073d8a43fd2.jpg",
    ],

    stock: 30,

    rating: 4.3,

    brand: "IKEA",
  },

  // =====================
  // SPORTS
  // =====================

  {
    name: "Yonex Badminton Kit",

    description:
      "2 badminton rackets with shuttlecock set and carry bag",

    price: 3499,

    category: "sports and fitness",

    subcategory: "Badminton",

    images: [
      "https://m.media-amazon.com/images/I/61TgfFPwD2L._AC_UF894,1000_QL80_.jpg",
    ],

    stock: 20,

    rating: 4.6,

    brand: "Yonex",
  },

  {
    name: "PowerMax Treadmill",

    description:
      "Foldable treadmill with heart rate monitor and LCD display",

    price: 45999,

    category: "sports and fitness",

    subcategory: "Treadmill",

    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/9/QA/VB/VF/2964045/tda-111-powermax-motorized-treadmill.jpg",
    ],

    stock: 5,

    rating: 4.5,

    brand: "PowerMax",
  },

  // =====================
  // FURNITURE
  // =====================

  {
    name: "Wooden Office Chair",

    description:
      "Ergonomic office chair with lumbar support and adjustable height",

    price: 7999,

    category: "furniture",

    subcategory: "Office Chair",

    images: [
      "https://www.lakdi.com/cdn/shop/files/4_3dc5d69f-0c4c-4b23-b99d-23d792a75a6b.jpg?v=1754563115&width=3000",
    ],

    stock: 12,

    rating: 4.4,

    brand: "Urban Ladder",
  },

  {
    name: "Luxury Recliner Sofa",

    description:
      "Premium leather recliner sofa with adjustable comfort settings",

    price: 49999,

    category: "furniture",

    subcategory: "Recliner",

    images: [
      "https://www.nilkamalfurniture.com/cdn/shop/files/Skelton1strls.jpg?v=1695384772&width=1080",
    ],

    stock: 4,

    rating: 4.8,

    brand: "Pepperfry",
  },
// =====================
// APPLIANCES
// =====================

{
  name: "LG Smart OLED TV 55 Inch",

  description:
    "4K Ultra HD Smart OLED TV with Dolby Vision and AI Sound Pro",

  price: 89999,

  category: "appliances",

  subcategory: "Television",

  images: [
    "https://m.media-amazon.com/images/I/71MlcO29QOL.jpg",
  ],

  stock: 10,

  rating: 4.8,

  brand: "LG",
},

{
  name: "Samsung Double Door Refrigerator",

  description:
    "Digital inverter refrigerator with convertible freezer technology",

  price: 42999,

  category: "appliances",

  subcategory: "Fridge",

  images: [
    "https://static.toiimg.com/thumb/resizemode-4,msid-54125847,width-201/54125847.jpg",
  ],

  stock: 7,

  rating: 4.6,

  brand: "Samsung",
},

{
  name: "Voltas 1.5 Ton Inverter AC",

  description:
    "5 star inverter split AC with turbo cooling and anti dust filter",

  price: 38999,

  category: "appliances",

  subcategory: "AC",

  images: [
    "https://www.archieelectronic.com/wp-content/uploads/2019/10/voltas-1-5-ton-3-star-split-inverter-ac-copper-condenser-183-vjzj4-white.jpg",
  ],

  stock: 9,

  rating: 4.5,

  brand: "Voltas",
},

{
  name: "Prestige Mixer Grinder",

  description:
    "750W powerful mixer grinder with stainless steel jars",

  price: 4999,

  category: "appliances",

  subcategory: "Kitchen",

  images: [
    "https://m.media-amazon.com/images/I/71SaXK5PaVL.jpg",
  ],

  stock: 18,

  rating: 4.4,

  brand: "Prestige",
},

// =====================
// TOYS AND BABY
// =====================

{
  name: "Pampers Baby Diapers Large Pack",

  description:
    "Cotton soft diapers with 12 hour leakage protection",

  price: 1299,

  category: "toys and baby",

  subcategory: "Diapers",

  images: [
    "https://juniorshop.in/wp-content/uploads/2022/03/22.1.jpg",
  ],

  stock: 35,

  rating: 4.7,

  brand: "Pampers",
},

{
  name: "Classmate School Kit",

  description:
    "School stationery kit with notebooks pencils erasers and geometry box",

  price: 899,

  category: "toys and baby",

  subcategory: "School Supplies",

  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50X-spskAGMWh_ZN-0m3XorP5z4H6OhEWJA&s",
  ],

  stock: 25,

  rating: 4.5,

  brand: "Classmate",
},

{
  name: "FunBlast Art & Craft Kit",

  description:
    "Creative art set for kids with colors crayons and sketch pens",

  price: 1499,

  category: "toys and baby",

  subcategory: "Art Kits",

  images: [
    "https://rukmini1.flixcart.com/image/1500/1500/xif0q/art-set/x/i/q/150-piece-of-art-and-craft-set-for-drawing-and-painting-with-original-imahhd97wqzfz2fw.jpeg?q=70",
  ],

  stock: 15,

  rating: 4.6,

  brand: "FunBlast",
},

{
  name: "Johnson's Baby Wipes",

  description:
    "Gentle baby wipes enriched with moisturizing lotion",

  price: 299,

  category: "toys and baby",

  subcategory: "Wipes",

  images: [
    "https://m.media-amazon.com/images/I/61z5FkGiXyL._AC_UF894,1000_QL80_.jpg",
  ],

  stock: 50,

  rating: 4.5,

  brand: "Johnson & Johnson",
},

// =====================
// AUTO ACCESSORIES
// =====================
{
  name: "AutoFurnish Foldable Car Sun Shade",

  description:
    "Foldable UV protection windshield sun shade for cars with heat insulation and dashboard protection",

  price: 899,

  category: "auto accessories",

  subcategory: "Sun Shade",

  images: [
    "https://m.media-amazon.com/images/I/71e-SREp7BL._AC_UF350,350_QL80_.jpg",
  ],

  stock: 30,

  rating: 4.4,

  brand: "AutoFurnish",
},

{
  name: "Qubo Car Dash Camera",

  description:
    "Full HD dash cam with night vision and emergency recording",

  price: 4999,

  category: "auto accessories",

  subcategory: "Dashcam",

  images: [
    "https://m.media-amazon.com/images/I/61HfHkouJlL._AC_UF1000,1000_QL80_.jpg",
  ],

  stock: 11,

  rating: 4.5,

  brand: "Qubo",
},

{
  name: "Michelin Car Tyre",

  description:
    "Tubeless radial tyre with enhanced grip and durability",

  price: 6999,

  category: "auto accessories",

  subcategory: "Tyres",

  images: [
    "https://tiimg.tistatic.com/fp/1/006/356/michelin-passenger-car-tyres-227.jpg",
  ],

  stock: 20,

  rating: 4.6,

  brand: "Michelin",
},

{
  name: "Steelbird Full Face Helmet",

  description:
    "ISI certified full face helmet with scratch resistant visor",

  price: 2499,

  category: "auto accessories",

  subcategory: "Helmets",

  images: [
    "https://cdn.dotpe.in/longtail/store-items/6118637/9bt8gJOS.webp",
  ],

  stock: 16,

  rating: 4.4,

  brand: "Steelbird",
},

{
  name: "3M Car Perfume",

  description:
    "Long lasting premium car perfume with fresh fragrance",

  price: 499,

  category: "auto accessories",

  subcategory: "Car Perfume",

  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH1KsmizGsL_WpwUFwukbvw_c9jnMCFf6B9A&s",
  ],

  stock: 40,

  rating: 4.3,

  brand: "3M",
},

// =====================
// FOOD AND HEALTH
// =====================

{
  name: "Tata Sampann Organic Toor Dal",

  description:
    "Premium organic toor dal rich in protein and nutrients",

  price: 249,

  category: "food and health",

  subcategory: "Groceries",

  images: [
    "https://www.tatanutrikorner.com/cdn/shop/files/TATA-Sampann-Organic-Toor-Dal-_Arhar-Dal_-500g-_FOP_0a990eb7-8904-4a85-9241-f06cddaa0d79-removebg-preview.png?v=1748858294",
  ],

  stock: 60,

  rating: 4.5,

  brand: "Tata Sampann",
},

{
  name: "Horlicks Health Drink",

  description:
    "Classic malt based nutrition drink with vitamins and minerals",

  price: 399,

  category: "food and health",

  subcategory: "Nutrition Drinks",

  images: [
    "https://www.horlicks.in/cdn/shop/files/Pre-Home-Page-Phone.jpg?v=1766475129",
  ],

  stock: 30,

  rating: 4.6,

  brand: "Horlicks",
},

{
  name: "Cadbury Celebrations Pack",

  description:
    "Premium assorted chocolate gift pack for special occasions",

  price: 499,

  category: "food and health",

  subcategory: "Chocolates",

  images: [
    "https://www.flowersacrossindia.com/cdn/shop/products/FAIHD20170659.jpg?v=1554468217",
  ],

  stock: 45,

  rating: 4.7,

  brand: "Cadbury",
},

{
  name: "Himalaya Ashwagandha Tablets",

  description:
    "Ayurvedic supplement for stress relief and energy support",

  price: 349,

  category: "food and health",

  subcategory: "Ayurveda",

  images: [
    "https://m.media-amazon.com/images/I/71Rzl1CSqKL.jpg",
  ],

  stock: 28,

  rating: 4.5,

  brand: "Himalaya",
},
];


// =====================
// DUPLICATE PRODUCTS TO MAKE 200+
// =====================

const extraProducts = [];

for (let i = 0; i < 12; i++) {

  products.forEach((p) => {

    extraProducts.push({

      ...p,

      name: `${p.name} Variant ${i + 1}`,

      price:
        p.price +
        Math.floor(Math.random() * 5000),

      stock:
        Math.floor(Math.random() * 40) + 1,
    });
  });
}

module.exports = [
  ...products,
  ...extraProducts,
];