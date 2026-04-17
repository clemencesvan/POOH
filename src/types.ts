export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  colors: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Second-Skin Leggings',
    price: 98,
    category: 'Activewear',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    description: 'Our signature butter-soft fabric that feels like a second skin. High-waisted and squat-proof.',
    colors: ['Butter', 'Soft White', 'Cream']
  },
  {
    id: '2',
    name: 'Cloud-Soft Sports Bra',
    price: 64,
    category: 'Activewear',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    description: 'Minimalist design with maximum comfort. Perfect for pilates and yoga.',
    colors: ['Butter', 'Soft White']
  },
  {
    id: '3',
    name: 'Aesthetic Jogger Set',
    price: 148,
    category: 'Activewear',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    description: 'The ultimate lounge-to-studio set in our signature butter yellow.',
    colors: ['Butter']
  },
  {
    id: '4',
    name: 'Oversized Dream Hoodie',
    price: 118,
    category: 'Activewear',
    image: 'https://images.unsplash.com/photo-1556813820-673f9f12753b?auto=format&fit=crop&q=80&w=800',
    description: 'Luxuriously soft, heavy-weight cotton blend for that effortless aesthetic look.',
    colors: ['Cream', 'Butter']
  },
  {
    id: '5',
    name: 'Pilates Sculpt Top',
    price: 72,
    category: 'Activewear',
    image: 'https://images.unsplash.com/photo-1518611012118-296072bb58c4?auto=format&fit=crop&q=80&w=800',
    description: 'A flattering, form-fitting top designed for movement and style.',
    colors: ['Butter', 'Soft White']
  },
  {
    id: '7',
    name: 'POOH Sculpting Mat',
    price: 85,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1592433351024-8814a09c25b6?auto=format&fit=crop&q=80&w=800',
    description: 'A thick, non-slip mat designed for the perfect Pilates flow.',
    colors: ['Cream']
  },
  {
    id: '8',
    name: 'Butter-Soft Towel',
    price: 45,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aec16adcd?auto=format&fit=crop&q=80&w=800',
    description: 'Ultra-absorbent and aesthetic microfiber towel for your hair or body.',
    colors: ['Butter', 'Soft White']
  },
  {
    id: '9',
    name: 'Luminous Water Bottle',
    price: 48,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1602143399827-7217ef73b45e?auto=format&fit=crop&q=80&w=800',
    description: 'Matte-finish stainless steel bottle to keep you hydrated in style.',
    colors: ['Butter', 'Cream']
  },
  {
    id: '10',
    name: 'Silk Scrunchie Set',
    price: 28,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc38c665434?auto=format&fit=crop&q=80&w=800',
    description: 'Prevent hair breakage while looking effortless with our silk scrunchies.',
    colors: ['Butter', 'Soft White', 'Cream']
  },
  {
    id: '11',
    name: 'POOH Headband',
    price: 22,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1588615419958-3939e6a008c7?auto=format&fit=crop&q=80&w=800',
    description: 'Keep your focus with our signature soft headband.',
    colors: ['Soft White']
  }
];
