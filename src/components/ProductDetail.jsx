import React, { useState } from 'react';
import useQuantity from '../hooks/useQuantity';
import useMainImage from '../hooks/useMainImage';
import GalleriaModal from './GalleriaModal';

const ProductDetail = () => {
  const { quantity, increaseQuantity, decreaseQuantity } = useQuantity();
  const { mainImage, changeImage } = useMainImage("image-product-1.jpg");
  const [displayGallery, setDisplayGallery] = useState(false);
  const images = [
    { itemImageSrc: 'image-product-1.jpg', thumbnailImageSrc: 'image-product-1-thumbnail.jpg', alt: 'Image 1' },
    { itemImageSrc: 'image-product-2.jpg', thumbnailImageSrc: 'image-product-2-thumbnail.jpg', alt: 'Image 2' },
    { itemImageSrc: 'image-product-3.jpg', thumbnailImageSrc: 'image-product-3-thumbnail.jpg', alt: 'Image 3' },
    { itemImageSrc: 'image-product-4.jpg', thumbnailImageSrc: 'image-product-4-thumbnail.jpg', alt: 'Image 4' },
  ];
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  const itemTemplate = (item) => {
    return (
      <img src={item.itemImageSrc} alt={item.alt} className="w-full h-auto" />
    );
  };
  const thumbnailTemplate = (item) => {
    return (
      <img src={item.thumbnailImageSrc} alt={item.alt} className="w-20 h-20" />
    );
  };

  const handleImageClick = () => {
    setDisplayGallery(true);
  };

  const handleCloseGallery = () => {
    setDisplayGallery(false);
  };

  return (
    <div className="flex py-8 px-10 mt-5 bg-white items-center">
      <div className="flex-1 flex flex-col items-center">
        <img
          src={mainImage}
          alt="Shoe"
          className="w-auto h-96 object-cover rounded-lg cursor-pointer"
          onClick={handleImageClick}
        />
        <div className="flex space-x-5 mt-4 justify-center">
          <img
            src="image-product-1-thumbnail.jpg"
            alt="Thumb 1"
            className={`w-20 h-20 rounded-lg ${mainImage === 'image-product-1.jpg' ? 'border-2 border-orange-500' : ''}`}
            onClick={() => changeImage('image-product-1.jpg')}
          />
          <img
            src="image-product-2-thumbnail.jpg"
            alt="Thumb 2"
            className={`w-20 h-20 rounded-lg ${mainImage === 'image-product-2.jpg' ? 'border-2 border-orange-500' : ''}`}
            onClick={() => changeImage('image-product-2.jpg')}
          />
          <img
            src="image-product-3-thumbnail.jpg"
            alt="Thumb 3"
            className={`w-20 h-20 rounded-lg ${mainImage === 'image-product-3.jpg' ? 'border-2 border-orange-500' : ''}`}
            onClick={() => changeImage('image-product-3.jpg')}
          />
          <img
            src="image-product-4-thumbnail.jpg"
            alt="Thumb 4"
            className={`w-20 h-20 rounded-lg ${mainImage === 'image-product-4.jpg' ? 'border-2 border-orange-500' : ''}`}
            onClick={() => changeImage('image-product-4.jpg')}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center ml-4">
        <h2 className="text-gray-600 uppercase tracking-wide">Sneaker Company</h2>
        <div className="max-w-sm">
          <h1 className="text-3xl font-bold mt-2">Fall Limited Edition Sneakers</h1>
          <p className="text-gray-600 mt-4">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-3xl font-bold">$125.00</span>
          <span className="ml-4 text-white bg-black font-semibold px-2 py-1 rounded-md">50%</span>
        </div>
        <span className="text-gray-500 line-through">$250.00</span>
        <div className="flex items-center mt-6">
          <div className="flex items-center bg-gray-50 rounded-lg px-0 py-0 mr-1">
            <div
              onClick={decreaseQuantity}
              className="flex items-center justify-center w-12 h-12 mr-5 cursor-pointer hover:bg-gray-100 rounded-lg"
            >
              <img src="icon-minus.svg" alt="minus" className="w-auto h-auto" />
            </div>
            <span className="mx-2">{quantity}</span>
            <div
              onClick={increaseQuantity}
              className="flex items-center justify-center ml-5 w-12 h-12 cursor-pointer hover:bg-gray-100 rounded-lg"
            >
              <img src="icon-plus.svg" alt="plus" className="w-auto h-auto" />
            </div>
          </div>
          <button className="bg-orange-300 hover:bg-orange-400 text-black px-6 py-3 w-[250px] rounded-lg flex items-center justify-center space-x-2">
            <span>Add to cart</span>
          </button>
        </div>
      </div>
      {displayGallery && (
        <GalleriaModal
          images={images}
          responsiveOptions={responsiveOptions}
          itemTemplate={itemTemplate}
          thumbnailTemplate={thumbnailTemplate}
          onClose={handleCloseGallery}
        />
      )}
    </div>
  );
};

export default ProductDetail;
