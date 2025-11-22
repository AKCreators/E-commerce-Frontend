import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Product" 
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          -20%
        </span>
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
          ♡
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Wireless Bluetooth Headphones</h3>
        <p className="text-gray-600 text-sm mb-4">Premium sound quality with noise cancellation</p>
        
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            ★★★★☆
          </div>
          <span className="text-gray-500 text-sm ml-2">(128 reviews)</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">$99.99</span>
            <span className="text-lg text-gray-500 line-through">$124.99</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
