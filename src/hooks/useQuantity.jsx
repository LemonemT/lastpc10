import { useState } from 'react';

const useQuantity = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  return {
    quantity,
    increaseQuantity,
    decreaseQuantity,
  };
};

export default useQuantity;
