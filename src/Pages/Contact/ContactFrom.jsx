import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Instagram, Facebook, Twitter, ExternalLink } from "lucide-react";
import { MainContent } from "../../constants/MainContent";

const ContactPage = () => {
  return (
    <div className="bg-[#FCFBFA] font-sans overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        {/* --- Header --- */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-amber-600 font-bold text-[12px] tracking-[6px] uppercase"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-extralight text-zinc-900 mt-4 tracking-tight">
            Let’s Create Something <span className="italic font-serif">Timeless</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* --- LEFT SIDE: Contact Information --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5"
          >
            {/* <h3 className="text-2xl font-light text-zinc-800 mb-8 border-b border-zinc-200 pb-4">
              Studio Information
            </h3> */}

            <div className="grid gap-6">
              {/* Address Card */}
              <motion.div whileHover={{ x: 10 }} className="group flex items-center gap-6 p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm transition-all hover:shadow-md">
                <div className="bg-amber-100 p-4 rounded-xl text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-[2px] text-zinc-400">Our Studio</h4>
                  <p className="text-zinc-800 mt-1 font-medium leading-snug">
                    {MainContent.address}
                  </p>
                </div>
              </motion.div>

              {/* Email & Phone Card */}
              <motion.div whileHover={{ x: 10 }} className="group flex items-center gap-6 p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm transition-all hover:shadow-md">
                <div className="bg-amber-100 p-4 rounded-xl text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-[2px] text-zinc-400">Quick Contact</h4>
                  <p className="text-zinc-800 mt-1 font-semibold">{MainContent.contactNo}</p>
                  <p className="text-zinc-500 text-sm">{MainContent.email}</p>
                </div>
              </motion.div>

              {/* Working Hours Card */}
              <motion.div whileHover={{ x: 10 }} className="group flex items-center gap-6 p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm transition-all hover:shadow-md">
                <div className="bg-amber-100 p-4 rounded-xl text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-[2px] text-zinc-400">Visiting Hours</h4>
                  <p className="text-zinc-800 mt-1 font-medium">Mon — Sat: 10:30 AM – 06:30 PM</p>
                  <p className="text-zinc-400 text-[11px] italic">Sunday: Closed (By Appointment Only)</p>
                </div>
              </motion.div>
            </div>

            {/* Social Media Section */}
            <div className="mt-12 p-8 rounded-[2rem] bg-zinc-900 text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-amber-500 font-bold text-[10px] tracking-[4px] uppercase mb-4">Social Presence</p>
                <h4 className="text-xl font-light mb-6">Follow our latest designs on social media</h4>
                <div className="flex gap-4">
                  {[ 
                    { icon: <Instagram size={20} />, link: MainContent.instagram || "#" },
                    { icon: <Facebook size={20} />, link: MainContent.facebook || "#" },
                    { icon: <Twitter size={20} />, link: MainContent.twitter || "#" }
                  ].map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.link}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white hover:border-amber-500 transition-all"
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
              {/* Decorative Circle for Style */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-600/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: Form (Same as previous updated version) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-zinc-200/60 border border-zinc-100"
          >
             <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Full Name</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Email Address</label>
                  <input type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10 outline-none transition-all" placeholder="email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Your Message</label>
                <textarea rows="6" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10 outline-none transition-all resize-none" placeholder="Tell us about your dream jewelry..."></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.01, backgroundColor: "#000" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-zinc-900 text-white py-4 rounded-2xl font-bold tracking-[2px] uppercase flex items-center justify-center gap-3 shadow-lg shadow-zinc-300 transition-all"
              >
                Send Inquiry <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;