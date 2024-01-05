import React from 'react'
import Navbar from './Navbar';
import HeroSection from './HeroSection';

function Header() {
  return (
    <>
      <div className="min-h-screen min-[1200px]:min-h-[810px] bg-headerbg bg-cover bg-no-repeat bg-center flex flex-col">
        <Navbar />
        <HeroSection/>
      </div>
    </>
  );
}

export default Header