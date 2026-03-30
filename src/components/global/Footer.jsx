import React from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaXTwitter, 
  FaYoutube, 
  FaLocationDot, 
  FaPhone, 
  FaClock, 
  FaEnvelope 
} from 'react-icons/fa6';

import { MainContent } from "../../constants/MainContent.js";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#999999] pt-16 pb-12 px-6 font-sans border-t border-stone-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 pb-20">
        
        {/* Column 1 */}
        <div>
          <h4 className="text-white uppercase text-[11px] tracking-[0.2em] font-bold mb-8">My Account</h4>
          <ul className="space-y-4 text-[13px]">
            {["My account","Wishlist","Cart","Checkout","Maintenance Mode","Register Now"].map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer flex items-center gap-2 transition">
                <span className="text-[10px] opacity-40">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-white uppercase text-[11px] tracking-[0.2em] font-bold mb-8">Information</h4>
          <ul className="space-y-4 text-[13px]">
            {["About Us","Our Blog","FAQ","Contacts","Terms & Conditions","Refund Policy"].map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer flex items-center gap-2 transition">
                <span className="text-[10px] opacity-40">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Dynamic Contacts */}
        <div className="space-y-6">
          <h4 className="text-white uppercase text-[11px] tracking-[0.2em] font-bold mb-8">
            Our Contacts
          </h4>

          <div className="space-y-4 text-[13px]">
            <div className="flex items-start gap-4">
              <FaLocationDot className="mt-1 text-white text-[14px]" />
              <p>{MainContent.address}</p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-white text-[14px]" />
              <a href={`tel:${MainContent.contactNo}`} className="hover:text-white">
                {MainContent.contactNo}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaClock className="text-white text-[14px]" />
              <p>Mon - Sat: 10:30 - 18:30</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-white text-[14px]" />
              <a href={`mailto:${MainContent.email}`} className="hover:text-white">
                {MainContent.email}
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 pt-4">
            {[FaFacebookF, FaInstagram, FaXTwitter, FaYoutube].map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer text-stone-400">
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-[11px] tracking-wider text-stone-600 mb-6 md:mb-0">
          © {new Date().getFullYear()} {MainContent.appName}. ALL RIGHTS RESERVED.
        </p>

        {/* Payment Icons */}
        <div className="flex items-center gap-2">
          <div className="bg-white rounded px-1.5 py-0.5">
            <span className="text-[#1A1F71] font-bold italic text-[10px]">VISA</span>
          </div>

          <div className="bg-[#111111] border border-stone-800 rounded px-1 py-0.5 flex items-center gap-0.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EB001B]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#F79E1B] -ml-1.5 opacity-80"></div>
          </div>

          <div className="bg-white rounded px-1.5 py-0.5 flex">
            <span className="text-[#003087] font-bold italic text-[10px]">Pay</span>
            <span className="text-[#009CDE] font-bold italic text-[10px]">Pal</span>
          </div>

          <div className="bg-[#0070D1] rounded px-1.5 py-0.5">
            <span className="text-white font-bold text-[9px]">AMEX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;