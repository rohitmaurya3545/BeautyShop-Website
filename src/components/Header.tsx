import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Sparkles, ShoppingCart, User, LogOut } from 'lucide-react';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { state } = useCart();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Sparkles className="w-8 h-8 text-rose-500 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">BeautyShop</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-rose-500 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-rose-500 font-medium">Skincare</a>
            <a href="#" className="text-gray-700 hover:text-rose-500 font-medium">Makeup</a>
            <a href="#" className="text-gray-700 hover:text-rose-500 font-medium">Hair Care</a>
            <a href="#" className="text-gray-700 hover:text-rose-500 font-medium">Offers</a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Hi, {user?.name}!</span>
            </div>
            
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-rose-500 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-rose-500 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;