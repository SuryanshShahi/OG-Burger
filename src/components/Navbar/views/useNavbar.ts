import { useState } from 'react';

const useNavbar = () => {
  const [isActive, setIsActive] = useState(false);
  const slideNav = () => {
    var x: any = document.getElementById('navbar');
    if (window.scrollY >= 100) {
      if (x.classList === 'active') {
        x.classList.remove('active');
        setIsActive(false);
      } else {
        x.classList.add('active');
        setIsActive(true);
      }
    } else {
      x.classList.remove('active');
      setIsActive(false);
    }
  };
  typeof window !== 'undefined' && window.addEventListener('scroll', slideNav);

  return { isActive };
};

export default useNavbar;
