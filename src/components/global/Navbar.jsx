import React from 'react';
import { MainContent } from '../../constants/MainContent';

const Navbar = () => {
  // Navigation items data to generate the dropdowns cleanly
  const navItems = [
    { name: 'Home', hasDropdown: true },
    { name: 'Shop', hasDropdown: true },
    { name: 'Blog', hasDropdown: true },
    { name: 'Pages', hasDropdown: true },
    { name: 'Mega', hasDropdown: true },
    { name: 'Contacts', hasDropdown: false },
  ];

  return (
    <nav className="w-full bg-white px-8 md:px-12 pt-3 pb-3 font-sans border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto">
        
        {/* === TOP ROW === */}
        <div className="flex justify-between items-center mb-6">
          
          {/* Top Left: Address */}
          <div className="w-1/3 flex justify-start items-center gap-2 text-[13px] text-gray-600 tracking-wide">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>358, Pacific Business Center, Bhopal</span>
          </div>

          {/* Top Center: Logo */}
          <div className="w-1/3 flex justify-center">
            <img className='h-16' src={MainContent.appLogo} alt={MainContent.appName} />
          </div>

          {/* Top Right: Icons */}
          <div className="w-1/3 flex justify-end items-center gap-6 text-[#111111]">
            <button className="hover:text-gray-400 transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </button>
            <button className="hover:text-gray-400 transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button className="hover:text-gray-400 transition-colors duration-300 relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </button>
            <button className="hover:text-gray-400 transition-colors duration-300 relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </button>
          </div>
        </div>

        {/* === BOTTOM ROW === */}
        <div className="flex justify-between items-center">
          
          {/* Bottom Left: Phone */}
          <div className="w-1/3 flex justify-start items-center gap-2 text-[13px] text-gray-600 tracking-wide">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span>+91-91318-23181</span>
          </div>

          {/* Bottom Center: Navigation Links with Animated Dropdowns */}
          <div className="w-1/3 flex justify-center items-center gap-8 text-[14px] text-[#111111] font-medium tracking-wide">
            {navItems.map((item) => (
              <div key={item.name} className="relative group cursor-pointer py-2">
                <div className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors duration-300">
                  {item.name}
                  {item.hasDropdown && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-[2px] opacity-70">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </div>

                {/* Dropdown Menu (Animated) */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-4 w-48 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col py-3 
                                  opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:mt-0 
                                  transition-all duration-300 ease-out z-50">
                    <span className="px-6 py-2 text-[13px] text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">Default {item.name}</span>
                    <span className="px-6 py-2 text-[13px] text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">{item.name} Style 2</span>
                    <span className="px-6 py-2 text-[13px] text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">{item.name} Dark</span>
                    <span className="px-6 py-2 text-[13px] text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">{item.name} Minimal</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Right: Promo Text */}
          <div className="w-1/3 flex justify-end text-[13px] text-gray-600 tracking-wide">
            <span>Best special offers every week! <span className="text-[#111111] font-medium ml-1">40% Off!</span></span>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;