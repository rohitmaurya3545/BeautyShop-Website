import React, { useState } from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import Footer from './Footer';
import CartSidebar from './CartSidebar';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  originalPrice?: number;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Lakme Absolute Perfect Radiance Skin Lightening Serum',
    price: 899,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Skincare',
    description: 'Advanced skin lightening serum with Vitamin C',
    rating: 4.5
  },
  {
    id: '2',
    name: 'Maybelline New York Fit Me Matte Foundation',
    price: 649,
    originalPrice: 799,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Makeup',
    description: 'Long-lasting matte foundation for oily skin',
    rating: 4.3
  },
  {
    id: '3',
    name: 'LOreal Paris Excellence Hair Color',
    price: 425,
    originalPrice: 550,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Hair Care',
    description: 'Premium hair color with triple protection',
    rating: 4.4
  },
  {
    id: '4',
    name: 'The Body Shop Tea Tree Face Wash',
    price: 695,
    originalPrice: 895,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Skincare',
    description: 'Deep cleansing face wash for acne-prone skin',
    rating: 4.6
  },
  {
    id: '5',
    name: 'Nykaa Matte to Last Liquid Lipstick',
    price: 399,
    originalPrice: 499,
    image: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg',
    category: 'Makeup',
    description: 'Transfer-proof liquid lipstick in vibrant shades',
    rating: 4.2
  },
  {
    id: '6',
    name: 'Biotique Bio Coconut Whitening Cream',
    price: 285,
    originalPrice: 350,
    image: 'https://images.pexels.com/photos/4465832/pexels-photo-4465832.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Skincare',
    description: 'Natural coconut-based brightening cream',
    rating: 4.1
  },
  {
    id: '7',
    name: 'Forest Essentials Luxury Sugar Soap',
    price: 1250,
    originalPrice: 1500,
    image: 'https://images.pexels.com/photos/10853725/pexels-photo-10853725.jpeg',
    category: 'Body Care',
    description: 'Handmade luxury soap with natural ingredients',
    rating: 4.7
  },
  {
    id: '8',
    name: 'Himalaya Herbals Anti-Dandruff Shampoo',
    price: 165,
    originalPrice: 210,
    image: 'https://images.pexels.com/photos/4465834/pexels-photo-4465834.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Hair Care',
    description: 'Natural anti-dandruff shampoo with tea tree',
    rating: 4.3
  },
  {
    id: '9',
    name: 'MAC Studio Fix Powder Plus Foundation',
    price: 2950,
    originalPrice: 3200,
    image: 'https://images.pexels.com/photos/6045170/pexels-photo-6045170.jpeg',
    category: 'Makeup',
    description: 'Professional powder foundation with full coverage',
    rating: 4.8
  },
  {
    id: '10',
    name: 'Plum Green Tea Renewed Clarity Night Gel',
    price: 545,
    originalPrice: 695,
    image: 'https://images.pexels.com/photos/4465835/pexels-photo-4465835.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Skincare',
    description: 'Overnight renewal gel with green tea extract',
    rating: 4.4
  },
  {
    id: '11',
    name: 'Colorbar Velvet Matte Lipstick',
    price: 750,
    originalPrice: 950,
    image: 'https://images.pexels.com/photos/14444882/pexels-photo-14444882.jpeg',
    category: 'Makeup',
    description: 'Rich velvet matte lipstick in classic shades',
    rating: 4.5
  },
  {
    id: '12',
    name: 'Dove Intense Repair Shampoo',
    price: 185,
    originalPrice: 235,
    image: 'https://images.pexels.com/photos/4465836/pexels-photo-4465836.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Hair Care',
    description: 'Deep repair shampoo for damaged hair',
    rating: 4.2
  },
  {
    id: '13',
    name: 'Kama Ayurveda Rose Jasmine Face Cleanser',
    price: 895,
    originalPrice: 1095,
    image: 'https://images.pexels.com/photos/4465837/pexels-photo-4465837.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Skincare',
    description: 'Gentle ayurvedic face cleanser with rose water',
    rating: 4.6
  },
  {
    id: '14',
    name: 'Urban Decay Eyeshadow Palette',
    price: 3450,
    originalPrice: 3800,
    image: 'https://images.pexels.com/photos/6877427/pexels-photo-6877427.jpeg',
    category: 'Makeup',
    description: 'Professional eyeshadow palette with 12 shades',
    rating: 4.9
  },
  {
    id: '15',
    name: 'Neutrogena Ultra Sheer Sunscreen SPF 50+',
    price: 399,
    originalPrice: 499,
    image: 'https://images.pexels.com/photos/8384644/pexels-photo-8384644.jpeg',
    category: 'Skincare',
    description: 'Broad spectrum sunscreen with dry-touch formula',
    rating: 4.4
  },
  {
    id: '16',
    name: 'WOW Skin Science Onion Hair Oil',
    price: 649,
    originalPrice: 799,
    image: 'https://images.pexels.com/photos/15360041/pexels-photo-15360041.jpeg',
    category: 'Hair Care',
    description: 'Hair growth oil with red onion and castor oil',
    rating: 4.3
  },
  {
    id: '17',
    name: 'Sugar Cosmetics Contour De Force Mini Kit',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.pexels.com/photos/7256073/pexels-photo-7256073.jpeg',
    category: 'Makeup',
    description: 'Complete contouring kit with brush',
    rating: 4.5
  },
  {
    id: '18',
    name: 'Mamaearth Vitamin C Face Serum',
    price: 599,
    originalPrice: 799,
    image: 'https://images.pexels.com/photos/7256120/pexels-photo-7256120.jpeg',
    category: 'Skincare',
    description: 'Brightening face serum with Vitamin C & Turmeric',
    rating: 4.3
  },
  {
    id: '19',
    name: 'Bath & Body Works Body Mist',
    price: 1195,
    originalPrice: 1395,
    image: 'https://images.pexels.com/photos/4210336/pexels-photo-4210336.jpeg',
    category: 'Body Care',
    description: 'Long-lasting fragrance mist in various scents',
    rating: 4.6
  },
  {
    id: '20',
    name: 'Revlon Super Lustrous Lipstick',
    price: 695,
    originalPrice: 895,
    image: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg',
    category: 'Makeup',
    description: 'Classic moisturizing lipstick in rich colors',
    rating: 4.4
  }
];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart } = useCart();

  const categories = ['All', 'Skincare', 'Makeup', 'Hair Care', 'Body Care'];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCartClick={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-400 via-pink-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Discover Your Beauty</h1>
          <p className="text-xl mb-8">Premium quality cosmetics at unbeatable prices</p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <span className="text-2xl mr-2">✨</span>
              <span>Premium Brands</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🚚</span>
              <span>Free Shipping Above ₹999</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">💝</span>
              <span>Authentic Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-rose-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-rose-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default HomePage;