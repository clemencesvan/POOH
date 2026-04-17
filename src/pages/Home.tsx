import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-16 pb-20 bg-white"
    >
      {/* Pinterest-style Header */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-7xl md:text-9xl font-serif mb-6 tracking-tighter"
        >
          Live in <span className="italic">POOH</span>
        </motion.h1>
        <p className="text-ink/40 uppercase tracking-[0.3em] text-xs">Aesthetic activewear for your daily flow</p>
      </section>

      {/* Masonry-style Grid */}
      <section className="px-6 max-w-7xl mx-auto pb-32">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <div className="break-inside-avoid">
            <div className="relative group overflow-hidden rounded-3xl bg-muted">
              <span className="absolute top-4 left-4 z-10 bg-butter-accent px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold">Best Seller</span>
              <img 
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800" 
                alt="Pilates session" 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <Link to="/shop" className="bg-white px-6 py-2 rounded-full text-xs uppercase tracking-widest">Shop Active</Link>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid">
            <div className="p-12 bg-cream rounded-3xl flex flex-col justify-center items-center text-center space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-40">Essentials</span>
              <h2 className="text-3xl font-serif italic">"Softness that moves with you"</h2>
              <Link to="/shop" className="text-xs border-b border-ink pb-1 opacity-60 hover:opacity-100 transition-opacity">View The Edit</Link>
            </div>
          </div>

          <div className="break-inside-avoid">
            <div className="relative group overflow-hidden rounded-3xl bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
                alt="Matcha latte" 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <Link to="/coffee" className="bg-white px-6 py-2 rounded-full text-xs uppercase tracking-widest">Visit the Cafe</Link>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid">
            <div className="relative group overflow-hidden rounded-3xl bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" 
                alt="Butter yellow set" 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <Link to="/shop" className="bg-white px-6 py-2 rounded-full text-xs uppercase tracking-widest">Shop Sets</Link>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid">
            <div className="relative group overflow-hidden rounded-3xl bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1591047139829-d91aec16adcd?auto=format&fit=crop&q=80&w=800" 
                alt="Aesthetic towels" 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <Link to="/shop" className="bg-white px-6 py-2 rounded-full text-xs uppercase tracking-widest">Shop Lifestyle</Link>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid">
            <div className="p-12 border border-ink/5 rounded-3xl space-y-8">
              <h3 className="text-xl font-serif">POOH Club</h3>
              <p className="text-ink/60 text-sm leading-relaxed">Join 10k+ women who living the POOH lifestyle. Effortless, luminous, and always aesthetic.</p>
              <div className="flex border-b border-ink/10 pb-2">
                <input type="email" placeholder="Email" className="bg-transparent text-sm w-full outline-none" />
                <button className="text-[10px] uppercase tracking-widest font-bold bg-butter-accent px-3 py-1 rounded-full hover:bg-butter transition-colors">Join</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilates Grid Section */}
      <section className="bg-muted py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 px-6">
            <h2 className="text-4xl md:text-5xl font-serif">The Pilates Edit</h2>
            <p className="text-ink/60 leading-relaxed text-lg">
              Designed for low-impact movement and high-aesthetic impact. From silk scrunchies to second-skin leggings, we have your flow covered.
            </p>
            <Link to="/shop" className="inline-flex items-center space-x-2 border-b border-ink pb-1 uppercase text-xs tracking-widest">
              <span>View Collection</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1518611012118-296072bb58c4?auto=format&fit=crop&q=80&w=600" alt="Pilates" className="rounded-2xl" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1592433351024-8814a09c25b6?auto=format&fit=crop&q=80&w=600" alt="Mat" className="rounded-2xl mt-8" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};
