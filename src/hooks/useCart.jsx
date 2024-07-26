import { useState } from 'react';

const useCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return {
    isCartOpen,
    toggleCart,
    closeCart,
  };
};

export default useCart;
