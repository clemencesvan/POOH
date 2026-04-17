import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-butter-dark/20 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest uppercase">
            POOH
          </Link>
          <p className="text-sm text-ink/60 max-w-xs">
            Live in POOH. Luxury activewear designed for the modern woman. Luminous comfort, aesthetic lifestyle.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-semibold">Shop</h4>
          <ul className="space-y-2 text-sm text-ink/60">
            <li><Link to="/shop" className="hover:text-ink transition-colors">New Arrivals</Link></li>
            <li><Link to="/shop" className="hover:text-ink transition-colors">Best Sellers</Link></li>
            <li><Link to="/shop" className="hover:text-ink transition-colors">The Butter Edit</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-semibold">Brand</h4>
          <ul className="space-y-2 text-sm text-ink/60">
            <li><Link to="/story" className="hover:text-ink transition-colors">Our Story</Link></li>
            <li><a href="#" className="hover:text-ink transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-ink transition-colors">Careers</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-semibold">Newsletter</h4>
          <p className="text-sm text-ink/60">Join our luminous community.</p>
          <div className="flex border-b border-ink/20 pb-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent text-sm w-full outline-none"
            />
            <button className="text-xs uppercase tracking-widest font-medium">Join</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-[10px] uppercase tracking-widest text-ink/40">
          © 2026 POOH LUXURY ACTIVEWEAR. ALL RIGHTS RESERVED.
        </p>
        <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-ink/40">
          <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-ink transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
