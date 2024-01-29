import { useEffect, useState } from 'react';

export const useNavbar = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const changeNavbarStyle = () => {
    if (window.scrollY > 70) {
      setIsNavbarActive(true);
    } else {
      setIsNavbarActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarStyle);
    return () => window.removeEventListener('scroll', changeNavbarStyle);
  });

  return { isNavbarActive };
};
