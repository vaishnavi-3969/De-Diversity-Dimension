import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsCart3 } from 'react-icons/bs';

const LGBTQMarketplace = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 min-h-screen">
      <div className="flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold text-white mb-6">LGBTQ+ Marketplace</h2>
        <div className="product-grid grid grid-cols-3 gap-6 w-[1200px]">
          {products.map((product) => (
            <div key={product.id} className="product-card bg-gray-800 rounded-lg p-4">
              <img src={product.image} alt={product.title} className="w-full h-90 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">{product.title}</h3>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <p className="text-gray-300">Price: ${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="cart-icon bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center absolute top-8 right-8">
          <BsCart3 size={24} />
          <span className="text-sm ml-1">{cartItems.length}</span>
        </div>
        <div className="mt-8 text-white">
        </div>
      </div>
    </div>
  );
};

export default LGBTQMarketplace;
