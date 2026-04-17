import { motion } from 'motion/react';
import { MapPin, Clock, Coffee } from 'lucide-react';

export const CoffeeShop = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto bg-white"
    >
      <header className="mb-20 text-center space-y-4">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 text-ink">The POOH Experience</span>
        <h1 className="text-7xl md:text-8xl font-serif">POOH <span className="italic">Café</span></h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif leading-tight">A ritual of <br /> slow living in the <br /> heart of <span className="italic">Le Marais</span>.</h2>
            <p className="text-ink/60 leading-relaxed text-lg">
              Located in the historic Le Marais district, the POOH Café is an extension of our philosophy. A luminous sanctuary designed for women to recharge, reflect, and enjoy the finest artisanal brews.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-5 h-5 mt-1 opacity-40" />
              <div>
                <h4 className="font-medium text-sm mb-1 uppercase tracking-widest text-[10px]">Location</h4>
                <p className="text-ink/60">Rue de Bretagne, 75003 Paris</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-5 h-5 mt-1 opacity-40" />
              <div>
                <h4 className="font-medium text-sm mb-1 uppercase tracking-widest text-[10px]">Hours</h4>
                <p className="text-ink/60">Mon - Sun: 08:30 — 18:00</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Coffee className="w-5 h-5 mt-1 text-butter-dark" />
              <div>
                <h4 className="font-medium text-sm mb-1 uppercase tracking-widest text-[10px]">Specialties</h4>
                <p className="text-ink/60 italic font-serif text-lg bg-butter/30 px-2 py-1 rounded">Ceremonial Grade Matcha & Shakerato Iced Coffee</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
            alt="POOH Café Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-x-0 bottom-0 p-8">
            <div className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
              <p className="text-ink text-sm italic font-serif leading-relaxed">
                "The light here at 10 AM is magic. The perfect spot to flow or find focus."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Menu Grid */}
      <section className="space-y-12">
        <h3 className="text-center font-serif text-3xl italic">The Daily Menu</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Iced Matcha Latte', price: '7.5', desc: 'Japanese ceremonial grade whisked to perfection over filtered ice.', img: 'https://images.unsplash.com/photo-1515822369061-262dcaaf1bda?auto=format&fit=crop&q=80&w=600' },
            { name: 'Shakerato Noir', price: '6.0', desc: 'Double shot of cold-brew espresso shaken with agave and sea salt.', img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600' },
            { name: 'POOH Special Glow', price: '8.5', desc: 'Cold pressed orange, ginger, and collagen for the ultimate morning ritual.', img: 'https://images.unsplash.com/photo-1622597467822-5407021ca66b?auto=format&fit=crop&q=80&w=600' },
          ].map((item) => (
            <div key={item.name} className="space-y-4">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex justify-between items-start pt-2">
                <div>
                  <h4 className="font-serif italic text-lg">{item.name}</h4>
                  <p className="text-xs text-ink/40 leading-relaxed max-w-[200px]">{item.desc}</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-butter-accent"></span>
                  <span className="text-xs font-semibold">€{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
