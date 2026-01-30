import React from 'react';

const categories = [
  { id: 1, name: 'Galaxy', image: './assets/images/20-1019.png' }, 
  { id: 2, name: 'Accessories', image: './assets/images/20-1020.png' }, 
  { id: 3, name: 'Camera', image: './assets/images/20-1029.png' }, 
  { id: 4, name: 'Furniture', image: './assets/images/20-1031.png' },
  { id: 5, name: 'Fashion', image: './assets/images/20-1015.png' }, 
  { id: 6, name: 'Grocery', image: './assets/images/22-244.png' }, 
];

export const CategorySection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 lg:px-20 py-10 font-sans border-b border-border">
      <div className="flex justify-between gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center gap-3 min-w-[110px] cursor-pointer group">
            <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-bg-light flex items-center justify-center overflow-hidden border border-border group-hover:border-primary transition-all shadow-sm group-hover:shadow-md">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover"/>
            </div>
            <span className="font-semibold text-dark group-hover:text-primary transition-colors text-center">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
