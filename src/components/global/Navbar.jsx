import React from 'react';
import { Link } from 'react-router-dom';
import { MainContent } from '../../constants/MainContent';
import { EcomRoutes } from '../../constants/Routes';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', hasDropdown: true, path: EcomRoutes.HOME },
    { name: 'Shop', hasDropdown: true, path: EcomRoutes.Shop },
    { name: 'Blog', hasDropdown: true, path: EcomRoutes.Blog },
    { name: 'Pages', hasDropdown: true, path: EcomRoutes.About },
    { name: 'Mega', hasDropdown: true, path: EcomRoutes.Mega },
    { name: 'Contacts', hasDropdown: false, path: EcomRoutes.Contact },
  ];

  return (
    <nav className="w-full bg-white px-4 p-2  md:pt-3 md:pb-3 md:px-4 lg:px-12 font-sans border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto">

        {/* === TOP ROW === */}
        <div className="flex flex-wrap justify-between items-center gap-3  md:mb-6">

          {/* Top Left: Address (desktop only) */}
          <div className="hidden md:flex items-center gap-2 text-[13px] text-gray-600 tracking-wide">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{MainContent.address}</span>
          </div>

          {/* Logo */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-center">
            <Link to={EcomRoutes.HOME}>
              <img className=' md:h-16 w-auto' src={MainContent.appLogo} alt={MainContent.appName} />
            </Link>
          </div>

          {/* Icons + Mobile Toggle */}
          <div className="flex items-center gap-3 md:gap-6">
            <button className="inline-flex hover:text-gray-400 transition-colors duration-300" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </button>

            <button className="inline-flex hover:text-gray-400 transition-colors duration-300" aria-label="User">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

            <button className="inline-flex hover:text-gray-400 transition-colors duration-300" aria-label="Wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </button>

            <button className="inline-flex hover:text-gray-400 transition-colors duration-300" aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </button>

            <button
              onClick={() => setMobileNavOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-md border border-gray-200 hover:border-gray-300 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={mobileNavOpen ? 'M6 18L18 6M6 6l12 12' : 'M3 12h18M3 6h18M3 18h18'} />
              </svg>
            </button>
          </div>
        </div>

        {/* === BOTTOM ROW (desktop only) === */}
        <div className="hidden md:flex justify-between items-center">

          {/* Bottom Left: Phone */}
          <div className="flex items-center gap-2 text-[13px] text-gray-600 tracking-wide">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2..." />
            </svg>
            <span>{MainContent.contactNo}</span>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center items-center gap-8 text-[14px] text-[#111111] font-medium tracking-wide">
            {navItems.map((item) => (
              <div key={item.name} className="relative group cursor-pointer py-2">
                <Link to={item.path} className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors duration-300">
                  {item.name}
                  {item.hasDropdown && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-[2px] opacity-70">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom Right Promo */}
          <div className="hidden lg:flex items-center text-[13px] text-gray-600 tracking-wide">
  <span>
    Best special offers every week! <span className="text-[#111111] font-medium ml-1">40% Off!</span>
  </span>
</div>
        </div>

       {/* === Mobile Menu === */}
<div className={`${mobileNavOpen ? 'block' : 'hidden'} md:hidden bg-white border-t  border-gray-100 shadow-lg animate-in slide-in-from-top duration-300`}>
  <ul className="px-4 py-6 space-y-1">
    {navItems.map((item) => (
      <li key={item.name}>
        <Link
          to={item.path}
          className="flex justify-between items-center px-4 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 hover:text-[#D4AF37] rounded-lg transition-all duration-200"
          onClick={() => setMobileNavOpen(false)}
        >
          <span>{item.name}</span>
          
          {item.hasDropdown && (
            <svg 
              width="16" height="16" 
              viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" strokeWidth="2" 
              className="opacity-50 group-hover:rotate-180 transition-transform"
            >
              <path d="M9 18l6-6-6-6" /> {/* Right arrow looks cleaner on mobile */}
            </svg>
          )}
        </Link>
      </li>
    ))}
  </ul>

  {/* Bottom Contact Info in Menu */}
  <div className="mx-4 mb-6 p-4 bg-gray-50 rounded-xl space-y-3">
    <div className="flex items-center gap-3 text-[13px] text-gray-600">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
      <span className="font-medium">{MainContent.contactNo}</span>
    </div>
    <div className="flex items-start gap-3 text-[13px] text-gray-600">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      <span className="leading-relaxed">{MainContent.address}</span>
    </div>
  </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;