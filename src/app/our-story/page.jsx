'use client';
import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
const OurStoryPage = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-[url('/images/img_image_484x598.png')] bg-cover bg-center bg-no-repeat">
        <Header />
        {/* Hero Section */}
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-[120px] mt-8 sm:mt-12 lg:mt-[150px]">
          <div className="bg-gradient-to-b from-[#00000072] via-[#0000004c] to-[#00000072] rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] p-8 sm:p-12 lg:p-[278px] text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-poppins font-bold leading-[32px] sm:leading-[40px] md:leading-[60px] lg:leading-[90px] text-center text-white mb-4 sm:mb-6 lg:mb-[10px]">
              <span>Where the story of </span>
              <span className="text-[#ff4f00]">GauSetu begins…</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-[32px] font-poppins font-medium leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[48px] text-center text-white max-w-4xl mx-auto">
              GauSetu is more than a project — it is the living spirit of Shree Nath Gaushala, nurtured through decades of devotion, family tradition, and sacred responsibility. We did not start a gaushala — we just found the path our ancestors left for us.
            </p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-[120px] mt-8 sm:mt-12 lg:mt-[150px]">
        {/* Bridge Between Legacy Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-[30px]">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-poppins font-semibold leading-[28px] sm:leading-[36px] md:leading-[48px] lg:leading-[60px] text-center text-global-1 mb-4 sm:mb-6 lg:mb-[30px]">
            The Bridge Between Legacy and Dharma
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-[32px] font-poppins font-normal leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[48px] text-center text-global-6 max-w-full">
            In the year 1933, the noble Maharaja Umeed Singh Ji envisioned more than just a dam — he envisioned a sanctuary. He created Umed Sagar, nestled within the spiritual boundaries of Chopasni Jagir, where Pushtimarg (Vallabhacharya Sampradaya) rituals were observed, and divine respect for Gau Mata (mother cow) ran through every grain of soil.
            <br /><br />
            Among the caretakers chosen to nurture this land was Late Shri Shobha Chand Ji Vyas, entrusted with over 10 acres of fertile land, where fodder was grown and cows were protected with dignity and grace. But as time moved forward, memories faded. The land lay still. Only echoes of cowbells and temple chants remained near the ancient Thakurji temple, the bawris, and the sunset hill.
          </p>
        </div>
        {/* Quote Section */}
        <div className="bg-global-2 rounded-[20px] p-6 sm:p-8 lg:p-[50px] mb-8 sm:mb-12 lg:mb-[100px] relative">
          <img 
            src="/images/img_.svg" 
            alt="Quote" 
            className="w-[32px] h-[38px] sm:w-[40px] sm:h-[46px] lg:w-[54px] lg:h-[46px] mb-4 sm:mb-6 lg:mb-[50px]"
          />
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[40px] font-poppins italic leading-[28px] sm:leading-[36px] md:leading-[48px] lg:leading-[61px] text-center text-global-1 mt-4 sm:mt-6 lg:mt-[36px]">
            <span>This was not land. It was </span>
            <span className="text-[#ff4f00]">responsibility passed from one soul to the next.</span>
          </p>
        </div>
        {/* Story Content */}
        <div className="mb-8 sm:mb-12 lg:mb-[100px]">
          <div className="text-base sm:text-lg md:text-xl lg:text-[32px] font-poppins font-normal leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[48px] text-center text-global-6 space-y-6 lg:space-y-8">
            <p>
              During the global stillness of the COVID-19 era, the Vyas Family uncovered something extraordinary. What began as a quiet visit became a powerful realization — the sacred land their ancestors once served was still waiting.
            </p>
            <p>
              It was a moment of awakening. And for Late Shri Shyam Sunder Vyas Ji, it was not a coincidence. It was a divine nudge from destiny. With hearts full of faith, the family decided to revive this legacy. In 2020, Shree Nath Gaushala was born again — not as a project, but as a soulful rebirth of purpose.
            </p>
            <p className="font-bold text-global-1">
              The Gaushala Today — More Than Shelter, It is Family
            </p>
            <p>
              Though much of the original land remains submerged through natural means, the remaining ground today hosts over <span className="font-medium text-global-1">100+ lovingly cared-for cows</span>. Each has a story, a name, and a place in the heart of the family. With over <span className="font-medium text-global-1">50+ volunteers</span> joining in seva, the movement has grown — slowly, sincerely, and spiritually. In December 2024, the Gaushala witnessed an immeasurable loss — the passing of its visionary, Late Shri Shyam Sunder Vyas Ji. His absence was deeply felt, but his dream only grew stronger.
            </p>
            <p>
              The name <span className="font-medium text-global-1">GauSetu</span> reflects a simple yet profound idea: A bridge between cows and community, dharma and devotion, ancestors and the future. <span className="font-bold italic text-global-6">GauSetu is not a tribute. It is a continuation. A digital diya lit in the name of devotion.</span>
            </p>
          </div>
        </div>
      </div>
      {/* Image Gallery */}
      <div className="w-full mb-8 sm:mb-12 lg:mb-[150px]">
        {/* First Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-[50px] mb-4 sm:mb-6 lg:mb-[50px] px-4">
          <img 
            src="/images/img_image.png" 
            alt="Gaushala Image 1" 
            className="w-full sm:w-[18%] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
          />
          <img 
            src="/images/img_martijn_vonk_at.png" 
            alt="Gaushala Image 2" 
            className="w-full sm:w-[42%] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
          />
          <img 
            src="/images/img_image_350x350.png" 
            alt="Gaushala Image 3" 
            className="w-full sm:w-[350px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
          />
          <img 
            src="/images/img_image_350x334.png" 
            alt="Gaushala Image 4" 
            className="w-full sm:w-[18%] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
          />
        </div>
        {/* Second Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-[50px] px-4">
          <img 
            src="/images/img_image_350x134.png" 
            alt="Gaushala Image 5" 
            className="w-full sm:w-[8%] h-[100px] sm:h-[150px] lg:h-[350px] object-cover rounded-lg"
          />
          <img 
            src="/images/img_image_1.png" 
            alt="Gaushala Image 6" 
            className="w-full sm:w-[350px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
          />
          <img 
            src="/images/img_anees_ur_rehman.png" 
            alt="Gaushala Image 7" 
            className="w-full sm:w-[350px] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
          />
          <img 
            src="/images/img_gautam_n_rejb_hv3i7o_unsplash.png" 
            alt="Gaushala Image 8" 
            className="w-full sm:w-[44%] h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-lg"
          />
          <img 
            src="/images/img_image_2.png" 
            alt="Gaushala Image 9" 
            className="w-full sm:w-[8%] h-[100px] sm:h-[150px] lg:h-[350px] object-cover rounded-lg"
          />
        </div>
      </div>
      {/* Why Visit Us Section */}
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-[120px] mb-8 sm:mb-12 lg:mb-[150px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-poppins font-semibold leading-[28px] sm:leading-[36px] md:leading-[48px] lg:leading-[60px] text-center text-global-1 mb-8 sm:mb-12 lg:mb-[50px]">
          Why Visit Us?
        </h2>
        <div className="bg-global-3 rounded-[10px] p-6 sm:p-8 lg:p-[60px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-[98px]">
            {/* Item 1 */}
            <div className="w-full lg:w-[430px] flex flex-col lg:flex-row items-start gap-4 lg:gap-0">
              <div className="w-full">
                <h3 className="text-2xl sm:text-3xl lg:text-[48px] font-poppins font-bold leading-[32px] sm:leading-[40px] lg:leading-[73px] text-left text-[#ff4f00] mb-2 lg:mb-0">
                  01.
                </h3>
                <h4 className="text-lg sm:text-xl lg:text-[32px] font-poppins font-semibold leading-[24px] sm:leading-[28px] lg:leading-[40px] text-left text-global-4 mb-2 lg:mb-[10px] w-full lg:w-[72%]">
                  Experience Sacred Stillness
                </h4>
                <p className="text-sm sm:text-base lg:text-[20px] font-poppins font-normal leading-[20px] sm:leading-[24px] lg:leading-[26px] text-left text-global-5 mb-3 lg:mb-[14px] w-full lg:w-[76%]">
                  Step into a space where nature, cows, and tradition exist in harmony — a break from the noise, a return to simplicity.
                </p>
                <a href="#" className="text-sm sm:text-base lg:text-[20px] font-poppins leading-[20px] sm:leading-[24px] lg:leading-[30px] text-left text-[#ff4f00]">
                  <span className="font-medium">Donate Cow </span>
                  <span className="font-bold">→</span>
                </a>
              </div>
              <div className="hidden lg:block h-[210px] w-[1px] bg-global-1 ml-4"></div>
            </div>
            {/* Item 2 */}
            <div className="w-full lg:w-[430px] flex flex-col lg:flex-row items-start gap-4 lg:gap-0">
              <div className="w-full">
                <h3 className="text-2xl sm:text-3xl lg:text-[48px] font-poppins font-bold leading-[32px] sm:leading-[40px] lg:leading-[73px] text-left text-[#ff4f00] mb-2 lg:mb-0">
                  02.
                </h3>
                <h4 className="text-lg sm:text-xl lg:text-[32px] font-poppins font-semibold leading-[24px] sm:leading-[28px] lg:leading-[40px] text-left text-global-4 mb-2 lg:mb-[10px] w-full lg:w-[72%]">
                  Witness Living Legacy
                </h4>
                <p className="text-sm sm:text-base lg:text-[20px] font-poppins font-normal leading-[20px] sm:leading-[24px] lg:leading-[26px] text-left text-global-5 mb-3 lg:mb-[14px] w-full lg:w-[76%]">
                  Every corner of Shree Nath Gaushala reflects over 90 years of spiritual, cultural, and ancestral devotion.
                </p>
                <a href="#" className="text-sm sm:text-base lg:text-[20px] font-poppins leading-[20px] sm:leading-[24px] lg:leading-[30px] text-left text-[#ff4f00]">
                  <span className="font-medium">Donate More </span>
                  <span className="font-bold">→</span>
                </a>
              </div>
              <div className="hidden lg:block h-[210px] w-[1px] bg-global-1 ml-4"></div>
            </div>
            {/* Item 3 */}
            <div className="w-full lg:w-[24%]">
              <h3 className="text-2xl sm:text-3xl lg:text-[48px] font-poppins font-bold leading-[32px] sm:leading-[40px] lg:leading-[73px] text-left text-[#ff4f00] mb-2 lg:mb-0">
                03.
              </h3>
              <h4 className="text-lg sm:text-xl lg:text-[32px] font-poppins font-semibold leading-[24px] sm:leading-[28px] lg:leading-[40px] text-left text-global-4 mb-2 lg:mb-[10px] w-full lg:w-[94%]">
                Connect with a Purpose
              </h4>
              <p className="text-sm sm:text-base lg:text-[20px] font-poppins font-normal leading-[20px] sm:leading-[24px] lg:leading-[26px] text-left text-global-5 mb-3 lg:mb-[14px] w-full">
                Meet the cows, the caretakers, and the community behind it. Walk away not as a visitor — but as part of a larger family.
              </p>
              <a href="#" className="text-sm sm:text-base lg:text-[20px] font-poppins leading-[20px] sm:leading-[24px] lg:leading-[30px] text-left text-[#ff4f00]">
                <span className="font-medium">Become a Volunteer </span>
                <span className="font-bold">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Join Us Section */}
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-[120px] mb-8 sm:mb-12 lg:mb-[150px]">
        <div className="bg-gradient-to-br from-[#ff4f00] to-[#ff844e] rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] p-6 sm:p-8 lg:p-[50px]">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0">
            <div className="w-full lg:w-[56%] text-center lg:text-left lg:pl-[170px]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[80px] font-poppins font-bold leading-[32px] sm:leading-[40px] md:leading-[60px] lg:leading-[86px] text-white mb-4 sm:mb-6 lg:mb-[24px] w-full lg:w-[84%]">
                Join Us in Keeping This Legacy Alive
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-[32px] font-poppins font-normal leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[40px] text-global-7 mb-6 sm:mb-8 lg:mb-[36px] w-full lg:w-[90%]">
                This is not just about cows. It is about connection. About dharma. About choosing compassion in a world that needs more of it. Whether you choose to visit, volunteer, or simply support from afar, know this — every little gesture keeps our shared legacy breathing.
              </p>
              <div className="flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-6 lg:gap-[36px]">
                <Button
                  variant="secondary"
                  className="bg-white text-global-1 font-poppins font-semibold text-base sm:text-lg lg:text-[24px] leading-[24px] sm:leading-[28px] lg:leading-[36px] px-6 py-3 sm:px-8 sm:py-4 lg:px-[34px] lg:py-[24px] rounded-[22px] sm:rounded-[32px] lg:rounded-[44px] hover:bg-gray-100 transition-all duration-200"
                >
                  Join Us @GauSetu
                </Button>
                <Button
                  variant="outline"
                  className="border-[3px] border-white text-white font-poppins font-semibold text-base sm:text-lg lg:text-[24px] leading-[24px] sm:leading-[28px] lg:leading-[36px] px-6 py-3 sm:px-8 sm:py-4 lg:px-[34px] lg:py-[24px] rounded-[22px] sm:rounded-[32px] lg:rounded-[44px] hover:bg-white hover:text-[#ff4f00] transition-all duration-200"
                >
                  Donate Now
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
              <img 
                src="/images/img_martijn_vonk_at_600x650.png" 
                alt="Gaushala" 
                className="w-full max-w-[400px] lg:w-[650px] h-[300px] sm:h-[400px] lg:h-[600px] object-cover rounded-[25px] sm:rounded-[35px] lg:rounded-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Archives Section */}
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-[120px] mb-8 sm:mb-12 lg:mb-[150px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-poppins font-semibold leading-[28px] sm:leading-[36px] md:leading-[48px] lg:leading-[60px] text-center text-global-1 mb-8 sm:mb-12 lg:mb-[50px]">
          From the Archives: Our Roots & Revelations
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-[90px]">
          {/* Article 1 */}
          <div className="w-full lg:w-[500px] flex flex-col items-center gap-4 lg:gap-[20px]">
            <img 
              src="/images/img_bruce_mars_8yg3.png" 
              alt="Umed Sagar" 
              className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-[15px] sm:rounded-[20px] lg:rounded-[30px]"
            />
            <div className="w-full flex flex-col items-start gap-3 lg:gap-[18px]">
              <h3 className="text-lg sm:text-xl lg:text-[31px] font-poppins font-semibold leading-[24px] sm:leading-[28px] lg:leading-[48px] text-left text-global-1 w-full lg:w-[92%]">
                Umed Sagar – The Dam That Watered Devotion
              </h3>
              <a href="#" className="text-sm sm:text-base lg:text-[19px] font-poppins font-medium leading-[20px] sm:leading-[24px] lg:leading-[30px] text-left text-[#ff4f00] hover:underline transition-all duration-200">
                Read More
              </a>
            </div>
          </div>
          {/* Article 2 */}
          <div className="w-full lg:w-[500px] flex flex-col items-center gap-4 lg:gap-[20px]">
            <img 
              src="/images/img_pexels_fauxels_3184324.png" 
              alt="Land of Cows" 
              className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-[15px] sm:rounded-[20px] lg:rounded-[30px]"
            />
            <div className="w-full flex flex-col items-start gap-3 lg:gap-[18px]">
              <h3 className="text-lg sm:text-xl lg:text-[31px] font-poppins font-semibold leading-[24px] sm:leading-[28px] lg:leading-[48px] text-left text-global-1 w-full lg:w-[92%]">
                Land of Cows – A Legacy Reclaimed
              </h3>
              <a href="#" className="text-sm sm:text-base lg:text-[19px] font-poppins font-medium leading-[20px] sm:leading-[24px] lg:leading-[30px] text-left text-[#ff4f00] hover:underline transition-all duration-200">
                Read More
              </a>
            </div>
          </div>
          {/* Article 3 */}
          <div className="w-full lg:w-[500px] flex flex-col items-center gap-4 lg:gap-[20px]">
            <img 
              src="/images/img_bruce_mars_8yg3_400x500.png" 
              alt="Thakurji Temple" 
              className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-[15px] sm:rounded-[20px] lg:rounded-[30px]"
            />
            <div className="w-full flex flex-col items-start gap-3 lg:gap-[18px]">
              <h3 className="text-lg sm:text-xl lg:text-[31px] font-poppins font-semibold leading-[24px] sm:leading-[28px] lg:leading-[48px] text-left text-global-2 w-full lg:w-[92%]">
                Thakurji's Temple – The Divine Pulse of Gaushala
              </h3>
              <a href="#" className="text-sm sm:text-base lg:text-[19px] font-poppins font-medium leading-[20px] sm:leading-[24px] lg:leading-[30px] text-left text-[#ff4f00] hover:underline transition-all duration-200">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default OurStoryPage;