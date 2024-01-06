import { useState, useEffect } from 'react';
import { FaAngleUp } from "react-icons/fa6";
import { Link } from 'react-scroll';

const BackToTop = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showScroll = scroll >= 660;
  const scrollUpClass = showScroll ? 'scale-100' : 'scale-0'; 

  return (
    <Link
      to="nav"
      smooth={true}
      offset={-170}
      duration={1100}
      id="scroll-up"
      className={`fixed bottom-4 right-4 w-14 h-14 p-4 rounded-full bg-[#69825F] text-white ${scrollUpClass} transform transition-transform duration-300 hover:scale-110 hover:cursor-pointer`}
    >
      <FaAngleUp className="w-6 h-6 mx-auto" />
    </Link>
  );
};

export default BackToTop;
