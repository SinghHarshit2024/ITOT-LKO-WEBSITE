import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Filter } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Classes", "Annual Events", "Sports", "Hostel"];

  const images = [
    { url: "/Images/college.jpeg", title: "Main Campus Building", category: "Classes" },
    { url: "/Images/img1.jpeg", title: "Technical Workshop session", category: "Classes" },
    { url: "/Images/img2.jpeg", title: "Practical Lab Training", category: "Classes" },
    { url: "/Images/img3.jpeg", title: "Team Building Activity", category: "Annual Events" },
    { url: "/Images/img4.jpeg", title: "Official Ceremony", category: "Annual Events" },
    { url: "/Images/img5.jpeg", title: "Cultural Festival", category: "Annual Events" },
    { url: "/Images/img6.jpeg", title: "Sports Meet 2023", category: "Sports" },
    { url: "/Images/img1.jpeg", title: "Indoor Sports Room", category: "Sports" },
    { url: "/Images/img2.jpeg", title: "Hostel Dining Hall", category: "Hostel" },
    { url: "/Images/img3.jpeg", title: "Student Common Area", category: "Hostel" },
    { url: "/Images/img4.jpeg", title: "Girls' Hostel Wing", category: "Hostel" },
    { url: "/Images/img5.jpeg", title: "Hostel Garden", category: "Hostel" },
  ];

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="py-24 bg-[#fdfdfc]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Visual Journey</span>
            <h1 className="text-4xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl">
              Moments from <span className="text-amber-500 underline decoration-2 underline-offset-8">ITOT.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
              Explore our campus through a collection of memories, from intensive classroom sessions to vibrant cultural and sports events.
            </p>
          </motion.div>
        </header>

        {/* Filter Bar */}
        <div className="mb-16 flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-gray-100 pb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' 
                  : 'bg-white text-gray-400 hover:text-black border border-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <LayoutGrid className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-widest">Grid View</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div 
                layout
                key={img.title + idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group overflow-hidden rounded-[40px] cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-10">
                  <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{img.category}</span>
                  <p className="text-white font-bold text-xl md:text-2xl tracking-tighter leading-none">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredImages.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-gray-400 font-bold text-xl">No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;

