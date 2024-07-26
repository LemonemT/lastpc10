import { useState } from 'react';

const useMainImage = (initialImage) => {
  const [mainImage, setMainImage] = useState(initialImage);

  const changeImage = (imageSrc) => {
    setMainImage(imageSrc);
  };

  return {
    mainImage,
    changeImage,
  };
};

export default useMainImage;
