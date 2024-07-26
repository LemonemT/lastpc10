import React, { useRef } from 'react';
import useActiveLink from '../hooks/useActiveLink'; 
import useCart from '../hooks/useCart'; 
import useOutsideClick from '../hooks/useOutsideClick'; 

const Header = () => {
  const { activeLink, handleClick } = useActiveLink();
  const { isCartOpen, toggleCart, closeCart } = useCart();
  const cartRef = useRef(null);
  const cartButtonRef = useRef(null);

    useOutsideClick(cartRef, closeCart, [cartButtonRef]);

  return (
    <header className="relative bg-white">
      <div className="flex justify-between mt-4 items-center py-4 px-20 mx-20 bg-none relative">
        <div className="flex items-center space-x-8">
          <div className="cursor-pointer">
            <img src="logo.svg" alt="logo" />
          </div>
          <nav className="flex space-x-8 relative">
            <a
              href="#"
              className={`text-gray-600 hover:text-gray-900 ml-5 ${activeLink === 'collections' ? 'text-orange-500' : ''}`}
              onClick={() => handleClick('collections')}
            >
              Collections
            </a>
            <a
              href="#"
              className={`text-gray-600 hover:text-gray-900 ${activeLink === 'men' ? 'text-orange-500' : ''}`}
              onClick={() => handleClick('men')}
            >
              Men
            </a>
            <a
              href="#"
              className={`text-gray-600 hover:text-gray-900 ${activeLink === 'women' ? 'text-orange-500' : ''}`}
              onClick={() => handleClick('women')}
            >
              Women
            </a>
            <a
              href="#"
              className={`text-gray-600 hover:text-gray-900 ${activeLink === 'about' ? 'text-orange-500' : ''}`}
              onClick={() => handleClick('about')}
            >
              About
            </a>
            <a
              href="#"
              className={`text-gray-600 hover:text-gray-900 ${activeLink === 'contact' ? 'text-orange-500' : ''}`}
              onClick={() => handleClick('contact')}
            >
              Contact
            </a>
            <div
              className={`absolute mt-[40px] h-[1px] bg-orange-500 transition-all duration-200 ${activeLink === 'collections' ? 'w-[calc(100%/5)] left-[-14px]' : 
                activeLink === 'men' ? 'w-[calc(100%/8)] left-[calc(100%/4.6)]' :
                activeLink === 'women' ? 'w-[calc(100%/6)] left-[calc(100%/5*1.9)]' :
                activeLink === 'about' ? 'w-[calc(100%/7)] left-[calc(100%/5*2.95)]' :
                activeLink === 'contact' ? 'w-[calc(100%/6)] left-[calc(100%/5*3.89)]' : 'w-0'}`}
            ></div>
          </nav>
        </div>
        <div className="flex items-center space-x-4 relative">
          <button ref={cartButtonRef} className="p-2" onClick={toggleCart}>
            <img src="icon-cart.svg" alt="Cart" className="w-4 h-4" />
          </button>
          {isCartOpen && (
            <div ref={cartRef} className="absolute top-full right-[-80px] mt-2 w-[320px] bg-white shadow-lg rounded-lg p-6 z-10">
              <h3 className="text-xl font-semibold pb-5 mb-4">Cart</h3>
              <p className="h-40 flex font-semibold text-gray-500 items-center justify-center">Your cart is empty.</p>
            </div>
          )}
          <button className="relative">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-transparent hover:border-orange-500">
              <img src="image-avatar.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </button>
        </div>
      </div>
      <div className="absolute py-2 left-40 right-40 border-b border-gray-200 bg-white"></div>
    </header>
  );
};

export default Header;
