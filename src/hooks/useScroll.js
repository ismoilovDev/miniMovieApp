import { useState, useEffect } from 'react';
import _ from 'lodash';

const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const isScrolled = scrollY > 5;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    const debouncedHandleScroll = _.debounce(handleScroll, 10);
    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  return scrolled;
};

export default useScroll;
