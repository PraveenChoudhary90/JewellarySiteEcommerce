const Footer = () => (
  <footer className="bg-stone-900 text-stone-400 py-20 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-stone-800 pb-16">
      <div className="col-span-1 md:col-span-1">
        <div className="text-2xl font-serif text-white tracking-widest mb-6">AURUM</div>
        <p className="text-sm leading-relaxed">Defining luxury since 1924. Quality you can feel, elegance you can see.</p>
      </div>
      <div>
        <h4 className="text-white uppercase text-[10px] tracking-widest mb-6">Shop</h4>
        <ul className="space-y-4 text-xs">
          <li>Necklaces</li>
          <li>Rings</li>
          <li>Bracelets</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white uppercase text-[10px] tracking-widest mb-6">Service</h4>
        <ul className="space-y-4 text-xs">
          <li>Shipping</li>
          <li>Returns</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white uppercase text-[10px] tracking-widest mb-6">Newsletter</h4>
        <input type="text" placeholder="Your email" className="bg-transparent border-b border-stone-700 w-full py-2 text-xs focus:outline-none focus:border-amber-600 transition" />
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 flex justify-between text-[10px] uppercase tracking-[0.2em]">
      <p>© 2026 Aurum Jewelry</p>
      <p>Privacy Policy</p>
    </div>
  </footer>
);

export default Footer;