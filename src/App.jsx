import React from 'react';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Header />
      <ProductDetail />
    </div>
  );
};

export default App;
