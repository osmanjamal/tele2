import React from 'react';
import { MenuItem } from '../types';
import { useStore } from '../store/useStore';

interface MenuListProps {
  items: MenuItem[];
}

export function MenuList({ items }: MenuListProps) {
  const { cart, addToCart, removeFromCart } = useStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg">{item.name}</h3>
              <h4 className="text-lg text-gray-700">{item.name_ar}</h4>
            </div>
            <span className="text-lg font-semibold">{item.price} AED</span>
          </div>
          <p className="text-gray-600 mb-2">{item.description}</p>
          <p className="text-gray-600 mb-4">{item.description_ar}</p>
          
          <div className="flex justify-between items-center">
            {cart[item.id] ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  -
                </button>
                <span className="font-semibold">{cart[item.id]}</span>
                <button
                  onClick={() => addToCart(item.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => addToCart(item.id)}
                className="bg-primary text-white px-4 py-2 rounded-lg w-full"
                disabled={!item.available}
              >
                {item.available ? 'Add to Cart' : 'Not Available'}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}