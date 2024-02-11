const useNavbar = () => {
  const slideNav = () => {
    var x: any = document.getElementById('navbar');
    if (window.scrollY >= 100) {
      if (x.classList === 'active') {
        x.classList.remove('active');
      } else {
        x.classList.add('active');
      }
    } else {
      x.classList.remove('active');
    }
  };
  typeof window !== 'undefined' && window.addEventListener('scroll', slideNav);

  return {};
};

export default useNavbar;
