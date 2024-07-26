import { useState } from 'react';

const useActiveLink = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (linkName) => {
    setActiveLink(linkName);
  };

  return {
    activeLink,
    handleClick
  };
};

export default useActiveLink;
