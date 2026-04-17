import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Story = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-32 pb-20 bg-white"
    >
      <section className="max-w-4xl mx-auto px-6 text-center mb-32 space-y-8">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] uppercase tracking-[0.5em] text-ink/30 font-bold block"
        >
          Our Essence
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-serif tracking-tighter"
        >
          Slow <span className="italic">Flow</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-ink/60 leading-relaxed max-w-2xl mx-auto font-serif"
        >
          POOH is more than activewear. It is a commitment to the art of living well. Inspired by the soft light of morning Pilates studios and the effortless grace of a city flow.
        </motion.p>
      </section>

      <section className="px-6 max-w-7xl mx-auto space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif leading-tight">The "Pilates Girl" <br /> Philosophy.</h2>
            <p className="text-ink/60 leading-relaxed">
              We create pieces for women who find strength in softness. Our fabrics are engineered to support your body while feeling invisible, allowing you to focus entirely on your breath and movement.
            </p>
          </div>
          <div className="rounded-[3rem] overflow-hidden bg-muted aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1000" 
              alt="Pilates core" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="rounded-[3rem] overflow-hidden bg-muted aspect-[4/5] md:order-first order-last">
            <img 
              src="https://images.unsplash.com/photo-1591047139829-d91aec16adcd?auto=format&fit=crop&q=80&w=1000" 
              alt="Lifestyle details" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-serif leading-tight">Aesthetic <br /> Everyday.</h2>
            <p className="text-ink/60 leading-relaxed">
              From our flagship studio vibes in Le Marais to the scrunchie in your hair, POOH is designed to elevate every second of your day into a moment of aesthetic pleasure.
            </p>
            <div className="pt-8">
              <Link to="/coffee" className="text-xs uppercase tracking-widest border-b border-ink pb-1 font-bold">Discover our cafe</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-48 px-6 text-center">
        <h2 className="text-3xl font-serif italic mb-12 opacity-80">Be part of the ritual.</h2>
        <div className="flex justify-center space-x-12 text-[10px] uppercase tracking-[0.3em] font-bold text-ink/40">
          <a href="#" className="hover:text-ink transition-colors">Instagram</a>
          <a href="#" className="hover:text-ink transition-colors">Pinterest</a>
          <a href="#" className="hover:text-ink transition-colors">Studio</a>
        </div>
      </section>
    </motion.div>
  );
};
