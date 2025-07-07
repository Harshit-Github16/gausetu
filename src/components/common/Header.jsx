'use client';
import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-6 lg:px-[120px] py-4 lg:py-[31px]">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-4 lg:gap-0">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <img 
            src="/images/img_header_logo.png" 
            alt="GauSetu Logo" 
            className="w-[120px] h-[37px] sm:w-[150px] sm:h-[46px] lg:w-[190px] lg:h-[74px]"
          />
        </div>

        {/* Hamburger Menu Icon (Mobile only) */}
        <button 
          className="block lg:hidden p-2" 
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {/* Navigation Menu */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-[70px] items-center justify-center lg:justify-end mb-4 lg:mb-[16px]">
            <button 
              role="menuitem"
              className="text-sm sm:text-base lg:text-[20px] font-poppins font-bold lg:font-bold leading-[22px] sm:leading-[26px] lg:leading-[30px] text-center text-global-8 hover:text-global-9 transition-colors duration-200"
            >
              Home
            </button>
            <button 
              role="menuitem"
              className="text-sm sm:text-base lg:text-[20px] font-poppins font-medium lg:font-medium leading-[22px] sm:leading-[26px] lg:leading-[30px] text-center text-global-9 hover:text-global-8 transition-colors duration-200"
            >
              About Us
            </button>
            <button 
              role="menuitem"
              className="text-sm sm:text-base lg:text-[20px] font-poppins font-medium lg:font-medium leading-[22px] sm:leading-[26px] lg:leading-[30px] text-center text-global-9 hover:text-global-8 transition-colors duration-200"
            >
              Events
            </button>
            <button 
              role="menuitem"
              className="text-sm sm:text-base lg:text-[20px] font-poppins font-medium lg:font-medium leading-[22px] sm:leading-[26px] lg:leading-[30px] text-center text-global-9 hover:text-global-8 transition-colors duration-200"
            >
              Support the Cause
            </button>
            <button 
              role="menuitem"
              className="text-sm sm:text-base lg:text-[20px] font-poppins font-medium lg:font-medium leading-[22px] sm:leading-[26px] lg:leading-[30px] text-center text-global-9 hover:text-global-8 transition-colors duration-200"
            >
              Connect With Us
            </button>
          </div>
        </nav>

        {/* Donate Button */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <Button
            variant="primary"
            size="lg"
            className="bg-[#ff4f00] text-white font-poppins font-bold text-sm sm:text-lg lg:text-[24px] leading-[20px] sm:leading-[28px] lg:leading-[37px] px-4 py-2 sm:px-6 sm:py-3 lg:px-[34px] lg:py-[14px] rounded-[20px] sm:rounded-[28px] lg:rounded-[34px] hover:bg-[#e63d00] transition-all duration-200"
          >
            Donate Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;