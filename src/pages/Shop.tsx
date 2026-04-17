import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '@/src/types';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Shop = () => {
  const [filter, setFilter] = React.useState('All');
  
  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto bg-white"
    >
      <header className="mb-20">
        <h1 className="text-6xl font-serif mb-8">Our Collection</h1>
        <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs uppercase tracking-[0.2em] text-ink/40 border-b border-ink/5 pb-4">
          {['All', 'Activewear', 'Accessories'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "hover:text-ink transition-colors pb-1 border-b-2",
                filter === cat ? "border-butter text-ink" : "border-transparent"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="pinterest-grid">
        {filteredProducts.map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group break-inside-avoid mb-12"
          >
            <div className="relative aspect-[3/4] bg-muted rounded-2xl overflow-hidden mb-4 group-hover:ring-2 group-hover:ring-butter-accent transition-all duration-300">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ShoppingBag className="w-5 h-5 text-ink" />
              </button>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-sm font-medium tracking-tight">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-xs text-ink/40 uppercase tracking-widest">{product.category}</span>
                <span className="text-xs font-semibold">${product.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
