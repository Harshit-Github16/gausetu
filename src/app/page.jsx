'use client';
import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import Slider from '../components/ui/Slider';
import PagerIndicator from '../components/ui/PagerIndicator';
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full">
        <div 
          className="w-full bg-gradient-to-b from-[#00000072] via-[#0000004c] to-[#00000072] pt-[30px] pb-[30px]"
          style={{
            backgroundImage: "url('/images/img_martijn_vonk_at_600x650.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <Header />
          {/* Hero Content */}
          <div className="flex flex-col justify-start items-center w-full gap-[252px] mt-[150px] mb-[306px]">
            <div className="flex flex-col justify-start items-center w-full max-w-[76%] mx-auto px-4 sm:px-6 lg:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-poppins font-bold leading-[45px] sm:leading-[60px] lg:leading-[90px] text-center text-white">
                <span>Care, Devotion & </span>
                <span className="text-[#ff4f00]">Dharma</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-poppins font-medium leading-[28px] sm:leading-[36px] lg:leading-[48px] text-center text-white mt-[20px] w-full">
                Deep in the heart of Jodhpur, lives a sanctuary where cows are family, not just animals. Welcome to GauSetu – a humble path of service built with devotion and nurtured by community.
              </p>
              <Button
                variant="outline"
                className="border border-white text-white font-poppins font-medium text-lg sm:text-xl lg:text-[24px] leading-[28px] sm:leading-[32px] lg:leading-[36px] px-6 py-4 sm:px-8 sm:py-5 lg:px-[34px] lg:py-[20px] rounded-[20px] sm:rounded-[30px] lg:rounded-[38px] hover:bg-white hover:text-black transition-all duration-200 mt-[50px]"
              >
                Connect With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Rooted in Faith Section */}
      <div className="w-full px-4 sm:px-6 lg:px-[120px] mt-[150px]">
        <div className="flex flex-col justify-start items-center gap-[88px] w-full">
          <div className="flex flex-col justify-start items-center gap-[30px] w-full max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-[110px]">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-poppins font-semibold leading-[36px] sm:leading-[48px] lg:leading-[60px] text-center text-black">
              Rooted in Faith. Grown with Love.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-poppins font-normal leading-[28px] sm:leading-[36px] lg:leading-[48px] text-center text-[#696969] w-full">
              GauSetu is an initiative by the Vyas Family under Shree Nath Gaushala Samiti. What began as a small effort to serve abandoned and sacred cows has now grown into a home for 100+ gaumata, cared for daily through seva, donations, and blessings.
              <br /><br />
              Every cow has a name. Every act has meaning. And every person who visits becomes a part of our growing GauParivar.
            </p>
          </div>
          {/* Video Section */}
          <div className="w-full flex justify-center items-center">
            <div 
              className="relative w-full max-w-[1680px] h-[300px] sm:h-[400px] lg:h-[650px] rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('/images/img_martijn_vonk_at_600x650.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 flex justify-center items-center">
                <button className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[200px] lg:h-[200px] bg-white bg-opacity-80 rounded-full flex justify-center items-center hover:bg-opacity-100 transition-all duration-200">
                  <img 
                    src="/images/img_material_symbol.svg" 
                    alt="Play button" 
                    className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[100px] lg:h-[100px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Section */}
      <div className="w-full px-4 sm:px-6 lg:px-[120px] mt-[100px]">
        <div className="w-full bg-[#fbfbfb] rounded-lg p-6 sm:p-8 lg:p-[86px]">
          <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[88%] mx-auto gap-8 lg:gap-0">
            {/* Stat 1 */}
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center w-full lg:w-[34%] gap-4 lg:gap-0">
              <div className="flex flex-col justify-start items-start w-full lg:w-[90%]">
                <h3 className="text-3xl sm:text-4xl lg:text-[48px] font-poppins font-bold leading-[45px] sm:leading-[60px] lg:leading-[73px] text-[#ff4f00]">
                  125+
                </h3>
                <div className="flex flex-col justify-start items-start w-full mt-4 lg:mt-[82px]">
                  <h4 className="text-xl sm:text-2xl lg:text-[32px] font-poppins font-semibold leading-[28px] sm:leading-[36px] lg:leading-[40px] text-[#1e1e1e]">
                    Cows in Our Care
                  </h4>
                  <p className="text-base sm:text-lg lg:text-[20px] font-poppins font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-[#52525b] mt-[10px] w-[76%]">
                    Under daily love, care & nourishment in Shree Nath Gaushala.
                  </p>
                  <p className="text-base sm:text-lg lg:text-[20px] font-poppins font-medium leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#ff4f00] mt-[28px]">
                    <span>Donate Cow </span>
                    <span className="font-bold">→</span>
                  </p>
                </div>
              </div>
              <div className="hidden lg:block h-[210px] w-[1px] bg-[#e4e4e7]"></div>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:flex-1 px-0 lg:px-[48px] gap-4 lg:gap-0">
              <div className="flex flex-col justify-start items-start w-full lg:w-[90%]">
                <h3 className="text-3xl sm:text-4xl lg:text-[48px] font-poppins font-bold leading-[45px] sm:leading-[60px] lg:leading-[73px] text-[#ff4f00]">
                  ₹8.5+ Lakhs
                </h3>
                <h4 className="text-xl sm:text-2xl lg:text-[32px] font-poppins font-semibold leading-[28px] sm:leading-[36px] lg:leading-[40px] text-[#1e1e1e] mt-4 lg:mt-[82px]">
                  Total Donations
                </h4>
                <p className="text-base sm:text-lg lg:text-[20px] font-poppins font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-[#52525b] mt-[10px] w-[76%]">
                  Transparent and heartfelt contributions from kind souls like you.
                </p>
                <p className="text-base sm:text-lg lg:text-[20px] font-poppins font-medium leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#ff4f00] mt-[28px]">
                  <span>Donate More </span>
                  <span className="font-bold">→</span>
                </p>
              </div>
              <div className="hidden lg:block h-[210px] w-[1px] bg-[#e4e4e7]"></div>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col justify-start items-start w-full lg:w-[24%]">
              <h3 className="text-3xl sm:text-4xl lg:text-[48px] font-poppins font-bold leading-[45px] sm:leading-[60px] lg:leading-[73px] text-[#ff4f00]">
                50+
              </h3>
              <h4 className="text-xl sm:text-2xl lg:text-[32px] font-poppins font-semibold leading-[28px] sm:leading-[36px] lg:leading-[40px] text-[#1e1e1e] mt-4 lg:mt-[82px]">
                Volunteer Sevas
              </h4>
              <p className="text-base sm:text-lg lg:text-[20px] font-poppins font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-[#52525b] mt-[10px] w-full">
                Meaningful actions taken by volunteers to serve Gau Mata.
              </p>
              <p className="text-base sm:text-lg lg:text-[20px] font-poppins font-medium leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#ff4f00] mt-[54px]">
                <span>Become a Volunteer </span>
                <span className="font-bold">→</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Why We Exist Section */}
      <div className="w-full mt-[150px]">
        <div className="flex flex-col justify-start items-center w-full">
          <div className="flex flex-col justify-start items-center w-full px-4 sm:px-6 lg:px-[120px]">
            <div className="flex flex-col justify-start items-center gap-[50px] w-full">
              <div className="flex flex-col justify-start items-center gap-[30px] w-full max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-[110px]">
                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-poppins font-semibold leading-[36px] sm:leading-[48px] lg:leading-[60px] text-center text-black">
                  Why We Exist
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-poppins font-normal leading-[28px] sm:leading-[36px] lg:leading-[48px] text-center text-[#696969] w-full">
                  In times where convenience trumps care, GauSetu stands as a reminder of our roots — of dharma, nature, and responsibility. We are committed to:
                </p>
              </div>
              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[26px] w-full">
                {/* Card 1 */}
                <div className="bg-white border border-[#696969] rounded-[10px] p-4 sm:p-5 lg:p-[24px] flex flex-col justify-start items-start">
                  <img 
                    src="/images/img_healthicons_ani.svg" 
                    alt="Protection icon" 
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] mb-4 sm:mb-5 lg:mb-[26px]"
                  />
                  <h3 className="text-base sm:text-lg lg:text-[20px] font-poppins font-semibold leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#161616] mb-2 lg:mb-[6px]">
                    To Protect and Nurture Gau Mata
                  </h3>
                  <p className="text-sm sm:text-base lg:text-[20px] font-poppins font-normal leading-[20px] sm:leading-[22px] lg:leading-[26px] text-[#52525b]">
                    We provide a safe, loving home to abandoned and aging cows.
                  </p>
                </div>
                {/* Card 2 */}
                <div className="bg-white border border-[#696969] rounded-[10px] p-4 sm:p-5 lg:p-[24px] flex flex-col justify-start items-start">
                  <img 
                    src="/images/img_ix_heart.svg" 
                    alt="Compassion icon" 
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] mb-4 sm:mb-5 lg:mb-[28px]"
                  />
                  <h3 className="text-base sm:text-lg lg:text-[20px] font-poppins font-semibold leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#161616] mb-2 lg:mb-[4px]">
                    To Serve with Compassion
                  </h3>
                  <p className="text-sm sm:text-base lg:text-[20px] font-poppins font-normal leading-[20px] sm:leading-[22px] lg:leading-[26px] text-[#52525b]">
                    Every act of care is seva — feeding, healing, and loving cows.
                  </p>
                </div>
                {/* Card 3 */}
                <div className="bg-white border border-[#696969] rounded-[10px] p-4 sm:p-5 lg:p-[26px] flex flex-col justify-start items-start">
                  <img 
                    src="/images/img_emojione_monotone_om.svg" 
                    alt="Dharma icon" 
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] mb-4 sm:mb-5 lg:mb-[26px]"
                  />
                  <h3 className="text-base sm:text-lg lg:text-[20px] font-poppins font-semibold leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#161616] mb-2 lg:mb-[4px]">
                    To Uphold Dharmic Values
                  </h3>
                  <p className="text-sm sm:text-base lg:text-[20px] font-poppins font-normal leading-[20px] sm:leading-[22px] lg:leading-[26px] text-[#52525b]">
                    Rooted in Sanatan Dharma, we believe cows deserve respect.
                  </p>
                </div>
                {/* Card 4 */}
                <div className="bg-white border border-[#696969] rounded-[10px] p-4 sm:p-5 lg:p-[26px] flex flex-col justify-start items-start">
                  <img 
                    src="/images/img_bx_book.svg" 
                    alt="Education icon" 
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] mb-4 sm:mb-5 lg:mb-[26px]"
                  />
                  <h3 className="text-base sm:text-lg lg:text-[20px] font-poppins font-semibold leading-[22px] sm:leading-[26px] lg:leading-[30px] text-[#161616] mb-2 lg:mb-[4px]">
                    To Educate and Inspire
                  </h3>
                  <p className="text-sm sm:text-base lg:text-[20px] font-poppins font-normal leading-[20px] sm:leading-[22px] lg:leading-[26px] text-[#52525b]">
                    Educating the youth about the importance of GauSeva
                  </p>
                </div>
              </div>
            </div>
            {/* Photo Gallery */}
            <div className="w-full mt-[150px]">
              {/* First Row */}
              <div className="flex flex-row gap-4 sm:gap-6 lg:gap-[50px] justify-center items-center w-full mb-4 sm:mb-6 lg:mb-[50px] overflow-x-auto">
                <img 
                  src="/images/img_image.png" 
                  alt="Gallery image 1" 
                  className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[334px] lg:h-[350px] object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/img_martijn_vonk_at.png" 
                  alt="Gallery image 2" 
                  className="w-[300px] h-[150px] sm:w-[400px] sm:h-[200px] lg:w-[750px] lg:h-[350px] object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/img_image_350x350.png" 
                  alt="Gallery image 3" 
                  className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[350px] lg:h-[350px] object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/img_image_350x334.png" 
                  alt="Gallery image 4" 
                  className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[334px] lg:h-[350px] object-cover rounded-lg flex-shrink-0"
                />
              </div>
              {/* Second Row */}
              <div className="flex flex-row gap-4 sm:gap-6 lg:gap-[50px] justify-center items-center w-full overflow-x-auto">
                <img 
                  src="/images/img_image_350x134.png" 
                  alt="Gallery image 5" 
                  className="w-[60px] h-[150px] sm:w-[80px] sm:h-[200px] lg:w-[134px] lg:h-[350px] object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/img_image_1.png" 
                  alt="Gallery image 6" 
                  className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[350px] lg:h-[350px] object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/img_anees_ur_rehman.png" 
                  alt="Gallery image 7" 
                  className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[350px] lg:h-[350px] object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/img_gautam_n_rejb_hv3i7o_unsplash.png" 
                  alt="Gallery image 8" 
                  className="w-[300px] h-[150px] sm:w-[400px] sm:h-[200px] lg:w-[750px] lg:h-[350px] object-cover rounded-lg flex-shrink-0"
                />
                <img 
                  src="/images/img_image_2.png" 
                  alt="Gallery image 9" 
                  className="w-[60px] h-[150px] sm:w-[80px] sm:h-[200px] lg:w-[134px] lg:h-[350px] object-cover rounded-lg flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Where Devotion Meets Legacy Section */}
      <div className="w-full px-4 sm:px-6 lg:px-[120px] mt-[150px]">
        <div className="flex flex-col justify-start items-center gap-[50px] w-full">
          <div className="flex flex-col justify-start items-center gap-[30px] w-full max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-[110px]">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-poppins font-semibold leading-[36px] sm:leading-[48px] lg:leading-[60px] text-center text-black">
              Where Devotion Meets Legacy
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-poppins font-normal leading-[28px] sm:leading-[36px] lg:leading-[48px] text-center text-[#696969] w-full">
              Nestled in the serene surroundings of Ummed Sagar, near Kaylana Lake in Jodhpur, GauSetu stands on a land rich with history, devotion, and divine presence. This sacred place once belonged to the historic Chopasni Jagir, under the reign of Maharaja Ummed Singh, who built the dam in 1933 to nourish the land and its people.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center gap-[50px] w-full">
            {/* Quote Section */}
            <div className="w-full flex justify-center items-start">
              <div 
                className="w-full max-w-[1680px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg relative"
                style={{
                  backgroundImage: "url('/images/img_image_500x1680.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-start items-start p-6 sm:p-8 lg:p-[98px]">
                  <div className="flex flex-col justify-start items-start gap-[22px] w-full max-w-[92%] mb-[68px]">
                    <img 
                      src="/images/img__white_a700.svg" 
                      alt="Quote icon" 
                      className="w-[30px] h-[25px] sm:w-[40px] sm:h-[35px] lg:w-[54px] lg:h-[46px] ml-[68px]"
                    />
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-poppins font-semibold italic leading-[28px] sm:leading-[36px] lg:leading-[48px] text-center text-white ml-[8px] w-full">
                      In those times, not only did the waters serve human needs, but even arrangements were made to grow "Leela Chara" — divine fodder — for cows on the pal (banks) near ancient temples.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-poppins leading-[28px] sm:leading-[36px] lg:leading-[48px] text-center w-full max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-[110px]">
              <span className="font-normal text-[#696969]">Nearby still lie echoes of devotion — from ancient Shiva caves on Trikoni Hill, to the temple of Shreeji's Baithak, and the quiet Gaushala that once stood near the pal. It's on this very soil of cow-protection, divine migration, and temple legacy, that GauSetu carries the sacred work forward.
This region was once a resting place for Lord Shrinathji during his divine journey from Vrindavan to Nathdwara — when Aurangzeb sought to destroy Hindu temples, and the protectors of dharma carried him through this sacred terrain.
</span>
              <span className="font-semibold text-black">We are not just a Gaushala. We are a continuation of a divine journey — one that once housed God, grew sacred fodder, and now shelters 100+ sacred lives with love and grace.</span>
            </p>
          </div>
        </div>
      </div>
      {/* Testimonial Section */}
      <div className="w-full mt-[100px]">
        <div className="w-full bg-[#f8f8f8] p-4 sm:p-6 lg:p-[30px]">
          <div className="flex flex-col justify-start items-center w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-poppins font-semibold leading-[36px] sm:leading-[48px] lg:leading-[60px] text-center text-black mt-[66px] mb-[10px]">
              From the Heart of GauSetu
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-poppins font-normal leading-[28px] sm:leading-[36px] lg:leading-[48px] text-center text-[#696969] mb-[50px]">
              Every blessing brings us closer to our goal — to serve with heart, to protect with purpose.
            </p>
            {/* Slider */}
            <div className="w-full max-w-[86%] mx-auto">
              <Slider
                autoPlay
                autoPlayInterval={5000}
                showDots={false}
                showArrows={false}
                className="w-full"
              >
                <div className="w-full bg-white rounded-lg p-6 sm:p-8 lg:p-[112px]">
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 w-full max-w-[86%] mx-auto mb-[16px]">
                    <div className="flex flex-col justify-start items-start w-full lg:flex-1">
                      <img 
                        src="/images/img__blue_gray_100.svg" 
                        alt="Quote icon" 
                        className="w-[25px] h-[20px] sm:w-[30px] sm:h-[25px] lg:w-[42px] lg:h-[34px]"
                      />
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-poppins font-medium leading-[26px] sm:leading-[32px] lg:leading-[38px] text-[#080814] mt-[46px] w-full lg:w-[84%]">
                        "I never saw them as animals. I saw them as divine souls — silent, sacred, and sent to us with trust. This Gaushala was never just about shelter; it was our dharma, our offering back to the land and our ancestors"
                      </p>
                      <p className="text-base sm:text-lg lg:text-[21px] font-poppins font-normal leading-[24px] sm:leading-[28px] lg:leading-[34px] text-[#52525b] mt-[20px] w-full lg:w-[86%]">
                        His dream was to build a space where cows could live with dignity and love — where every drop of water, every blade of grass offered to them, would be an act of worship. If tomorrow, even one cow is safe because of GauSetu, then his life has served its purpose.
                      </p>
                    </div>
                    <div className="relative w-full lg:w-[46%] h-[300px] sm:h-[400px] lg:h-[484px]">
                      <img 
                        src="/images/img_image_484x598.png" 
                        alt="Late Sh. Shyam Sunder Vyas" 
                        className="w-full h-full object-cover rounded-[20px]"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent rounded-b-[20px] p-4 sm:p-6 lg:p-[34px]">
                        <div className="flex flex-col justify-start items-start">
                          <h3 className="text-sm sm:text-base lg:text-[18px] font-poppins font-semibold leading-[20px] sm:leading-[24px] lg:leading-[27px] text-white mt-[30px]">
                            Late Sh. Shyam Sunder Vyas
                          </h3>
                          <p className="text-xs sm:text-sm lg:text-[14px] font-poppins font-normal leading-[16px] sm:leading-[18px] lg:leading-[21px] text-[#a1a1aa]">
                            Head of Shree Nath Gaushala Samiti, The guiding light of Vyas Family
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
              {/* Pager Indicator */}
              <div className="flex justify-center mt-[30px]">
                <PagerIndicator
                  totalPages={3}
                  currentPage={currentSlide}
                  onPageChange={setCurrentSlide}
                  variant="dots"
                  size="md"
                  activeColor="bg-[#ff4f00]"
                  inactiveColor="bg-gray-300"
                  className="w-[6%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="w-full px-4 sm:px-6 lg:px-[120px] mt-[150px]">
        <div className="w-full bg-gradient-to-br from-[#ff4f00] to-[#ff844e] rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] p-6 sm:p-8 lg:p-[50px]">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0">
            <div className="flex flex-col justify-start items-start w-full lg:w-[56%]">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-poppins font-bold leading-[42px] sm:leading-[56px] lg:leading-[86px] text-white">
                Let Your Heart<br />Walk With Us
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-poppins leading-[26px] sm:leading-[32px] lg:leading-[40px] text-[#f8f8f8] mt-[20px] w-full lg:w-[90%]">
                <span className="font-normal">If you have reached this point, perhaps your heart already hears the quiet call of </span>
                <span className="font-bold">Gau Mata</span>
                <span className="font-normal">. Whether you wish to </span>
                <span className="font-bold">visit, volunteer, or simply offer a gesture of love — we are always here, waiting with open arms and grateful hearts.</span>
              </p>
              <div className="flex flex-col sm:flex-row justify-start items-center gap-4 lg:gap-[36px] w-full mt-[50px]">
                <Button
                  variant="primary"
                  className="bg-white text-black font-poppins font-semibold text-lg sm:text-xl lg:text-[24px] leading-[26px] sm:leading-[30px] lg:leading-[36px] px-6 py-4 sm:px-8 sm:py-5 lg:px-[34px] lg:py-[24px] rounded-[22px] sm:rounded-[32px] lg:rounded-[44px] hover:bg-gray-100 transition-all duration-200"
                >
                  Join Us @GauSetu
                </Button>
                <Button
                  variant="outline"
                  className="border-2 sm:border-3 border-white text-white font-poppins font-semibold text-lg sm:text-xl lg:text-[24px] leading-[26px] sm:leading-[30px] lg:leading-[36px] px-6 py-4 sm:px-8 sm:py-5 lg:px-[34px] lg:py-[24px] rounded-[22px] sm:rounded-[32px] lg:rounded-[44px] hover:bg-white hover:text-[#ff4f00] transition-all duration-200"
                >
                  Donate Now
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
              <img 
                src="/images/img_martijn_vonk_at_600x650.png" 
                alt="Cows at GauSetu" 
                className="w-full max-w-[400px] lg:max-w-[650px] h-[300px] sm:h-[400px] lg:h-[600px] object-cover rounded-[25px] sm:rounded-[35px] lg:rounded-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;