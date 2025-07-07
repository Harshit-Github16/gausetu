'use client';
import React from 'react';
import Button from '../ui/Button';
import EditText from '../ui/EditText';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-white to-[#fff2ed] pt-[40px] sm:pt-[56px] lg:pt-[72px] pb-[40px] sm:pt-[56px] lg:pb-[72px] mt-[80px] sm:mt-[120px] lg:mt-[160px]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-[120px]">
        {/* Newsletter Section */}
        <div className="bg-white rounded-[10px] p-4 sm:p-6 lg:p-[32px] mb-6 sm:mb-8 lg:mb-[38px]">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-[48px] ml-0 lg:ml-[26px]">
            <div className="text-center lg:text-left lg:mb-[10px]">
              <p className="text-base sm:text-lg lg:text-[24px] font-poppins leading-[24px] sm:leading-[28px] lg:leading-[36px] text-global-1">
                <span className="font-medium">Subscribe to Our Newsletter for </span>
                <span className="font-bold text-global-8">Exclusive Updates</span>
                <span className="font-medium">, Events and Insights!</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 w-full lg:w-[44%] relative">
              <EditText
                placeholder="Your Email Address Here"
                className="flex-1 bg-global-2 text-global-10 text-base sm:text-lg lg:text-[24px] font-poppins font-medium leading-[24px] sm:leading-[28px] lg:leading-[37px] px-4 py-2 sm:px-5 sm:py-3 lg:px-[20px] lg:py-[12px] rounded-[10px] border-0"
              />
              <Button
                variant="primary"
                className="bg-[#ff4f00] text-white font-poppins font-semibold text-sm sm:text-base lg:text-[22px] leading-[20px] sm:leading-[24px] lg:leading-[34px] px-4 py-2 sm:px-6 sm:py-3 lg:px-[34px] lg:py-[12px] rounded-[10px] sm:absolute sm:right-0 sm:top-0 sm:h-full hover:bg-[#e63d00] transition-all duration-200"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 mb-6 sm:mb-8 lg:mb-[38px]">
          {/* Brand Section */}
          <div className="w-full lg:w-[26%] text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-poppins font-bold leading-[36px] sm:leading-[44px] lg:leading-[73px] text-global-8 mb-2 lg:mb-0">
              Gausetu
            </h2>
            <p className="text-lg sm:text-xl lg:text-[24px] font-poppins font-medium leading-[26px] sm:leading-[30px] lg:leading-[37px] text-global-1 mb-4 lg:mb-[22px]">
              By Shreenath Gaushala
            </p>
            <p className="text-base sm:text-lg lg:text-[22px] font-poppins font-normal leading-[24px] sm:leading-[28px] lg:leading-[33px] text-footer-1">
              GauSetu is a heartfelt initiative to protect, nurture, and connect lives through the seva of our beloved cows — an offering of love, legacy, and dharma.
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-[66%] flex flex-col sm:flex-row justify-between gap-8 sm:gap-4">
            <div className="flex flex-col sm:flex-row justify-between w-full lg:w-[74%] gap-8 sm:gap-4">
              {/* Overview */}
              <div className="w-full sm:w-[46%]">
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-poppins font-bold leading-[28px] sm:leading-[36px] lg:leading-[42px] text-global-1 mb-4 lg:mb-[20px]">
                  Overview
                </h3>
                <ul className="space-y-2 lg:space-y-[10px]">
                  <li>
                    <a href="#" className="text-base sm:text-lg lg:text-[20px] font-poppins font-medium leading-[24px] sm:leading-[26px] lg:leading-[30px] text-footer-1 hover:text-global-8 transition-colors duration-200">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base sm:text-lg lg:text-[20px] font-poppins font-medium leading-[24px] sm:leading-[26px] lg:leading-[30px] text-footer-1 hover:text-global-8 transition-colors duration-200">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base sm:text-lg lg:text-[20px] font-poppins font-medium leading-[24px] sm:leading-[26px] lg:leading-[30px] text-footer-1 hover:text-global-8 transition-colors duration-200">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base sm:text-lg lg:text-[20px] font-poppins font-medium leading-[24px] sm:leading-[26px] lg:leading-[30px] text-footer-1 hover:text-global-8 transition-colors duration-200">
                      Events
                    </a>
                  </li>
                </ul>
              </div>

              {/* Get Involved */}
              <div className="w-full sm:w-[52%]">
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-poppins font-bold leading-[28px] sm:leading-[36px] lg:leading-[42px] text-global-1 mb-4 lg:mb-[20px]">
                  Get Involved
                </h3>
                <ul className="space-y-2 lg:space-y-[10px]">
                  <li>
                    <a href="#" className="text-base sm:text-lg lg:text-[20px] font-poppins font-medium leading-[24px] sm:leading-[26px] lg:leading-[30px] text-footer-1 hover:text-global-8 transition-colors duration-200">
                      Donate
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base sm:text-lg lg:text-[20px] font-poppins font-medium leading-[24px] sm:leading-[26px] lg:leading-[30px] text-footer-1 hover:text-global-8 transition-colors duration-200">
                      Volunteer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base sm:text-lg lg:text-[20px] font-poppins font-medium leading-[24px] sm:leading-[26px] lg:leading-[30px] text-footer-1 hover:text-global-8 transition-colors duration-200">
                      Plan a Visit
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="flex flex-col sm:flex-row justify-between w-full lg:w-[20%] gap-8 sm:gap-4">
              {/* Contact */}
              <div className="w-full">
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-poppins font-bold leading-[28px] sm:leading-[36px] lg:leading-[42px] text-global-1 mb-4 lg:mb-[22px]">
                  Contact Us
                </h3>
                <div className="space-y-2 lg:space-y-[8px]">
                  <a href="mailto:info@gausetu.in" className="block text-base sm:text-lg lg:text-[20px] font-poppins font-medium leading-[24px] sm:leading-[26px] lg:leading-[30px] text-footer-1 hover:text-global-8 transition-colors duration-200">
                    info@gausetu.in
                  </a>
                  <p className="text-base sm:text-lg lg:text-[20px] font-poppins font-medium leading-[24px] sm:leading-[26px] lg:leading-[30px] text-footer-1">
                    +91 9521505416
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="w-full lg:w-auto">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-poppins font-bold leading-[28px] sm:leading-[36px] lg:leading-[42px] text-global-1 mb-4 lg:mb-[16px]">
                Social
              </h3>
              <div className="space-y-2 lg:space-y-0 lg:space-y-[16px]">
                <a href="#" className="block text-base sm:text-lg lg:text-[20px] font-poppins font-medium leading-[24px] sm:leading-[26px] lg:leading-[30px] text-footer-1 hover:text-global-8 transition-colors duration-200">
                  Facebook
                </a>
                <a href="#" className="block text-base sm:text-lg lg:text-[20px] font-poppins font-medium leading-[24px] sm:leading-[26px] lg:leading-[30px] text-footer-1 hover:text-global-8 transition-colors duration-200">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-br from-[#ff4f00] to-[#ff844e] rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] p-8 sm:p-12 lg:p-[116px] mb-4 sm:mb-5 lg:mb-[20px] mt-[50px] sm:mt-[75px] lg:mt-[100px]">
          <div className="text-center px-4 sm:px-8 lg:px-[118px]">
            <h2 className="text-2xl sm:text-4xl lg:text-[80px] font-poppins leading-[32px] sm:leading-[48px] lg:leading-[90px] text-white mb-2 lg:mb-[12px]">
              <span className="font-semibold">Let your journey with </span>
              <span className="font-extrabold">Gau Mata</span>
              <span className="font-semibold"> </span>
              <span className="text-3xl sm:text-5xl lg:text-[120px] font-paul-jackson font-normal leading-[40px] sm:leading-[60px] lg:leading-[120px]">Begin here.</span>
            </h2>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
          <p className="text-sm sm:text-base lg:text-[20px] font-poppins font-normal leading-[20px] sm:leading-[24px] lg:leading-[30px] text-global-1 text-center lg:text-left">
            <span>© Copyright 2025 </span>
            <span className="font-bold">Gausetu</span>
            <span> - Built with Seva, Designed & Developed with Soul by </span>
            <span className="font-permanent-marker">Giriraj Vyas</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px]">
            <a href="#" className="text-sm sm:text-base lg:text-[20px] font-poppins font-medium leading-[20px] sm:leading-[24px] lg:leading-[30px] text-global-1 hover:text-global-8 transition-colors duration-200">
              Terms Of Services
            </a>
            <div className="hidden sm:block h-[20px] w-[2px] bg-global-1"></div>
            <a href="#" className="text-sm sm:text-base lg:text-[20px] font-poppins font-medium leading-[20px] sm:leading-[24px] lg:leading-[30px] text-global-1 hover:text-global-8 transition-colors duration-200">
              Privacy Policy
            </a>
            <div className="hidden sm:block h-[20px] w-[2px] bg-global-1"></div>
            <a href="#" className="text-sm sm:text-base lg:text-[20px] font-poppins font-medium leading-[20px] sm:leading-[24px] lg:leading-[30px] text-global-1 hover:text-global-8 transition-colors duration-200">
              Site Map
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;